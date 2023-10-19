import React from 'react'
import { Photo } from '../hooks/usePhotos'
import { Card, CardBody, Heading, Image } from '@chakra-ui/react';

interface Props {
    photo: Photo;
}

const PhotoCard = ({ photo } : Props) => {
  return (
    <Card borderRadius={10} overflow='hidden'>
        <Image src={photo.thumbnailUrl} />
        <CardBody>
            <Heading fontSize='2xl' >{photo.title}</Heading>
        </CardBody>
    </Card>
  )
};

export default PhotoCard;
