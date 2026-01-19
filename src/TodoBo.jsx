import React, { useState } from "react";
import {
  Card,
  Title,
  Input,
  Button,
  List,
  Item
} from "./TodoStyles"; // ⚠️ NOMI ANIQLIGIGA QARA

const TodoBo = ({ title }) => {
  const [tasks, setTasks] = useState([]);
  const [value, setValue] = useState("");

  const addTask = () => {
    if (value.trim() === "") return;
    setTasks([...tasks, value]);
    setValue("");
  };

  return (
    <Card>
      <Title>{title}</Title>

      <Input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && addTask()}
      />

      <Button onClick={addTask}>ADD</Button>

      <List>
        {tasks.map((t, i) => (
          <Item key={i}>{t}</Item>
        ))}
      </List>
    </Card>
  );
};

export default TodoBo;
