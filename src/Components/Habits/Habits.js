import styled from "styled-components";
import Top from "../Top/Top";
import Footer from "../Footer/Footer";

export default function Habits() {
    return (
        <>
            <Top />
            <Container>
                <div>
                    <h2>Meus hábitos</h2>
                    <AddButton>+</AddButton>
                </div>
                <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
            </Container>
            <Footer />
        </>
    );
};

export const Container = styled.div`
    height: 100vh;
    margin-top: 80px;
    padding: 0 18px 0 18px;
    div {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    h2 {
        font-size: 23px;
        margin-bottom: 28px;
        color: #126BA5;
    }
    p {
        font-size: 18px;
        width: 340px;
        overflow-wrap: break-word;
        color: #666666;
    }
`;

export const AddButton = styled.button`
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
`;