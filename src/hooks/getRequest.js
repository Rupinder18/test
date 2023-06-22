import axios from "axios";
import { useEffect,useState } from "react";
import { url } from "../config";

const useGetRequest =(val)=>{
    const [response,setResponse]= useState(null);
    const [loading,setLoading]= useState(false);
    const [error,setError]= useState(null);

    const headers= {
        'app-id':'649451538f28306c22461e18'
    };
    useEffect(()=>{
        setLoading(true)
        axios.get(`${url}${val}`,{
            headers:headers
        }).then((res)=>{
            setResponse(res);
            setLoading(false)
        }).catch((err)=>{
            setError(err);
            setLoading(false)
        })
    },[]);
    return {
        response,loading,error
    }
};

export default useGetRequest;