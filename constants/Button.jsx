import React from 'react';

// styled-components
import { Button1 } from "../styles/constants/Constants";

const Button = ({ title, Bg, Text, BgT, TexTH, full }) => {
    return (
        <>
            <Button1 Text={Text} TexTH={TexTH} BgT={BgT} Bg={Bg} full={full}>{title}</Button1>
        </>
    )
}

export default Button