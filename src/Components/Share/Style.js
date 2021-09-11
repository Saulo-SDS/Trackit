import styled from "styled-components";

const Input = styled.input`
    width: 303px;
    height: 45px;
    margin-bottom: 6px;
    padding-left: 11px;
    border: 1px solid #D4D4D4;
    border-radius: 5px;
`;

const LogoImg = styled.img`
    width: 180px;
    height: 178.38px;
    margin-top: 68px;
    margin-bottom: 33px;
`;

const Button = styled.button`
    width: 303px;
    height: 45px;
    font-family: Lexend Deca;
    font-size: 21px;
    font-weight: 400;
    line-height: 26px;
    color: #FFFFFF;
    border-radius: 5px;
    border: none;
    margin-bottom: 25px;
    background-color: #52B6FF;
`;

const Form = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    a {
        color: #52B6FF;
        font-size: 13.98px;
    }
`;

export {
    Form,
    Input,
    LogoImg,
    Button
}