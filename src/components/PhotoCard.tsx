import React from 'react'
import { Photo } from '../hooks/usePhotos'
import { Card, CardBody, Heading, Image, Text } from '@chakra-ui/react';
import AlbumIcon from './AlbumIcon';

interface Props {
    photo: Photo;
}

const PhotoCard = ({ photo } : Props) => {
  return (
    <Card borderRadius={10} overflow='hidden'>
        <Image src={photo.thumbnailUrl} />
        <CardBody>
            <Heading fontSize='2xl' >{photo.title}</Heading>
            <AlbumIcon albumId={photo.albumId} />
            
        </CardBody>
    </Card>
  )
};

export default PhotoCard;
