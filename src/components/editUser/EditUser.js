import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import useGetRequest from '../../hooks/getRequest';
import useUpdateReq from '../../hooks/updateRequest';

const EditUser = () => {
    const navigate= useNavigate();
    const {id}=useParams();
    const updateUserApi=useUpdateReq(`user/`)
    const [firstName,setFirstName]=useState('');
    const [lastName,setLastName]=useState('');
    const {response,error}= useGetRequest(`user/${id}`);
    console.log(response?.data)
    console.log(id);
    const userData={
        firstName,lastName
    };
     const updateHandler=(e)=>{
        e.preventDefault();
        updateUserApi.updateData(userData,id);
        navigate('/users')
     };
  return (
    <div>
        <form onSubmit={updateHandler}>
            <label>firstName</label>
            <input defaultValue={response?.data.firstName} onChange={(e)=>setFirstName(e.target.value)} /><br/>
            <label>lastname</label>
            <input  defaultValue={response?.data.lastName} onChange={(e)=>setLastName(e.target.value)} /><br/>
            <button type="submit">update</button>
        </form>
    </div>
  )
}

export default EditUser