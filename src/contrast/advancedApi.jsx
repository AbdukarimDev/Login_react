import { Input, InputOutlined } from '@mui/icons-material';
import { InputBase, InputLabel } from '@mui/material';
import React, { useState, useEffect } from 'react'
import styled from "styled-components";

import loadingImg from "../assets/loading.gif";



const AdvancedApi = () => {
    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUsers = async() => {
            
            try {
                setLoading(true);
                const res = await fetch("https://jsonplaceholder.typicode.com/posts");
                if (!res.ok) {
                    throw new Error("Failed to fetch users api");
                }
                const data = await res.json();
                setUsers(data);
            } catch (err) {
                setError(err.message || "somethings went wrong");
            } finally {
                setLoading(false);
            }
        };
        fetchUsers();
    },[]);

    
    console.log(users)

   const filteredUser = users.filter((post) => {
  const keyword = search.toLowerCase();
  return (
    post.title.toLowerCase().includes(keyword) ||
    post.body?.toLowerCase().includes(keyword)
  );
});


  return (
    <div style={{padding: "5px 20px"}}>
        <h1>User List</h1>
        <input type="text" placeholder='search user' 
        value={search}
        onChange={(e) => setSearch(e.target.value)}/>
        {loading && <img src={loadingImg} alt="loading"/>}
        {loading && <img src={loadingImg} alt="loading" />}

{!loading && filteredUser.map((user) => (
  <Card key={user.id}>
    <p>{user.title}</p>
    <p>{user.body}</p>
    <p>{user.id}</p>
    <p>{user.userId}</p>
  </Card>
))}

    </div>
  );
};


const Card = styled.div`
border: 1px solid lightgray;
border-radius: 8px;
padding: 10px;
cursor: pointer;

`;

export default AdvancedApi;