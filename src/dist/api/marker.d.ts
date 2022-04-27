export declare const markerImages: {
    shuttlebus: string;
    bus: string;
    user: {
        ready: {
            isCurrent: string;
            isNotCurrent: string;
        };
        running: {
            isCurrent: string;
            isNotCurrent: string;
        };
        blocked: string;
    };
};
export declare const getUsers: () => Promise<{
    userId: string;
    name: string;
    type: string;
    state: string;
    isCurrent: boolean;
    lat: number;
    lng: number;
}[]>;
export declare const getShuttleStops: () => Promise<{
    stationId: string;
    type: string;
    name: {
        ko: string;
        en: string;
    };
    lat: number;
    lng: number;
}[]>;
export declare const postUser: (userInfo: any, isCurrent: any, position: any) => Promise<{
    userId: any;
    name: any;
    type: string;
    state: string;
    isCurrent: any;
    lat: any;
    lng: any;
}>;
export declare const deleteUser: (userId: any) => Promise<void>;