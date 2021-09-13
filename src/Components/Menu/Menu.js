import {
    CircularProgressbar,
    buildStyles
} from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';
import { useHistory } from "react-router";
import styled from "styled-components";

export default function Menu({value}) {
    
    const history = useHistory();
    return (
        <MenuComponent>
            <p onClick={() => history.push("/habitos")}>Hábitos</p>
            <InfoProgress onClick={() => history.push("/hoje")}>
               <CircularProgressbar
                    value={value}
                    text={`Hoje`}
                    background
                    backgroundPadding={6}
                    styles={buildStyles({
                        backgroundColor: "#52B6FF",
                        textColor: "#fff",
                        pathColor: "#fff",
                        trailColor: "transparent"
                    })}
                />           
            </InfoProgress>
            <p onClick={() => history.push("/historico")}>Histórico</p>
        </MenuComponent>
    );
}

const MenuComponent = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    position: fixed;
    bottom: 0;
    left: 0;
    background-color: #fff;
    p {
        font-size: 18px;
        color: #52B6FF;
    }
`;

const InfoProgress = styled.div`
    height: 91px;
    width: 91px;
    font-size: 18px;
    font-weight: 400;
    line-height: 22px;
    border-radius: 50%;
    padding-bottom: 30px;
`;

