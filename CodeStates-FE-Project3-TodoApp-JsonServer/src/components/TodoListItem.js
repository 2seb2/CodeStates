import styled from "styled-components";
import { TiTrash, TiPencil } from "react-icons/ti";
import { RiCheckLine, RiCheckboxBlankLine } from "react-icons/ri";
import { useState } from "react";

const TodoListItemContainer = styled.div`
  width: 90%;
  margin: 20px 0px;
  border-bottom: 1px solid #e9ecef;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Todo = styled.div`
  width: 350px;
  padding: 5px;
  font-size: 1.2rem;
  display: flex;
  align-items: center;

  .delete {
    font-size: 23px;
    color: #7540ee;
  }
  .edit {
    font-size: 23px;
    color: #7540ee;
  }
`;

const ToggleCheckBox = styled.button`
  width: 45px;
  height: 40.33px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  background-color: #f7f7f7;
  border: none;

  svg {
    color: #7540ee;
  }
`;

const TodoListItem = ({ todo }) => {
  const { id, text, checked } = todo;
  const [edit, setEdit] = useState(false);
  const [value, setValue] = useState(text);

  const onRemove = () => {
    fetch(`http://localhost:4000/Todos/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        window.location.href = "http://localhost:3000/Todos";
      })
      .catch((error) => {
        console.log("Error", error);
      });
  };
  const ToggleChecked = () => {
    let data = { checked: !checked };

    fetch(`http://localhost:4000/Todos/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "Application/json" },
      body: JSON.stringify(data),
    })
      .then(() => {
        window.location.href = "http://localhost:3000/Todos";
      })
      .catch((error) => {
        console.error("Error", error);
      });
  };

  const onEdit = () => {
    setEdit(!edit);
  };

  const onChangeEditValue = (e) => {
    setValue(e.target.value);
  };
  const enter = (e) => {
    let data = { text: value };

    if (e.key === "Enter") {
      fetch(`http://localhost:4000/Todos/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "Application/json" },
        body: JSON.stringify(data),
      })
        .then(() => {
          window.location.href = "http://localhost:3000/Todos";
        })
        .catch((error) => {
          console.error("Error", error);
        });
    }
  };

  return (
    <TodoListItemContainer>
      <ToggleCheckBox onClick={ToggleChecked}>
        {checked ? <RiCheckLine /> : <RiCheckboxBlankLine />}
      </ToggleCheckBox>
      {edit ? (
        <Todo
          as="input"
          value={value}
          onChange={onChangeEditValue}
          onKeyDown={enter}
        />
      ) : (
        <Todo>
          {text}
          <TiTrash className="delete" onClick={() => onRemove(id)} />
          <TiPencil className="edit" onClick={onEdit} />
        </Todo>
      )}
    </TodoListItemContainer>
  );
};

export default TodoListItem;
