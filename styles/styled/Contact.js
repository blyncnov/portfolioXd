import styled from "styled-components"

export const FormContact = styled.form`
width: 100%;
margin: 0 auto;
padding: 1em 0;
display: block;


input, textarea{
    width: 100%;
    padding: 0 .5em;
    height: 42px;
    border: .9px solid rgba(129,129,129,.2);
    border-radius: 2px;
    margin-bottom: 1em;
    font-size: 1.2em;
    color: #112240;
    background-color: transparent;
    transition: all 0.5s ease-in-out;
    vertical-align: middle;
    font-size: 14px;

    &:focus{
        outline: none;
        border: 1px solid #112240;
    }
}


textarea{
    min-height: 190px;
    overflow: auto;
    padding: 10px 15px;
}

button{
      background-color: #2F83F2;
    border: 1px solid #0283F2;
    box-shadow: 0px 0px 1px rgba(40, 41, 61, 0.04),
    0px 2px 4px rgba(96, 97, 112, 0.16);
    font-weight: 500;
    font-size: 13px;
    line-height: 20px;
    text-align: center;
    letter-spacing: 0.08em;
    text-transform: Capitalise;
    padding: 12px 24px;
    border-radius: 4px;
    cursor: pointer;
    color: white;
    transition: all 0.5s ease-in-out, color 0.15s ease-in-out,
      background-color 0.5s ease-in-out, border-color 0.15s ease-in-out,
      box-shadow 0.15s ease-in-out;
}

`

export default FormContact