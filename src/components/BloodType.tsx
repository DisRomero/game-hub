import { Badge } from '@chakra-ui/react';

interface Props {
    bloodGroup: string;
}

const BloodType = ({ bloodGroup }: Props) => {
    let color = bloodGroup.includes('+') ? 'green' : 'blue' ;

  return (
    <>
      <Badge colorScheme={color} fontSize={15} paddingX={2} borderRadius={5}>{bloodGroup}</Badge>
    </>
  )
}

export default BloodType;