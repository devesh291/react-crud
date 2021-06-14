import axios from 'axios';
import React from 'react';
import {useState} from 'react';
import  {useHistory}  from 'react-router-dom';

export const AddUser = () => {
    let history=useHistory();
    const [user,setUser] = useState(
        {
        name :" ",
        username : " ",
        email: " ",
    });
  
    const { name, username, email } = user;
    
    const onInputChange = e =>{
        setUser({...user,[e.target.name] : e.target.value})
    };

    const onSubmit = async e=>{
    e.preventDefault();
        await axios.post("http://localhost:3003/users",user);
        history.push('/')
    };

    return (
        <div className="container">
        <div className="w-75 mx-auto shadow p-5">
          <h2 className="text-center mb-4">Add A User</h2>
          <form onSubmit = {e => onSubmit(e)} >
            <div className="form-group">
                Name
              <input
                type="text"
                className="form-control form-control-lg"
                name="name"
                value = { name} 
                onChange = {e => onInputChange(e)}
            />
            </div>

            <div className="form-group">
            Username
              <input
                type="text"
                className="form-control form-control-lg"

                name="username"
                value = {username}
                onChange = {e => onInputChange(e)}
              />
            </div>
            <div className="form-group">
              Email
              <input
                type="email"
                className="form-control form-control-lg"
                name="email"
                value = {email}
                onChange = {e => onInputChange(e)}
              />
            </div>
            <button className="btn btn-primary btn-block">Add User</button>
          </form>
        </div>
      </div>
    
        )
}
