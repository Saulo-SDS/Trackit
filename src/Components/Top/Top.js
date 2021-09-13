import styled from "styled-components";
import Trackit from "./trackit.svg";

export default function Top() {
    return (
        <TopBar>
            <Logo src={Trackit} alt="Logo TrackIt" />
            <ProfileImg src="https://s3-alpha-sig.figma.com/img/3b2c/d996/41709a8b318765b6bcf16bca3b9003fa?Expires=1632096000&Signature=Sb2kTamOFkaNieXo5ZG~pG6KrISCSflRqFQfy2bfMt700U45SSdaXNCfHsR3Ka-T~Tr4~vOuZVFcscjPu0vOPh15d94yi7mGr~3pua3fT6Iebh6lVEfALD-fRVw2Qc6Plac6zX1iLw~rnlXXalj-zVHd9WvcRio90DYzYqUOFqZ69x~0J5hTvGnvmsvk1DHXMbvx4kISJiGbB3LnVmTdQPZjhrubaEeMnnSDqAm~kpPRh9YnwjNIIVYOZJ9t-Ws9miFPs88p2s5LkhQaOL8FX2N6N8XGQQ0VC7wMzfce~C~V9NGZD2d4sEJL84IHL9Ml5eQyhInUzmhZuKQvByeWrQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="Imagem de perfil" />
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