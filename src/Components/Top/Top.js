
import { useContext } from "react";
import { UserContext } from "../Context/UserContext";
import styled from "styled-components";
import Trackit from "./trackit.svg";

export default function Top() {

    const {user, setUser} = useContext(UserContext);
    return (
        <TopBar>
            <Logo src={Trackit} alt="Logo" />
            <ProfileImg src={user.image} alt="Profile" />
        </TopBar>
    );
}

const TopBar = styled.header`
    height: 70px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    top: 0;
    left: 0;
    background-color: #126BA5;
    box-shadow: 0px 4px 4px 0px #00000026;
    z-index: 2;
`;

const Logo = styled.img`
    width: 97px;
    height: 49px;
    padding-left: 18px;
`;

const ProfileImg = styled.img`
    width: 51px;
    height: 51px;
    padding-right: 18px;
    border-radius: 50%;
`;