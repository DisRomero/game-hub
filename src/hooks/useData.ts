import React, { useEffect, useState } from 'react';
import apiClient from '../services/api-client';
import { CanceledError } from 'axios';

export interface User {
    id: number;
    firstName: string;
    lastName: string;
    image: string;
    bank: Bank[];
    bloodGroup: string;
}

interface FetchResponde<T> {
    total: number;
    users: T[];
}

const useData = <T>(endpoint: string) => {
    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState('');
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {

        const controller = new AbortController();
        setLoading(true);
        apiClient.get<FetchResponde<T>>(endpoint, { signal: controller.signal })
            .then(res => {
                setData(res.data.users);
                setLoading(false);
            })
            .catch(err => {
                if (err instanceof CanceledError) return;
                setError(err.message);
                setLoading(false);
            });

        return () => controller.abort();

    }, []);

    return { data, error, isLoading };
}

export default useData;