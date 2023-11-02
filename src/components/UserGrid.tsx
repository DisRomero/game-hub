import { SimpleGrid, Text } from "@chakra-ui/react";
import useUsers from "../hooks/useUsers";
import UserCard from "./UserCard";
import UserCardSkeleton from "./UserCardSkeleton";
import UserCardContainer from "./UserCardContainer";

const UsersGrid = () => {
    const { users, error, isLoading } = useUsers();
    const skeletons = [1,2,3,4,5,6];

    return (
        <>
            {error && <Text>{error}</Text>}
            <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} padding='1em' spacing={10}>
                {isLoading && skeletons.map(skeleton => 
                <UserCardContainer> 
                    <UserCardSkeleton key={skeleton} />
                </UserCardContainer>
                )}
                {users.map(user =>
                <UserCardContainer> 
                    <UserCard key={user.id} user={user} />
                </UserCardContainer>
                )}
            </SimpleGrid>
        </>
    )
};

export default UsersGrid;