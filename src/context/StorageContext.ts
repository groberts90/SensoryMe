import { ReactNode } from "react";
import { createContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

type Strategy = {
    id: number;
    name: string;
}

type UserProfile = {
    username: string;
    strategies: Strategy[];
}

export const StorageContext = createContext<null | {
    userProfile: UserProfile
}>(null);


export const StorageProvider = ({children}: ReactNode) => {
    const [username, setUsername] = useLocalStorage<string | null>('username', null);
    const [strategies, setStrategies] = useLocalStorage<string | null>('strategies', null);

    return(
        <StorageContext userProfile={username, strategies}>
            {children}
        </StorageContext>
    )
}


