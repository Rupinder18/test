import React, { useEffect, useState } from 'react'
import getRequest from '../../hooks/getRequest';
import usepostRequest from '../../hooks/postRequest';
import { useNavigate } from 'react-router-dom';

const NewUser = () => {
    
    const [firstName,setFname]=useState('');
    const [lastName,setLname]=useState('');
    const [email,setEmail]=useState('');
    const navigate = useNavigate();
    const {postData,response,loading,error}= usepostRequest('user/create');
    const userData={
        firstName,lastName,email
    }
    const submitHandler=(e)=>{
        e.preventDefault();
         postData(userData);
         navigate('/users')
    };
    useEffect(()=>{
        console.log(response)
        console.log(error)
    },[response,error,loading])
  return (
    <div>
        <form onSubmit={submitHandler}>
            <label>firstName</label>
            <input onChange={(e)=>setFname(e.target.value)} /><br/>
            <label>lastName</label>
            <input onChange={(e)=>setLname(e.target.value)} /><br/>
            <label>email</label>
            <input onChange={(e)=>setEmail(e.target.value)} />
            <button type="submit">add</button>
        </form>
    </div>
  )
}

export default NewUser