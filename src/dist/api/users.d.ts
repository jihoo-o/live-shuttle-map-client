export declare const getProfile: (id: string) => {
    userId: string;
    name: string;
    iamgeUrl: string;
    state: string;
    isAuthorized: boolean;
    imageUrl?: undefined;
} | {
    userId: string;
    name: string;
    state: string;
    imageUrl: string;
    isAuthorized: boolean;
    iamgeUrl?: undefined;
} | undefined;
export declare const postProfile: (profile: any) => void;
export declare const putReady: (userId: any) => void;
export declare const putRunning: (userId: any) => void;
export declare const putBlocked: (userId: any) => void;
