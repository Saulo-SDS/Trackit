
import { useContext, useState } from "react";
import styled from "styled-components";
import { UserContext } from "../Context/UserContext";
import { postHabit } from "../Service/Api";
import { Button, Form, Input } from "../Share/Style";
import ChosenDays from "./ChosenDays";
import Loader from 'react-loader-spinner';


export default function CreateHabit({setCreate, loadHabits}) {

    const userData = useContext(UserContext);
    const [name, setName] = useState("");
    const [selecteds, setSelecteds] = useState([]);
    const [loading, setLoading] = useState(false);
    const day = ['D','S','T','Q','Q','S','S'];

    function saveHabit() {
        setLoading(true);
        const data = {
            name: name,
            days: selecteds
        }
        
        const config = {
            headers: {
                "Authorization": `Bearer ${userData.user.token}`
            }
        }

        postHabit(data, config).then((resp) => {
            setCreate(false);
            loadHabits();
        }).catch((err) => {
            alert("Erro");
            setLoading(false);
        });
    }
    
    return (
        <Container>
            <Form>
                <Input 
                    type="text" value={name} placeholder="nome do hábito" 
                    onChange={(e) => setName(e.target.value)} required disabled={loading}
                />
            </Form>
            <div>
                {day.map((day, index) =>( 
                    <ChosenDays key={index} id={index} day={day} selecteds={selecteds} setSelecteds={setSelecteds} loading={loading}/> 
                ))}
            </div>
            <Buttons>
                <Button height="35px" width="84px" fontSize="16px" background="#fff" color="#52B6FF" disabled={loading} onClick={() => setCreate(false)}>Cancelar</Button>
                <Button height="35px" width="84px" fontSize="16px" disabled={loading} opacity={loading ? 0.7 : 1} onClick={saveHabit}>
                    {!loading ? "Salvar" : <Loader type="ThreeDots" color="#FFFFFF" height={13} width={80} />}
                </Button>
            </Buttons>
       </Container> 
    );
}


const Container = styled.div`
    width: auto;
    height: 180px;
    background-color: #FFFFFF;
    border-radius: 5px;
    position: relative;
    margin-top: 10px;
    margin-bottom: 30px;
    padding-top: 18px;
    div {
        display: flex;
        margin-left: 11px;
    }
    input{
        font-family: Lexend Deca;
        font-size: 20px;
        line-height: 25px;
        color: #666666;
    }
`;

const Buttons = styled.div`
    margin-top: 35px;
    height: auto;
    display: flex;
    justify-content: flex-end;

    button {
        margin-right: 10px;
        margin-left: 10px;
    }
`;