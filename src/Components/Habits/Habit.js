import styled from "styled-components";
import { TrashOutline } from 'react-ionicons'
import { deleteHabit } from "../Service/Api";
import { useContext } from "react";
import { UserContext } from "../Context/UserContext";


export default function Habit({id, name, selectedDays, loadHabits}) {

    const userData = useContext(UserContext);
    const day = ['D','S','T','Q','Q','S','S'];
    
    function removeHabit() { 
        if(window.confirm("Você realmente quer apagar esse hábito?")){
            const config = {
                headers: {
                    "Authorization": `Bearer ${userData.user.token}`
                }
            }
            deleteHabit(id, config).then(resp => {
                console.log("sucess");
                loadHabits();
            }).catch(err => {
                alert("errr")
            });
        }
    }

    return (
        <Container>
            <h3>{name}</h3>
            <span>
                <TrashOutline
                    color={'#00000'} 
                    height="18px"
                    width="20px"
                    onClick={removeHabit}
                />
            </span>
            <div>
                {day.map((d, index) =>(
                    <Week
                        key={index}
                        border={selectedDays.includes(index) ? "#CFCFCF" : "#D4D4D4"}
                        background={selectedDays.includes(index) ? "#CFCFCF" : "#fff"} 
                        color={selectedDays.includes(index) ? "#fff" : "#DBDBDB"}
                    >
                        {d}
                    </Week> 
                ))}
            </div>
       </Container>
    );
}


const Container = styled.div`
    width: auto;
    height: 94px;
    background-color: #FFFFFF;
    border-radius: 5px;
    position: relative;
    margin-top: 10px;
    
    h3 {
        font-size: 20px;
        margin-bottom: 8px;
        padding: 15px 0 0 15px;
        color: #666666; 
    }
    span {
        height: 15px;
        width: 13px;
        position: absolute;
        top: 5px;
        right: 5px;
        border: none;
        border-radius: 5px;
    }
    div {
        margin-left: 15px;
        display: flex;
    }
`;

const Week = styled.p`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.background};
    height: 30px;
    width: 30px;
    font-size: 20px;
    font-weight: 400;
    line-height: 25px;
    margin-right: 4px;
    border: 1px solid ${props => props.border};
    border-radius: 5px;
    color: ${props => props.color};
`;