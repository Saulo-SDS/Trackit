import Logo from "../Share/logo.png"
import { Button, Form, Input, LogoImg } from "../Share/Style";


export default function Register() {
    return (
        <Form >
            <LogoImg src={Logo} alt="Logo" />
            <Input type="text" placeholder="email" ></Input>
            <Input type="text" placeholder="senha" ></Input>
            <Input type="text" placeholder="nome" ></Input>
            <Input type="text" placeholder="foto" ></Input>
            <Button>Cadastrar</Button>
            <a href="#">Já tem uma conta? Faça login!</a>
        </Form >
    );
};