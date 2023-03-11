import styled from "styled-components";

export const StyledForm = styled.form`
    color: black;
    min-width: 150vh;
`;

export const Fieldset = styled.fieldset`
    display: block;
    max-width: 650px;
    margin: auto auto;
    border-radius: 5px;
    border-color: rgb(44, 43, 43);
    background-color: white;
    box-shadow: 5px -5px 24px 0px rgba(127, 82, 0, 0.3);
`;

export const Legend = styled.legend`
    background-color: rgb(248, 143, 6);
    color: rgb(44, 43, 43);
    border: 1px solid rgb(248, 143, 6);
    ;
    border-radius: 5px;
    margin: 10px 10px;
    padding: 2px;
    box-shadow: 5px -5px 24px 0px rgba(127, 82, 0, 0.3);
`;

export const List = styled.ul`
    list-style: none;
    font-weight: 700;
    padding: 0;
`;

export const Item = styled.li`
    padding: 10px;
`;

export const LabelText = styled.span`
    font-size: 600;
    font-family: "lato", sans-serif;
`;

export const StyledSelect = styled.select`
    margin: auto 10px;
`;

export const Button = styled.button`
    max-width: 100px;
    position: relative;
    margin: 20px auto;
`;

export const StyledResult = styled.div`
    font-weight: bold;
    text-align: center;
`;