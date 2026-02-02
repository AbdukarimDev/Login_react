import React, { useState } from "react";
import styled from "styled-components";

/* =======================
   ❌ XATO BOR EDI:
   Container, TodoWrapper,
   Form, Input, Button
   e'lon qilinmagan edi
   ======================= */

/* ✅ TO‘G‘RISI: styled-components ni e'lon qilamiz */
const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
`;

const TodoWrapper = styled.div`
  width: 300px;
  padding: 20px;
  background: #f5f5f5;
  border-radius: 10px;
`;

const Form = styled.form`
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
`;

const Input = styled.input`
  flex: 1;
  padding: 6px;
`;

const Button = styled.button`
  padding: 6px 10px;
  cursor: pointer;
`;

const TodoList = () => {
  const [todo, setTodo] = useState([]);
  const [text, setText] = useState("");

  const addTodo = (e) => {
    e.preventDefault();

    /* ❌ XATO BOR EDI:
       text.trim() tekshirilmagan
    */
    const value = text.trim();
    if (!value) return; // ✅ bo‘sh bo‘lsa qo‘shmaydi

    const newTodo = {
      id: Date.now(),
      text: value,
      done: false,
    };

    setTodo((prev) => [newTodo, ...prev]);
    setText("");

    /* ❌ XATO BOR EDI:
       input tozalanmagan
    */
    setText(""); // ✅ ADD bosilganda input bo‘shaydi
  };
  
  const deleteTodo = (id) =>{
    setTodo((prev) =>prev.filter((t)=> t.id !== id));
  }

  const toggletodo = (id)=> {
    setTodo((prev) => prev.map((data) => data.id ===id ?{...data, done: !data.done}: data));
  };

  const ClearAll = () => {
    setTodo([]);
    
  }
  console.log(todo)
  return (
    <Container>
      <TodoWrapper>
        <h1>Todo List</h1>

        <Form onSubmit={addTodo}>
          <Input
            type="text"
            placeholder="Todo yozing..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <Button type="submit">ADD</Button>
          <Button onClick={ClearAll}>Clear All</Button>
        </Form>

        <span>Total: {todo.length}</span>
        <span>Done: {todo.filter((data => data.done)).length}</span>

        <ul>
          {todo.map((value, index) => (
            /* ❌ XATO BOR EDI:
               <ul> ichida <div> ishlatilgan
            */

            /* ✅ TO‘G‘RISI:
               <ul> ichida faqat <li>
            */
            <li
              key={value.id}
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "6px",
              }}
            >
              <input type="checkbox"onChange={()=> toggletodo(value.id)}/>
              <span 
              style={{
                flex: 1,
                textDecoration: value.done ? "line-through" : "none",
              }}>
                {index + 1}. {value.text}
              </span>
              <button onClick={()=> deleteTodo(value.id)}>Delete</button>
            </li>
          ))}

          {/* ❌ XATO BOR EDI:
              map dan keyin ortiqcha ;
          */}
        </ul>
      </TodoWrapper>
    </Container>
  );
};

export default TodoList;
