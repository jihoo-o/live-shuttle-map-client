import React from 'react';
import Paper from '@mui/material/Paper';
import TableContainer from '@mui/material/TableContainer';
import TableBody from '@mui/material/TableBody';
import Table from '@mui/material/Table';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

const createData = (id, stop, bus, time) => {
    if (bus === 0) {
        bus = '셔틀버스';
    } else if (bus === 3) {
        bus = '마을버스 3번';
    }

    let minute, second;
    if (time) {
        minute = time / 60 >= 1 ? Math.floor(time / 60) : 0;
        second = Math.floor(time - minute * 60);
    }

    return {
        id,
        stop,
        bus,
        time: `${minute ? `${minute}분` : ''} ${
            second ? `${second}초` : ''
        }`.trim(),
    };
};

const rows = [
    createData(1, '남산소방서', 0, 420),
    createData(2, '남산소방서', 0, 870),
    createData(3, '남산성당', 3, 600),
    createData(4, '남산성당', 80, 42),
];

const RealtimeBusInfo = (props) => {
    return (
        <>
            {/* <TableContainer component={Paper}> */}
            <TableContainer>
                <Table sx={{ minWidth: 400 }}>
                    <TableBody>
                        {rows.map(({ id, stop, bus, time }) => (
                            <TableRow
                                key={id}
                                sx={{
                                    '&:last-child td, &:last-child th': {
                                        border: 0,
                                    },
                                }}
                            >
                                <TableCell align="center">{stop}</TableCell>
                                <TableCell align="center">{bus}</TableCell>
                                <TableCell align="center">{time}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
};

export default RealtimeBusInfo;
