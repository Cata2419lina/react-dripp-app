import { useState, useEffect } from 'react';
import axios from 'axios';
import { RAPID_API_KEY } from '@env';

const rapidApiKey = RAPID_API_KEY;

const useFetch = ({ endpoint, query }) => {
    const [data, setdata] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const options = {
        method: 'GET',
        url: `https://billboard-api2.p.rapidapi.com/artist-100/${endpoint}`,
        headers: {
            'X-RapidAPI-Key': rapidApiKey,
            'X-RapidAPI-Host': 'billboard-api2.p.rapidapi.com'
        },
        params: { ...query },

    };

    const fetchData = async () => {
        setIsLoading(true);

        try {
            const response = await axios.request
            (options);

            setdata(response.data.data);
            setIsLoading(false);
        } catch (error) {
            setError(error);
            alert('There is an error')
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() =>{
        fetchData();
    }, []);

    const refetch = () => {
        setIsLoading(true);
        fetchData();
    } 
    return { data, isLoading, error, refetch };
}