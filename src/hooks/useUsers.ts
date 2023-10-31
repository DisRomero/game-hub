import React, { useEffect, useState } from 'react';
import apiClient from '../services/api-client';
import { CanceledError } from 'axios';

interface Users {
    id: number;
    firstName: string;
    lastName: string;
}

interface FetchCartsResponde {
    total: number;
    users: Users[];
}

const useUsers = () => {
    const [users, setUsers] = useState<Users[]>([]);
    const [error, setError] = useState('');

    useEffect(() => {

        const controller = new AbortController();

        apiClient.get<FetchCartsResponde>('/users', { signal: controller.signal })
            .then(res => setUsers(res.data.users))
            .catch(err => {
                if (err instanceof CanceledError) return;
                setError(err.message)
            });

        return () => controller.abort();

    }, []);

    return { users, error };
}

export default useUsers;