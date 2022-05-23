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
    image?: Image;
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

export interface Message {
    user: User;
    text: string;
    timestamp: number;
}

export type Direction = 'Left' | 'Right';
