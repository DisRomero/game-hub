import { Text } from "@chakra-ui/react";
import useUsers from "../hooks/useUsers";

const UsersGrid = () => {
    const { users, error } = useUsers();

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