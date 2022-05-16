export declare const markerImages: {
    shuttlestation: {
        url: string;
        size: {
            width: number;
            height: number;
        };
    };
    shuttlebus: {
        url: string;
        size: {
            width: number;
            height: number;
        };
    };
    user: {
        ready: {
            isCurrent: {
                url: string;
                size: {
                    width: number;
                    height: number;
                };
            };
            isNotCurrent: {
                url: string;
                size: {
                    width: number;
                    height: number;
                };
            };
        };
        running: {
            isCurrent: {
                url: string;
                size: {
                    width: number;
                    height: number;
                };
            };
            isNotCurrent: {
                url: string;
                size: {
                    width: number;
                    height: number;
                };
            };
        };
    };
    blocked: {
        url: string;
        size: {
            width: number;
            height: number;
        };
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
export declare const getShuttles: () => Promise<any>;
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
