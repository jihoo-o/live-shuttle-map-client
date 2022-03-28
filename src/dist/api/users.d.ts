export default class Users {
    getProfile(userId: any): void;
    postProfile(profile: any): void;
    putReady(userId: any): void;
    putRunning(userId: any): void;
    putBlocked(userId: any): void;
}
