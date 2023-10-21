import { SimpleGrid, Skeleton, Text } from "@chakra-ui/react";
import usePhotos from "../hooks/usePhotos";
import PhotoCard from "./PhotoCard";
import PhotoCardSkeleton from "./PhotoCardSkeleton";
import PhotoCardContainer from "./PhotoCardContainer";

const PhotosGrid = () => {
   const {photos, error, isLoading} = usePhotos();
   const skeletons = [1,2,3,4,5,6];

    return (
        <>
        {error && <Text>{error}</Text>}
            <SimpleGrid columns={{ sm: 1 , md: 2, lg: 3, xl: 5 }} padding='10px' spacing={10}>
                {isLoading && skeletons.map(skeleton => 
                <PhotoCardContainer>
                    <PhotoCardSkeleton key={skeleton} />
                </PhotoCardContainer> 
                )}
                {photos.map(photo => 
                <PhotoCardContainer>
                    <PhotoCard key={photo.id} photo={photo} />
                </PhotoCardContainer>
                )}
            </SimpleGrid>
        </>
    );
};

export default PhotosGrid;
