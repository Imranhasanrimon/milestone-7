import React, { useEffect, useState } from 'react';
import './Sunglass.css';
import { Watch } from '../Watch/Watch';
import * as math from '../../Utils/calculate';

const Sunglass = () => {
    const first = 20;
    const second = 50;
    const sum = math.add(first, second);
    const gun = math.mult(first, second);
    const vag = math.devide(first, second);
    console.log(sum, gun, vag);

    return (
        <div>
            <Watch></Watch>
        </div>
    );
};

export default Sunglass;