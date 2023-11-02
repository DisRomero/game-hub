import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react'
import React from 'react'

const UserCardSkeleton = () => {
  return (
    <>
    <Card>
        <Skeleton height={330} />
        <CardBody>
            <SkeletonText />
        </CardBody>
    </Card>
    </>
  )
}

export default UserCardSkeleton