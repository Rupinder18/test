import React, { useEffect, useState } from 'react'
import useGetRequest from '../../hooks/getRequest';
import { Button } from '@mui/material';
import useDeleteReq from '../../hooks/delRequest';
import { useNavigate } from 'react-router-dom';

const Posts = () => {
    const navigate =useNavigate();
    const {response,error}= useGetRequest('post');
    const [postList,setPostList]=useState([]);
    const deletePostApi =useDeleteReq(`post/`)
     const deleteHandler=(id)=>{
        deletePostApi.postData(id)
     };
     const editHandler =(id)=>{
        navigate(`/editpost/${id}`)
     };
    useEffect(()=>{
        if(response){
            setPostList(response.data.data)
        }
    },[response,error])
    console.log(postList)
  return (
    <div>
          {postList.map((item,index)=>{
            return (<div>
            <div style={{border:'1px solid black',width:300,height:300,margin:10}} key={index}>
                <img src={item.image} style={{width:150,height:150}} />
                <p>text:{item.text}</p>
                <p>likes:{item.likes}</p>
                <Button  onClick={()=>editHandler(item.id)} >Edit</Button>
                <Button variant='contained' onClick={()=>deleteHandler(item.id)} >Delete</Button>
            </div>
            </div>)
          })}
    </div>
  )
}

export default Posts;