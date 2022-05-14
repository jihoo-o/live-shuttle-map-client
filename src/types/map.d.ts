export interface Position {
    lat: number;
    lng: number;
}

interface Marker extends Position {
    type: string;
    state: string;
    isCurrent: boolean;
}

export interface User {
    userId: string;
    name: string;
}

export interface UserMarker extends Marker, User {}

export interface CreatingMarker extends UserMarker {
    startPosition?: Position;
}

export interface Image {
    url: string;
    size: {
        width: number;
        height: number;
    };
}
