import React from 'react';

const Scholastic = ({ scholastic: { title, link, place } }) => (
    <div id='scholastic' className='row'>
        <h4>
            {title} at{' '}
            <a href={link} className='grey'>
                {place}
            </a>
        </h4>
    </div>
);

export default Scholastic;
