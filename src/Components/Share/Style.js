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
    width: ${props => props.width ? props.width : "303px"};
    height: ${props => props.height ? props.height : "45px"};
    font-family: Lexend Deca;
    font-size: ${props => props.fontSize ? props.fontSize : "21px"};
    font-weight: 400;
    line-height: 26px;
    color: ${props => props.color ? props.color : "#fff"};
    border-radius: 5px;
    border: none;
    margin-bottom: 25px;
    background-color: ${props => props.background ? props.background : "#52B6FF"};
    opacity: ${props => props.opacity};
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    p {
        color: #52B6FF;
        font-size: 13.98px;
        text-decoration: underline;
    }
`;

export {
    Form,
    Input,
    LogoImg,
    Button
}