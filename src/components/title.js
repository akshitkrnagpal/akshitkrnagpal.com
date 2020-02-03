import React from 'react';

import { Text } from '../styled';

const Title = ({ titles }) => (
    <div className='row'>
        <Text as='h3' size='lg'>
            {titles.reduce((prev, next) => [
                prev,
                <span key={next} className='grey spaced'>
                    &#9679;
                </span>,
                next,
            ])}
        </Text>
    </div>
);

export default Title;
