import { useState } from "react";
import { StyledForm, 
    Fieldset, 
    Legend, 
    List, 
    Item, 
    LabelText, 
    StyledSelect, 
    Button, 
    StyledResult,
    Loading,
    Fail } from "./styled";
import { Result } from "../Result";
import Clock from "../Clock";
import { useRatesData } from "./useRatesData";

const Form = () => {
    const [result, setResult] = useState();
    const [currency, setCurrency] = useState("EUR");
    const [amount, setAmount] = useState("");
    const ratesData = useRatesData();

    const calculateResult = (currency, amount) => {
        const rate = ratesData.rates[currency];

        setResult({
            sourceAmount: +amount,
            targetAmount: amount * rate,
            currency,
        });
    }

    const onFormSubmit = (event) => {
        event.preventDefault();
        calculateResult(currency, amount);
    };

    return (
        <StyledForm onSubmit={onFormSubmit}>
            <Fieldset>
                <Legend>Kalkulator Walut</Legend>
                {ratesData.state === "loading" ? (
                    <Loading>
                        Prosimy czekać, trwa ładowanie kursu walut z Europejskiego Banku Centralnego
                    </Loading>
                ) : ratesData.state === "error" ? (
                    <Fail>
                        Coś poszło nie tak. Sprawdź połączenie z Internetem lub spróbuj ponownie później.
                    </Fail>
                ) : (
                <section>
                <Clock/>
                <List>
                <Item>
                <label>
                    <LabelText>Kwota do wymiany w PLN:</LabelText>
                        <StyledSelect 
                            as="input"
                            value={amount}
                            onChange={({ target }) => setAmount(target.value)}
                            type="number" 
                            name="pln" 
                            required step="0.01" 
                            min="0"
                            placeholder="Wpisz kwotę" 
                        />
                </label>
                </Item>
                <Item>
                <label>
                    <LabelText>Wybierz walutę:</LabelText>
                        <StyledSelect 
                            value={currency} 
                            onChange={({ target }) => setCurrency(target.value)} 
                        >
                            {Object.keys(ratesData.rates).map((currency) => {
                                return (
                                    <option key={currency} value={currency}>
                                        {currency}
                                    </option>
                                );
                            })}
                        </StyledSelect>
                </label>
                </Item>
                </List>
                <div>
                    <Button>Przelicz</Button>
                </div>
                <StyledResult>
                <span>Twoja kwota wynosi:</span>
                        <strong>
                            <Result result={result} />
                        </strong>
                </StyledResult>
                </section>
                )}
            </Fieldset>
        </StyledForm>
    )
};

export default Form;