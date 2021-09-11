import styled from "styled-components";

export default function Footer() {
    return (
        <FooterComponent>
            <p>Hábitos</p>
            <p>Histórico</p>
        </FooterComponent>
    );
}


export const FooterComponent= styled.div`
    width: 375px;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    padding: 0 31px 0 36px;
    background-color: #FFFFFF;
    p {
        font-size: 18px;
        color: #52B6FF;
    }
`;