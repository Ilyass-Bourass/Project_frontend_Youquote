
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(response=>{
      setUsers(response.data);
    })
    .catch(error=>{
      console.log('error',error);
    });
  },[]);

  return (
    <div>
      
      <h1>Liste des Utilisateurs</h1>
      <ul>
        {users.map(user=>(
          <li key={user.id}>name: {user.name} email : {user.email}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
