import axios from 'axios';
import { useState } from 'react'
import { url } from '../config/index';

const useDeleteReq = (val) => {
    const [response, setResponse] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const headers = {
        'app-id': '649451538f28306c22461e18'
    }

    const postData = (id) => {
        setLoading(false)
        axios.delete(`${url}${val}${id}`, {
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
        postData, response, loading, error
    }
}

export default useDeleteReq;
