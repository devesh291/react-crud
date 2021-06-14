import axios from 'axios';
import React from 'react';
import {useState , useEffect} from 'react';
import  {useHistory , useParams}  from 'react-router-dom';

export const EditUser = () => {
    let history=useHistory();
    const {id} = useParams ();
   
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

    useEffect (() => {
      loadUser();
    },[]);

    const onSubmit = async e=>{
    e.preventDefault();
        await axios.put(`http://localhost:3003/users/${id}` , user);
        history.push('/')
    };

    const loadUser = async() => {
      //inverted one coma is imp here...
      const result = await axios.get(`http://localhost:3003/users/${id}`);
      setUser(result.data);
    }

    return (
        <div className="container">
        <div className="w-75 mx-auto shadow p-5">
          <h2 className="text-center mb-4">Edit A User</h2>
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
           
            <button className="btn btn-warning btn-block">Update User</button>
          </form>
        </div>
      </div>
    
        )
}
