import { useState } from "react";
import "./style.css";
import currencies from "../currencies";
import Result from "../Result";

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
        <form className="form" onSubmit={onFormSubmit}>
            <fieldset className="form__fieldset">
                <legend className="form__legend">Kalkulator Walut</legend>
                <ul className="form__list">
                <li className="form__listItem">
                <label>
                    <span className="form__labelText">Kwota do wymiany:</span>
                        <input 
                            value={inAmout}
                            onChange={(event) => setInAmout(event.target.value)}
                            type="number" 
                            className="form__select" 
                            name="pln" 
                            required step="0.01" 
                            min="0"
                            placeholder="Wpisz kwotę" 
                        />
                </label>
                </li>
                <li className="form__listItem">
                <label>
                     <span className="form__labelText">Wybierz walutę jaką wymieniasz:</span>
                        <select value={inCurrency} onChange={onSelectInCurrency} className="form__select">
                            {currencies.map(currency => (
                                <option value={currency.name} key={currency.name}>
                                    {currency.name}</option>
                        ))}
                        </select>
                </label>
                </li>
                <li className="form__listItem">
                <label>
                    <span className="form__labelText">Wybierz walutę na jaką chcesz wymienić:</span>
                    <select value={outCurrency} onChange={onSelectOutCurrency} className="form__select">
                        {currencies.map(currency => (
                            <option value={currency.name} key={currency.name}>
                                {currency.name}</option>
                        ))}
                    </select>
                </label>
                </li>
                </ul>
                <div>
                    <button className="form__button">Przelicz</button>
                </div>
                <div className="result">
                <span>Twoja kwota wynosi:</span>
                        <strong>
                            <Result showResult={showResult} result={result} />
                        </strong>
                </div>
            </fieldset>
        </form>
    )
};

export default Form;