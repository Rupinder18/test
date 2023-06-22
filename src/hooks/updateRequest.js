import axios from 'axios';
import { useState } from 'react'
import { url } from '../config/index';

const useUpdateReq = (val) => {
    const [response, setResponse] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const headers = {
        'app-id': '649451538f28306c22461e18'
    }

    const updateData = (data,id) => {
        console.log(id,data)
        setLoading(false)
        axios.put(`${url}${val}${id}`, data, {
            headers: headers
        })
            .then(res => {
                setResponse(res);
                setLoading(true)
            })
            .catch(err => {
                setError(err);
                setLoading(true)
            })
    }
    return {
        updateData, response, loading, error
    }
}

export default useUpdateReq