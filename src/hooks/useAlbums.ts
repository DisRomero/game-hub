import React, { useEffect, useState } from 'react'
import apiClient from '../services/api-client';
import { CanceledError } from 'axios';

export interface Photo {
    albumId: number;
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
}

export interface FetchPhotoResponse extends Array<Photo> {}

const useAlbums = () => {
    const [albums, setAlbums] = useState<Photo[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const controller = new AbortController();

        setIsLoading(true);

        apiClient
            .get<FetchPhotoResponse>("/photos", {signal: controller.signal})
            .then((res) => {
                setAlbums(res.data);
                setIsLoading(false);
            })
            .catch((err) => {
                if(err instanceof CanceledError) return;
                    setError(err.message);
                    setIsLoading(false);
                });

        return  () => controller.abort();

    }, []);

  return {albums, error, isLoading};
}

export default useAlbums