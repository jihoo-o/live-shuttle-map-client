import React from 'react';
import { User } from '../types/map';

interface AvatarProps {
    user: User;
    onClick?: (user: User) => {};
}

const Avatar = ({ user, onClick }: AvatarProps) => <h1>Avatar</h1>;

export default Avatar;
