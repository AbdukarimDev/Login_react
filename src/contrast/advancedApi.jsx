import { Input, InputOutlined } from '@mui/icons-material';
import { InputBase, InputLabel } from '@mui/material';
import React, { useState, useEffect } from 'react'
import styled from "styled-components";

import loadingImg from "../assets/loading.gif";



const AdvancedApi = () => {
    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState([null]);

    useEffect(() => {
        const fetchUsers = async() => {
            
            try {
                setLoading(true);
                const res = await fetch("https://jsonplaceholder.typicode.com/users");
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

    const filteredUser = users.filter((user) => {
        const keyword = search.toLocaleLowerCase()
        return (
             user.name.toLowerCase().includes(keyword) ||
             user.email.toLowerCase().includes(keyword)
             );
             
    });
  return (
    <div style={{padding: "5px 20px"}}>
        <h1>User List</h1>
        <input type="text" placeholder='search user' 
        value={search}
        onChange={(e) => setSearch(e.target.value)}/>
        {loading && <img src={loadingImg} alt="loading"/>}
        {filteredUser.map((user, index) => {
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

export default AdvancedApi;