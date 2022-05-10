import styled from "styled-components";

const AppStyled = styled.div`
  background-color: white;
  color: black;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: center;
  gap: 20px;
  * {
    box-sizing: border-box;
    margin: 0;
  }
  h1 {
    display: flex;
    justify-content: center;
    padding: 10px;
  }
  button {
    border: none;
    border-radius: 10px;
    background-color: black;
    color: white;
    width: 60px;
    padding: 10px;
    margin: 0 10px;
  }
`;

export default AppStyled;
