import React from 'react';

const Title = ({ titles }) => (
    <div className='row'>
        <h3>
            {titles.reduce((prev, next) => [
                prev,
                <span key={next} className='grey spaced'>
                    &#9679;
                </span>,
                next,
            ])}
        </h3>
    </div>
);

export default Title;
