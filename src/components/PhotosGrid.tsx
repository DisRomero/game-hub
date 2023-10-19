import { SimpleGrid, Text } from "@chakra-ui/react";
import usePhotos from "../hooks/usePhotos";
import PhotoCard from "./PhotoCard";

const PhotosGrid = () => {
   const {photos, error} = usePhotos();

    return (
        <>
        {error && <Text>{error}</Text>}
            <SimpleGrid columns={{ sm: 1 , md: 2, lg: 3, xl: 5 }} padding='10px' spacing={10}>
                {photos.map(photo => 
                    <PhotoCard key={photo.id} photo={photo} />
                )}
            </SimpleGrid>
        </>
    );
};

export default PhotosGrid;
