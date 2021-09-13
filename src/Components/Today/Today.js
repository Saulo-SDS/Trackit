import styled from "styled-components";
import { useContext, useState, useEffect } from "react";
import { UserContext } from "../Context/UserContext";
import Menu from "../Menu/Menu";
import Top from "./Top/Top";
import HabitSituation from "./HabitSituation";
import dayjs from "dayjs"
import "dayjs/locale/pt-br"
import { getHabitsToday } from "../Service/Api";


export default function Today() {

    const userData = useContext(UserContext);
    const [data, setData] = useState([]);
    const config = {
        headers: {
            "Authorization": `Bearer ${userData.user.token}`
        }
    }

    function renderToday() {
        getHabitsToday(config).then(resp => {
            setData(resp.data);
        }).catch(err => {
            alert("erro")
        });
    }

    useEffect(renderToday, []);
    const habitsDone = data.filter((e) => e.done);

    return (
        <>
            <Top/>
            <Container>
                <Date>{`${dayjs().locale('pt-br').format("dddd")}, ${dayjs().format("D")}/${dayjs().format("MM")}`}</Date>
                <Status color={habitsDone.length > 0 ? "#8FC549" : "#BABABA"}>
                    <p>{habitsDone.length > 0 ? `${(habitsDone.length/data.length*100).toFixed(0)}% dos hábitos concluídos` : "Nenhum hábito concluído ainda"}</p>
                </Status>
                {data.length > 0 ? data.map((data) => <HabitSituation key={data.id} data={data} renderToday={renderToday}/>) : ""}
            </Container>
            <Menu value={(habitsDone.length/data.length*100).toFixed(0)}/>

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
    color: ${props => props.color};
    font-size: 18px;
    margin-bottom: 28px;
`;