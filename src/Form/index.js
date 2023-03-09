import { useState } from "react";
import { StyledForm, Fieldset, Legend, List, Item, LabelText, StyledSelect, Button, StyledResult } from "./styled";
import currencies from "../currencies";
import Result from "../Result";
import Clock from "../Clock";

const Form = () => {
    const [inAmout, setInAmout] = useState();
    const [inCurrency, setInCurrency] = useState("PLN");
    const [outCurrency, setOutCurrency] = useState("EUR");
    const [result, setResult] = useState();
    const [showResult, setShowResult] = useState({});

    const onSelectInCurrency = ({ target }) => setInCurrency(target.value);
    const onSelectOutCurrency = ({ target }) => setOutCurrency(target.value);
    const calculateResult = () => {
        setResult(result => (
            (inAmout * currencies.find(currency => currency.name=== inCurrency).toPLN)) /
            currencies.find(currency => currency.name=== outCurrency).toPLN)
    };

    const onFormSubmit = (event) => {
        event.preventDefault();
        calculateResult();
        setShowResult(showResult => ({ inAmout, inCurrency, outCurrency }));
    };

    return (
        <StyledForm onSubmit={onFormSubmit}>
            <Fieldset>
                <Legend>Kalkulator Walut</Legend>
                <Clock/>
                <List>
                <Item>
                <label>
                    <LabelText>Kwota do wymiany:</LabelText>
                        <StyledSelect
                            value={inAmout}
                            onChange={(event) => setInAmout(event.target.value)}
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
                     <LabelText>Wybierz walutę jaką wymieniasz:</LabelText>
                        <StyledSelect value={inCurrency} onChange={onSelectInCurrency}>
                            {currencies.map(currency => (
                                <option value={currency.name} key={currency.name}>
                                    {currency.name}</option>
                        ))}
                        </StyledSelect>
                </label>
                </Item>
                <Item>
                <label>
                    <LabelText>Wybierz walutę na jaką chcesz wymienić:</LabelText>
                    <StyledSelect value={outCurrency} onChange={onSelectOutCurrency}>
                        {currencies.map(currency => (
                            <option value={currency.name} key={currency.name}>
                                {currency.name}</option>
                        ))}
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
                            <Result showResult={showResult} result={result} />
                        </strong>
                </StyledResult>
            </Fieldset>
        </StyledForm>
    )
};

export default Form;