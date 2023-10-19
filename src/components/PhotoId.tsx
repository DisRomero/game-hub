import { Badge } from "@chakra-ui/react";


interface Props{
    id: number;
}

const PhotoId = ({ id } : Props) => {
    let color = id > 75 ? 'green' : id > 0 ? 'yellow' : '';
  return (
    <Badge colorScheme={color} borderRadius='4px' >{id}</Badge>
  )
}

export default PhotoId