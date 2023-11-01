import { SimpleGrid, Text } from "@chakra-ui/react";
import useUsers from "../hooks/useUsers";
import UserCard from "./UserCard";

const UsersGrid = () => {
    const { users, error } = useUsers();

    return (
        <>
            {error && <Text>{error}</Text>}
            <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} padding='1em' spacing={10}>
                {users.map(user =>
                    <UserCard key={user.id} user={user} />)}
            </SimpleGrid>
        </>
    )
};

export default UsersGrid;