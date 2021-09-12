import styled from "styled-components";
import { CheckmarkOutline } from 'react-ionicons'

export default function HabitSituation() {

    return (
        <Container>
            <h3>Ler 1 capítulo de livro</h3>
            <button>
                <CheckmarkOutline
                    color={'#ffffff'} 
                    height="60px"
                    width="50px"
                />
            </button>
            <Records>
                <p>Sequência atual: <span>3 dias</span></p>
                <p>Seu recorde: <span>5 dias</span></p>                    
            </Records>
       </Container>
    );
}


const Container = styled.div`

    width: 340px;
    height: 94px;
    background-color: #FFFFFF;
    border-radius: 5px;
    position: relative;
    margin-top: 10px;
    h3 {
        font-size: 20px;
        margin-bottom: 8px;
        padding-left: 15px;
        padding-top: 13px;
        color: #666666; 
    }
    button {
        width: 69px;
        height: 69px;
        background-color: #EBEBEB;
        position: absolute;
        top: 13px;
        right: 13px;
        border: none;
        border-radius: 5px;
    }
`;

const Records = styled.div`
    padding-left: 15px;
    color: #666666;
    p {
        font-size: 13px;
        font-weight: 400;
        line-height: 16px;
        font-size: 13px;
    }
`;