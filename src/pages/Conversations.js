import React from 'react';
import Message from '../components/Message';

// Messages -> flex + colomn
const Conversations = () => {
    return (
        <>
            <Message
                ReceiveOrSend="send"
                text={
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex'
                }
            />
            <Message
                ReceiveOrSend="receive"
                text={
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex'
                }
            />
        </>
    );
};

export default Conversations;
