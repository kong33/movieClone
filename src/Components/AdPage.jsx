import React from 'react'

import { AD } from './AD'
import { useState } from 'react';

export const AdPage = () => {
    const [isadvertiseNo, setasvertiseNo] = useState(false);
    const handleClick = () => {
        setasvertiseNo(true);
    }

    return (
        <div>
            <AD isTrue={!isadvertiseNo} />
            <button onClick={handleClick}>광고 안보기</button>
        </div>
    )
}
