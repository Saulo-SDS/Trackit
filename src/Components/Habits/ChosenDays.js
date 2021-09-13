import styled from "styled-components";
import { useState } from "react";

export default function ChosenDays({day, id, selecteds,setSelecteds, loading}) {
    const [enable, setEnable] = useState(false);

    function selectDay() {
        if(enable) {
            setEnable(false);
            let modify = selecteds.filter((e) => e !== id);
            setSelecteds(modify);
        }else{
            setEnable(true);
            setSelecteds([...selecteds, id]);
        }
    }

    return (
        <Day 
            background={enable ? "#CFCFCF" : "#fff"} 
            border={enable ? "#CFCFCF" : "#D4D4D4"}
            color={enable ? "#fff" : "#DBDBDB"}
            onClick={selectDay} 
            disabled={loading}
        >
            {day}
        </Day>
    );
}

const Day = styled.p`
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
