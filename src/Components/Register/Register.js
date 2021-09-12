import { useState } from "react";
import { useHistory } from "react-router";
import { Button, Form, Input, LogoImg } from "../Share/Style";
import Logo from "../Share/logo.png"
import Loader from 'react-loader-spinner';
import { postRegister } from "../Service/Api";

export default function Register() {
    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [loading, setLoading] = useState(false);

    function send(event) {
        event.preventDefault();
        setLoading(true);
        const body = {
            email: email,
            name: name,
            image: image,
            password: password
        }

        postRegister(body).
        then(resp => {
            console.log(resp);
            history.push("/");
        }).
        catch(err => {
            alert("Erro tente novamente");
            setLoading(false);
        });


        console.log(body)
    }

    return (
        <Form onSubmit={send}>
            <LogoImg src={Logo} alt="Logo" />
            <Input 
                type="email" value={email} placeholder="email" onChange={(e) => setEmail(e.target.value)} 
                disabled={loading} required/>
            <Input 
                type="password" value={password} placeholder="senha" onChange={(e) => setPassword(e.target.value)} 
                disabled={loading} required/>
            <Input 
                type="text" value={name} placeholder="nome" onChange={(e) => setName(e.target.value)} 
                disabled={loading} required/>
            <Input 
                type="text" value={image} placeholder="foto" onChange={(e) => setImage(e.target.value)} 
                disabled={loading} required/>
            <Button type="submit" disabled={loading} opacity={loading ? 0.7 : 1}>
                {!loading ? "Cadastrar" : <Loader type="ThreeDots" color="#FFFFFF" height={13} width={80} />}
            </Button>
            <p onClick={ () => history.push("/") }>Já tem uma conta? Faça login!</p>
        </Form >
    );
};