import styled from "styled-components";
import { RiAddCircleFill } from "react-icons/ri";
import { useState } from "react";

const TodoInsertContainer = styled.form`
  width: 90%;
  height: 50px;
  border-bottom: 1px solid #7540EE; //구분선
  margin-bottom: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  input {
    width: 95%;
    background: none;
    outline: none;
    border: none;
    font-size: 1.2rem;
    color: #343a40; //적을 때 진회색
  }

  button {
    display: flex;
    align-items: center;
    background: none;
    outline: none;
    border: none;
    font-size: 2rem;
    color: #7540ee; //보라
    transition: 0.1s background ease-in;
    cursor: pointer;
  }
`;

const TodoInsert = () => {
  const [value, setValue] = useState("");

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onSubmit = () => {
    let data = {
      text: value,
      checked: false,
    };

    fetch("http://localhost:4000/Todos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }).catch((error) => {
      console.error("Error", error);
    });
  };

  return (
    <TodoInsertContainer onSubmit={onSubmit}>
      <input
        placeholder="할 일을 입력해주세요"
        value={value}
        onChange={onChange}
      />
      <button type="submit">
        <RiAddCircleFill />
      </button>
    </TodoInsertContainer>
  );
};

export default TodoInsert;
