import React, { useEffect, useState } from "react";
import styled from "styled-components";

const ApiConnect = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then(setUsers);
  }, []);

  console.log(users);

  return (
    <div>
      {users.map((user, index) => {
        return (
            <Card key={index}>
                  
          <div key={index}>
            <p>{user.name}</p>
            <p>{user.username}</p>
            <p>{user.phone}</p>
            <p>{user.email}</p>
            <p>{user.website}</p> 
          </div>
          
          </Card>
        );
      })}
    </div>
  );
};

const Card = styled.div`
border: 1px solid lightgray;
border-radius: 8px;
padding: 10px;
cursor: pointer;

`;

export default ApiConnect;
