import React, { useEffect, useState } from 'react';
import { Text } from "@chakra-ui/react";
import apiClient from '../services/api-client';

interface Users {
    id: number;
    firstName: string;
    lastName: string;
}

interface FetchCartsResponde {
    total: number;
    users: Users[]
}

const UsersGrid = () => {
    const [users, setUsers] = useState<Users[]>([]);
    const [error, setError] = useState('');

    useEffect(() => {
        apiClient.get<FetchCartsResponde>('/users')
            .then(res => setUsers(res.data.users))
            .catch(err => setError(err.message));
    })

    return (
        <>
            {error && <Text>{error}</Text>}
            <ul>
                {users.map(user => <li key={user.id}>{user.firstName + ' ' + user.lastName}</li>)}
            </ul>
        </>


    )
};

export default UsersGrid;