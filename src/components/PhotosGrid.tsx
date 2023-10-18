import React, { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { Text } from "@chakra-ui/react";

interface FetchPhotoResponse {
    albumId: number;
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
}

const PhotosGrid = () => {
    const [photos, setPhotos] = useState([]);
    const [error, setError] = useState("");

    useEffect(() => {
        apiClient
            .get<FetchPhotoResponse, any>("/photos")
            .then((res) => setPhotos(res.data))
            .catch((err) => setError(err.message));
    });

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
