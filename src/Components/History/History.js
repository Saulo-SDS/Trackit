import styled from "styled-components";
import Top from "../Top/Top";
import Menu from "../Menu/Menu";
export default function History() {
   
    return (
        <>
            <Top/>
            <Container>
                <Info>
                    <h2>Histórico</h2>
                </Info>
                <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
            </Container>
            <Menu value={66}/>
        </>
    );
}

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

const Info = styled.div`
    display: flex;
    align-items: center;
    h2 {
        font-size: 23px;
        margin-bottom: 28px;
        padding-top: 10px;
        color: #126BA5; 
    }
`;