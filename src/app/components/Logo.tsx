import Image from "next/image";
import React from "react";

export const Logo = () => {
    return (
        // <img src='https://rb.gy/ulxxee' alt='renoflix' width={90} height={90} />
        <Image
            src='/logo_renoflix.png'
            alt='renoflix'
            width={90}
            height={90}
            className='cursor-pointer' />
    );
};
