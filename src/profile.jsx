import React, { useState } from "react";

const styles = {
  box: {
    width: "300px",
    margin: "40px auto",
    padding: "20px",
    borderRadius: "10px",
    backgroundColor: "#f5f5f5",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
  },
  input: {
    width: "100%",
    padding: "8px",
    marginBottom: "8px",
  },
  button: {
    width: "100%",
    padding: "8px",
    backgroundColor: "#4caf50",
    color: "white",
    border: "none",
    cursor: "pointer",
  },
  item: {
    backgroundColor: "white",
    padding: "6px",
    marginTop: "6px",
    borderRadius: "5px",
  },
};

const ProfileComp = () => {
  const [task, setTask] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTodo = () => {
    if (newTask.trim() !== "") {
      setTask([...task, newTask]);
      setNewTask("");
    }
  };

  return (
    <div style={styles.box}>
      <input
        style={styles.input}
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />

      <button style={styles.button} onClick={addTodo}>
        ADD
      </button>

      <ul>
        {task.map((data, index) => (
          <li key={index} style={styles.item}>
            {data}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProfileComp;
