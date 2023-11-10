import useData from './useData';

export interface Bank {
    iban: string;
    cardType: string;
    currency: string;
}

export interface User {
    id: number;
    firstName: string;
    lastName: string;
    image: string;
    bank: Bank[];
    bloodGroup: string;
}

const useUsers = () => useData<User>("/users");

export default useUsers;

