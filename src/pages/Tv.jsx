import React from 'react';
import { TV } from '../Components/TV';
import { tvprograms } from '../Tv.dummy';
export const Tv = () => {
    const firstBanner = [];
    const secondBanner = [];

    for (let i = 0; i < 8; i++) {
        const selectedMovie = tvprograms.results[i];
        firstBanner.push(<TV data={selectedMovie} />)
    }

    for (let i = 8; i < 16; i++) {
        const selectedMovie = tvprograms.results[i];
        secondBanner.push(<TV data={selectedMovie} />)
    }

    return (<div>
        <div className="firstBanner" style={{ display: 'flex', justifyContent: 'space-around', margin: '5vh' }}>
            {firstBanner}
        </div>

        <div className="secondBanner" style={{ display: 'flex', justifyContent: 'space-around', margin: '5vh' }}>
            {secondBanner}
        </div>
    </div>)
}