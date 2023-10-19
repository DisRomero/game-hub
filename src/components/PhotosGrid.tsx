import { SimpleGrid, Skeleton, Text } from "@chakra-ui/react";
import usePhotos from "../hooks/usePhotos";
import PhotoCard from "./PhotoCard";
import PhotoCardSkeleton from "./PhotoCardSkeleton";

const PhotosGrid = () => {
   const {photos, error, isLoading} = usePhotos();
   const skeletons = [1,2,3,4,5,6];

    return (
        <>
        {error && <Text>{error}</Text>}
            <SimpleGrid columns={{ sm: 1 , md: 2, lg: 3, xl: 5 }} padding='10px' spacing={10}>
                {isLoading && skeletons.map(skeleton => <PhotoCardSkeleton key={skeleton} />)}
                {photos.map(photo => 
                    <PhotoCard key={photo.id} photo={photo} />
                )}
            </SimpleGrid>
        </>
    );
};

export default PhotosGrid;
