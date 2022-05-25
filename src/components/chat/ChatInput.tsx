import React, { useState } from 'react';
import styled from 'styled-components';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import { InputAdornment } from '@mui/material';

interface ChatInputProps {
    onSubmit?: (text: string) => {};
}

const Wrapper = styled.div`
    background-color: white;
    height: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    fieldset {
        border-radius: 2rem;
        border: none;
    }
`;

const ChatInput = ({ onSubmit }: ChatInputProps) => {
    const [text, setText] = useState('');
    const handleChange = (event) => {
        setText(event.target.value);
    };

    return (
        <Wrapper>
            <TextField
                sx={{
                    width: '100%',
                    margin: '0 1rem',
                    backgroundColor: '#CBD3DE',
                    borderRadius: '2rem',
                }}
                size={'small'}
                value={text}
                onChange={handleChange}
                InputProps={{
                    endAdornment: (
                        <InputAdornment
                            position="end"
                            onClick={() => onSubmit && onSubmit(text)}
                        >
                            <SendIcon
                                sx={{
                                    transform: 'rotate(-45deg)',
                                    marginBottom: '5px',
                                    color: 'white',
                                }}
                            />
                        </InputAdornment>
                    ),
                }}
            />
        </Wrapper>
    );
};

export default ChatInput;
