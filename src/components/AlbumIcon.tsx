import {Icon, Text, HStack } from '@chakra-ui/react';
import { FaDiceOne, FaDiceTwo, FaDiceThree, FaDiceFour, FaDiceFive, FaDiceSix, FaDice } from 'react-icons/fa';

interface Props {
    albumId: Number;
}

const AlbumIcon = ({ albumId } : Props ) => {
  const iconMap = {
    1: FaDiceOne,
    2: FaDiceTwo,
    3: FaDiceThree,
    4: FaDiceFour,
    5: FaDiceFive,
    6: FaDiceSix
  }

  return (
    <HStack>
      <Icon as={iconMap[albumId]} color='gray.500'/>
    </HStack>

  );
}

export default AlbumIcon;