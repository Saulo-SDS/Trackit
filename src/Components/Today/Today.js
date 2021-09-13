import styled from "styled-components";
import { useContext, useState, useEffect } from "react";
import { UserContext } from "../Context/UserContext";
import Footer from "../Footer/Footer";
import Top from "../Top/Top";
import HabitSituation from "./HabitSituation";
import dayjs from "dayjs"
import "dayjs/locale/pt-br"
import { getHabitsToday } from "../Service/Api";


export default function Today() {

    const userData = useContext(UserContext);
    const [data, setData] = useState([]);

    console.log(userData.user.token )

    const config = {
        headers: {
            "Authorization": `Bearer ${userData.user.token}`
        }
    }

    useEffect(() => {

        getHabitsToday(config).then(resp => {
            console.log(resp);
            setData(resp.data);
        }).catch(err => {
            console.log("errr")
        });
    }, [])

    console.log(data)

    return (
        <>
            <Top/>
            <Container>
                <Date>{`${dayjs().locale('pt-br').format("dddd")}, ${dayjs().format("D")}/${dayjs().format("MM")}`}</Date>
                <Status><p>Nenhum hábito concluído ainda</p></Status>
                {data.length > 0 ? data.map((data) => <HabitSituation key={data.id} data={data}/>) : ""}
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