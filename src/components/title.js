import React from 'react';
import './title.css';

const Title = ({ titles }) => (
    <div id='title' className='row'>
        <h3>
            {titles.reduce((prev, next) => [
                prev,
                <span className='grey spaced'>&#9679;</span>,
                next,
            ])}
        </h3>
    </div>
);

export default Title;
