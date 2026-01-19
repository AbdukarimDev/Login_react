import styled from "styled-components";

const Wrapper = styled.div`
    border: 1px solid blue;
    display: flex;
    justify-content: space-evenly;
    padding: 20px;
    background-color: green;

    div {
        border: 1px solid yellow;
    }
`;
export const BgImg = styled.div`
background-image: url(${bgimg});
height: 700px;
background-repeat: no-repeat;
`;s