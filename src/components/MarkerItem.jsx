import React from 'react';
import ListItem from '@mui/material/ListItem';
import Account from './Account';

const MarkerItem = ({ userInfo }) => (
    <>
        <ListItem divider sx={{ padding: '5px 16px' }}>
            <img
                src="https://lh3.googleusercontent.com/STwrXj648Av6cEV03zj_Tl3AgD1N_URTlDTx3m4TrSj-AekTcE_6zwMEoucA4Lpm3cFmQSAm17YHVFJ2QEu7rdYH75-SFZ9_9NeUqXK9h-KMhEspudHmfH9nhRW4Qd9VzDBRhI3qL7FFd6IUpTomKzUkJxD5AhmySy5oj_x3QxjoSTs_joBGRoTwZzlriI7M8rU6pwZC4OVMDlJYppM4Pl00eLjJRB8_H0I73zdtcZWHSC0Urez5GXXGj41VfdDnVr4rwbix2xsrFfYYwIaSk8bSrH-7eH7UCXvhCIL8r7L2_xTLpC8Vf5dClLmZzBmK15HI_5XnGJrywwsI2U7zOJ_F2unkUHX4a-OWRMEy0JUXPQyqhB1kiUYDwWyR8NCV8uc9EvopH90dWp2w-29KnYjffqJtThSre1AkA0j4U_7-iM_TVrBqWbngt7rgygvr6qn0mvcUtpIO3gQhFHKccaL-xJciPYUWiHQ9FJ0Ho2aKAgUbwozIk6sY3aFAbW8Pdi3miopz8GmbRLP96kll68LiV517794j5j3OyNiDwr1D2iKFiHKbLRBuxTj4hCmpBOVeYw6rhbbevx3xsgwqqKCai7wewEGWVtsxK2yyRf72GrV-2nsx-rkkhDaK3ZW3JSStO_hyv-CxuqeYhBUxoZm3ruY5QzrBsxbMsYKX-hJ14cVZDPP0LQlIOhn21FY7GG0nsEvEGL3S7f2J0ghmw-v6Wvc20LG7s4tS42ZkTUTBZ6PVdRAqxmdmN6x_m2refAG-82X-CN3wlVjofAjTs8Rp9qS0eDo=s500-no?authuser=1"
                alt=""
                width="65"
                height="65"
            />
            <Account type="simple" userInfo={userInfo} />
        </ListItem>
    </>
);

export default MarkerItem;
