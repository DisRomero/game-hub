import React, { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";


export interface Photo {
    albumId: number;
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
}

export interface FetchPhotoResponse extends Array<Photo> {}

const usePhotos = () => {
    const [photos, setPhotos] = useState<Photo[]>([]);
    const [error, setError] = useState("");

    useEffect(() => {
        const controller = new AbortController();
        apiClient
            .get<FetchPhotoResponse>("/photos", {signal: controller.signal})
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