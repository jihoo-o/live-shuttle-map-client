export interface Position {
    lat: number;
    lng: number;
}

interface Marker extends Position {
    type: string;
    state: string;
    isCurrent: boolean;
}

export interface UserMarker extends Marker {
    userId: string;
    name: string;
}

export interface CreatingMarker extends UserMarker {
    startPosition?: Position;
}
