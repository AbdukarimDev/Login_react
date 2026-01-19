import React from "react";
import TodoBo from "./TodoBo";

const Profile = () => {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "20px" }}>
      <TodoBo title="Personal" />
      <TodoBo title="Study" />
      <TodoBo title="Work" />
      <TodoBo title="Other" />
    </div>
  );
};

export default Profile;
