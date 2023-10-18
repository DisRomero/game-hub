import { Text } from "@chakra-ui/react";
import usePhotos from "../hooks/usePhotos";

const PhotosGrid = () => {
   const {photos, error} = usePhotos();

    return (
        <>
        {error && <Text>{error}</Text>}
            <ul>
                {photos.map(photo => <li key={photo.id}>{photo.title}</li>)}
            </ul>
        </>
    );
};

export default PhotosGrid;
