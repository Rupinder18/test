import axios from "axios";
import { useState,useEffect } from "react";
import { url } from "../config";

const usePostRequest =(val)=>{
    const [response, setResponse] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const headers = {
        'app-id': '649451538f28306c22461e18'
    }
    const postData =(data)=>{
        setLoading(false)
        axios.post(`${url}${val}`,data,{
            headers:headers
        }) .then(res => {
            setResponse(res);
            setLoading(true)
        })
        .catch(err => {
            setError(err);
            setLoading(true)
        })
    }
    return  {
        postData,response,loading,error
    }
};
export default usePostRequest;