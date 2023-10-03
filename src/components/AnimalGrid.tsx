import React, { useEffect, useState } from "react";
import { Text } from "@chakra-ui/react";
import apiClient from "../services/api-client";

interface FetchAnimalResponse {
    id: number;
    name: string;
}

const AnimalGrid = () => {
    const [animals, setAnimals] = useState([]);
    const [error, setError] = useState("");

    useEffect(() => {
        apiClient
            .get<FetchAnimalResponse, any>("/categories")
            .then((res) => setAnimals(res.data))
            .catch((err) => setError(err.message));
    });

    return (
        <>
            {error && <Text>{error}</Text>}
            <ul>
                {animals.map((animal) => (
                    <li key={animal.id}>{animal.name}</li>
                ))}
            </ul>
        </>
    );
};

export default AnimalGrid;
