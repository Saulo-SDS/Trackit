import Logo from "./logo.png"
import styled from "styled-components";

export default function Login() {
    return (
        <Form >
            <LogoImg src={Logo} alt="Logo"/>
            <Input type="text" placeholder="email" ></Input>
            <Input type="text" placeholder="senha" ></Input>
            <Button>Entrar</Button>
            <a href="#">Não tem uma conta? Cadastre-se!</a>
        </Form >
    );
}

const Form = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    a {
        color: #52B6FF;
        font-size: 13.98px;
    }
`;

const LogoImg = styled.img`
    width: 180px;
    height: 178.38px;
    margin-top: 68px;
    margin-bottom: 32.62px;
`;

const Input = styled.input`
    width: 303px;
    height: 45px;
    margin-bottom: 6px;
    padding-left: 11px;
    border: 1px solid #D4D4D4;
    border-radius: 5px;
`;

const Button = styled.button`
    width: 303px;
    height: 45px;
    margin-bottom: 25px;
    background-color: #52B6FF;
    font-size: 20.98px;
    color: #FFFFFF;
    border-radius: 5px;
    border: none;
`;