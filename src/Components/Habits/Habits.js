import styled from "styled-components";
import Top from "../Top/Top";
import Footer from "../Footer/Footer";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../Context/UserContext";
import { getHabits } from "../Service/Api";
import Habit from "./Habit";
import CreateHabit from "./CreateHabit";

export default function Habits() {

    const userData = useContext(UserContext);
    console.log(userData.user.token );
    const [data, setData] = useState([]);
    const [create, setCreate] = useState(false);

    function loadHabits(){

        const config = {
            headers: {
                "Authorization": `Bearer ${userData.user.token}`
            }
        }
        getHabits(config).then(resp => {
            console.log(resp);
            setData(resp.data);
        }).catch(err => {
            console.log("errr")
        });
    }
    useEffect (loadHabits, []);
    console.log("habits: ", data)

    return (
        <>
            <Top />
            <Container>
                <Infos>
                    <h2>Meus hábitos</h2>
                    <button onClick={() => setCreate(true)}>+</button>
                </Infos>
                {create ? <CreateHabit setCreate={setCreate} loadHabits={loadHabits}/> : ""}
                {data.length > 0 ? data.map(({id, name, days}, index) => ( <Habit key={id} id={index} name={name} selectedDays={days}/>)) :
                <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>}       
            </Container>
            <Footer />
        </>
    );
};

const Container = styled.div`
    height: 100%;
    margin-top: 80px;
    padding: 10px 18px 0 18px;
    margin-bottom: 100px;
    color: #666666;

    p {
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: 22px;
    }
`;

const Infos = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    h2 {
        font-size: 23px;
        margin-bottom: 28px;
        padding-top: 10px;
        color: #126BA5; 
    }
    button {
        width: 40px;
        height: 35px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #52B6FF;
        border-radius: 4.64px;
        border: none;
        color: #ffffff;
        font-size: 30px;
        margin-bottom: 15px;
    }
`;