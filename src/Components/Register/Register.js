import { useHistory } from "react-router";
import Logo from "../Share/logo.png"
import { Button, Form, Input, LogoImg } from "../Share/Style";

export default function Register() {
    const history = useHistory();

    return (
        <Form >
            <LogoImg src={Logo} alt="Logo" />
            <Input type="text" placeholder="email" ></Input>
            <Input type="text" placeholder="senha" ></Input>
            <Input type="text" placeholder="nome" ></Input>
            <Input type="text" placeholder="foto" ></Input>
            <Button>Cadastrar</Button>
            <p onClick={ () => history.push("/") }>Já tem uma conta? Faça login!</p>
        </Form >
    );
};