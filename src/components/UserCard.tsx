import React from 'react'
import { User } from '../hooks/useUsers'
import { Card, CardBody, Heading, Image } from '@chakra-ui/react'
import { CardBankIcon } from './CardBankIcon';

interface Props {
    user: User;
}

const UserCard = ({ user }: Props) => {
    return (
        <>
            <Card borderRadius={10} overflow='hidden'>
                <Image src={user.image} />
                <CardBody>
                    <Heading fontSize='2xl'>{user.firstName + ' ' + user.lastName}</Heading>
                    <CardBankIcon bank={user.bank} />
                </CardBody>
            </Card>
        </>
    )
}

export default UserCard;