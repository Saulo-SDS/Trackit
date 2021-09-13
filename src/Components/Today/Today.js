import styled from "styled-components";
import { useContext } from "react";
import { UserContext } from "../Context/UserContext";
import Footer from "../Footer/Footer";
import Top from "../Top/Top";
import HabitSituation from "./HabitSituation";
import dayjs from "dayjs"
import "dayjs/locale/pt-br"
import { getHabitsToday } from "../Service/Api";


export default function Today() {

    const userData = useContext(UserContext);
    console.log(userData.user.token )

    const config = {
        headers: {
            "Authorization": `Bearer ${userData.user.token}`
        }
    }

    getHabitsToday(config).then(resp => {
        console.log(resp);
    }).catch(err => {
        console.log("errr")
    });
    

    return (
        <>
            <Top/>
            <Container>
                <Date>{`${dayjs().locale('pt-br').format("dddd")}, ${dayjs().format("D")}/${dayjs().format("MM")}`}</Date>
                <Status><p>Nenhum hábito concluído ainda</p></Status>
                <HabitSituation />
                <HabitSituation />
            </Container>
            <Footer />

        </>
    );
}

const Container = styled.div`
    height: 100vh;
    margin-top: 80px;
    padding: 0 18px 0 18px;
`;

const Date = styled.h2`
    color: #126BA5;
    font-size: 23px;
    padding-top: 20px;
    margin-bottom: 5px;
`;

const Status = styled.div`
    color: #BABABA;
    font-size: 18px;
    margin-bottom: 28px;
`;