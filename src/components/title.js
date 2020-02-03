import React from 'react';

import { Text, Dot } from '../styled';

const Title = ({ titles }) => (
    <div className='row'>
        <Text as='h3' size='lg'>
            {titles.reduce((prev, next) => [prev, <Dot key={next} />, next])}
        </Text>
    </div>
);

export default Title;
