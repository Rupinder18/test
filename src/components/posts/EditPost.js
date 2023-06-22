import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import useGetRequest from '../../hooks/getRequest';
import useUpdateReq from '../../hooks/updateRequest';

const EditPost = () => {
    const navigate = useNavigate();
    const {id}=useParams();
    const {response,error}=useGetRequest(`post/${id}`)
    const [text,setText]=useState('');
    const [likes,setLikes]=useState('');
    const updateApi = useUpdateReq(`post/`)
     const data ={
        text,likes
     };
    // console.log(id)
    // console.log(response?.data)
    const editHandler=(e)=>{
        e.preventDefault();
        updateApi.updateData(data,id);
        navigate('/posts')
    };
  return (
    <div>
        <form onSubmit={editHandler}>
            <label>text:</label>
            <input defaultValue={response?.data.text} onChange={(e)=>setText(e.target.value)} /><br/>
            <label>likes:</label>
            <input defaultValue={response?.data.likes} onChange={(e)=>setLikes(e.target.value)} /><br/>
            <button type='submit'>update</button>

        </form>
    </div>
  )
}

export default EditPost