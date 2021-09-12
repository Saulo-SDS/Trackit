import styled from "styled-components";
import Footer from "../Footer/Footer";
import Top from "../Top/Top";
import HabitSituation from "./HabitSituation";

export default function Today() {
    return (
        <>
            <Top/>
            <Container>
                <Date>Segunda, 17/05</Date>
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