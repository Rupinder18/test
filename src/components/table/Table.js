import { Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import useDeleteReq from '../../hooks/delRequest';
import { useNavigate } from 'react-router-dom';
import useGetRequest from '../../hooks/getRequest';

const Table = () => {
    const navigate= useNavigate();
    const [data,setData]= useState([]);
    const getUsetListApi = useGetRequest('user?created=1');
    const {postData,response,loading,error}=useDeleteReq(`user/`)
    const deleteHandler=(id)=>{
        postData(id);
    };
    const editHandler=(id)=>{
        navigate(`/edituser/${id}`)
    }
    useEffect(()=>{
        if(getUsetListApi.response){
            console.log(getUsetListApi.response)
            setData( getUsetListApi.response.data.data)
        }
       },[getUsetListApi.response,getUsetListApi.loading,getUsetListApi.error,data,response])
    
    useEffect(()=>{
        console.log(response)
        console.log(error)
    },[response,error])

  return (
    <div>
        <table style={{border:'2px solid black'}}>
            <tr>
                <th>Srno</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Action</th>
            </tr>
            {data?.map((item,index)=>{
                return <tr>
                <td>{index + 1}</td>
                <td>{item.firstName}</td>
                <td>{item.lastName}</td>
                <td><Button onClick={()=>editHandler(item.id)}>Edit</Button> <Button onClick={()=>deleteHandler(item.id)}>Delete</Button></td>
            </tr>
            })}
            
        </table>
    </div>
  )
}

export default Table