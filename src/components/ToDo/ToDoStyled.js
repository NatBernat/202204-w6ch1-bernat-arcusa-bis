import styled from "styled-components";

const ToDoStyled = styled.li`
  border-radius: 20px;
  background-color: lightgreen;
  padding: 20px;
  display: flex;
  gap: 15px;
  flex-direction: column;
  flex-wrap: wrap;
  text-align: center;
  h2 {
    font-size: 1.2em;
  }
  .to-do__id {
    font-size: 0.8em;
  }
  .to-do__status {
    background-color: white;
    border-radius: 10px;
    height: 25px;
  }
`;

export default ToDoStyled;
