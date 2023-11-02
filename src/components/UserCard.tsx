import React from 'react'
import { User } from '../hooks/useUsers'
import { Card, CardBody, HStack, Heading, Image } from '@chakra-ui/react'
import { CardBankIcon } from './CardBankIcon';
import BloodType from './BloodType';

interface Props {
    user: User;
}

const UserCard = ({ user }: Props) => {
    return (
        <>
            <Card>
                <Image src={user.image} />
                <CardBody>
                    <Heading fontSize='2xl'>{user.firstName + ' ' + user.lastName}</Heading>
                    <HStack justifyContent='space-between'>
                        <CardBankIcon bank={user.bank} />
                        <BloodType bloodGroup={user.bloodGroup} />
                    </HStack>
                </CardBody>
            </Card>
        </>
    )
}

export default UserCard;