import React from 'react';
import './1.7.import.scss';

export const App = () => {
    return (
        <>
            <div className='div-with-button'>
                <button>Do something</button>
            </div>
            <div className='avatars'>
            {
                [96, 97, 98, 99].map(avatarNumber => (
                    <div className={`avatar-${avatarNumber}`}/>
                ))
            }
            </div>
        </>

    );
};
