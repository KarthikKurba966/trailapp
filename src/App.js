
import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import {Task} from './Task'



function App() {


  const [users,setUsers] =useState([]);

 // Get API Implement
  useEffect(()=>{
  async function getData(){
    const res=await axios.get("https://jsonplaceholder.typicode.com/comments");
    const datas= await res.data;
    setUsers(datas);

    }
    getData();
  }, [])

  return (
   <>

   <Task />
   
 {users.map((user)=>{
  return (
    <li key={user.id}>{user.email}</li>
  )
 })}
   </>
  );
}

export default App;
