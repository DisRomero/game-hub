import React from 'react'
import { Photo } from '../hooks/usePhotos'
import { Card, CardBody, HStack, Heading, Image, Text } from '@chakra-ui/react';
import AlbumIcon from './AlbumIcon';
import PhotoId from './PhotoId';

interface Props {
    photo: Photo;
}

const PhotoCard = ({ photo } : Props) => {
  return (
    <Card borderRadius={10} overflow='hidden'>
        <Image src={photo.thumbnailUrl} />
        <CardBody>
            <Heading fontSize='2xl' >{photo.title}</Heading>
            <HStack justifyContent='space-between'>
                <AlbumIcon albumId={photo.albumId} />
                <PhotoId id={photo.id}/>

            </HStack>
        </CardBody>
    </Card>
  )
};

export default PhotoCard;
