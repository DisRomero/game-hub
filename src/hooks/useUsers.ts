import React, { useEffect, useState } from 'react';
import apiClient from '../services/api-client';
import { CanceledError } from 'axios';

export interface Bank {
    iban: string;
    cardType: string;
    currency: string;
}

export interface User {
    id: number;
    firstName: string;
    lastName: string;
    image: string;
    bank: Bank[];
    bloodGroup: string;
}

interface FetchCartsResponde {
    total: number;
    users: User[];
}

const useUsers = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [error, setError] = useState('');
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {

        const controller = new AbortController();
        setLoading(true);
        apiClient.get<FetchCartsResponde>('/users', { signal: controller.signal })
            .then(res => {
                setUsers(res.data.users);
                setLoading(false);
            })
            .catch(err => {
                if (err instanceof CanceledError) return;
                setError(err.message);
                setLoading(false);
            });

        return () => controller.abort();

    }, []);

    return { users, error, isLoading };
}

export default useUsers;