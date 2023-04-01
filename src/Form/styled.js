import styled from "styled-components";

export const StyledForm = styled.form`
    color: black;
    min-width: 150vh;
`;

export const Fieldset = styled.fieldset`
    display: block;
    max-width: 650px;
    min-height: 300px;
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
    position: relative;
    margin: 0px 0px 35px;
    transition: 0.5s;
    width: 100%;
    background-color: rgb(171 171 171 / 57%);
    border: none;
    border-radius: 5px;
    box-shadow: 2px 2px 8px #aaa;
`;

export const StyledResult = styled.div`
    font-weight: bold;
    text-align: center;
`;

export const Loading = styled.p`
    color: teal;
    justify-content: center;
    min-width: 500px;
    min-height: 200px;
`;

export const Fail = styled.p`
    color: crimson;
    justify-content: center;
    min-width: 500px;
    min-height: 200px;
`;

export const StyledParagraph = styled.p`
    text-align: center;
    margin: 10px 0px 0px 0px;
    padding: 2px 0px 0px 0px;
    font-size: 10px;
`;