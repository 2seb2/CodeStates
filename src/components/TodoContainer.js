import styled from "styled-components";

const Template = styled.div`
  width: 500px;
  height: 90vh;
  margin: 30px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 20px;
  overflow: auto;
  background: #f7f7f7; //흰색
  box-shadow: 20px 20px 60px #d2d2d2, -20px -20px 60px #ffffff;
`;
const Title = styled.div`
  height: 40px;
  margin: 10px 20px;
  font-size: 1.75rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  color: #343a40; //진회색 - 글자
  background: #f7f7f7;
  span {
    padding-left: 20px;
    font-size: 1.25rem;
    font-weight: bold;
    color: #7540ee; //보라
  }
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #f7f7f7; //흰색
`;

const TodoContainer = ({ todos, children }) => {
  return (
    <Template>
      <Title>오늘의 할 일{(todos.length === 0 || 1) ? <span>{todos.length} task</span> : <span>{todos.length} tasks</span>}</Title>
      <Content>{children}</Content>
    </Template>
  );
};

export default TodoContainer;
