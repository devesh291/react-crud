import React , {useState , useEffect}from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

export const Users = () => {
    const [user,setUser] = useState ({
        name: "",
        username: "",
        email : ""
    });

    const {id} = useParams();

    useEffect(()=>{
        loadUser();
    },[]);

    const loadUser = async() =>{
        const result = await axios.get(`http://localhost:3003/users/${id}`);
        setUser(result.data);
    }

    return (
    <div className="container py-4">
      <Link className="btn btn-primary" to="/">
        Back to Home
      </Link>
      <h1 className="display-4">User Id: {id}</h1>
      <hr />
      <ul className="list-group w-50">
        <li className="list-group-item">name: {user.name}</li>
        <li className="list-group-item">user name: {user.username}</li>
        <li className="list-group-item">email: {user.email}</li>
      </ul>
    </div>
   )
}
