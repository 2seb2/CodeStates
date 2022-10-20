import styled from "styled-components";
import TodoListItem from "./TodoListItem";

const TodoListContainer = styled.div`
  overflow-y: auto;
`;

const TodoList = ({ todos }) => {
  return (
    <TodoListContainer>
      {todos.map((todo) => (
        <TodoListItem todo={todo} key={todo.id} />
      ))}
    </TodoListContainer>
  );
};

export default TodoList;
