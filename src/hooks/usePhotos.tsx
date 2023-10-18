import React, { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";


interface FetchPhotoResponse {
    albumId: number;
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
}

const usePhotos = () => {
    const [photos, setPhotos] = useState([]);
    const [error, setError] = useState("");

    useEffect(() => {
        const controller = new AbortController();
        apiClient
            .get<FetchPhotoResponse, any>("/photos", {signal: controller.signal})
            .then((res) => setPhotos(res.data))
            .catch((err) => {
                if(err instanceof CanceledError) return;
                    setError(err.message)
                });

            
        
        return  () => controller.abort();


    }, []);

  return {photos, error};
}

export default usePhotos