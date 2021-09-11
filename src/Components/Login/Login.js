import Logo from "../Share/logo.png"
import styled from "styled-components";
import { Button, Form, Input, LogoImg } from "../Share/Style";

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