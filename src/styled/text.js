import styled from 'styled-components';

const sizes = {
    sm: '0.8rem',
    lg: '1.2rem',
};

export default styled.p`
    font-size: ${props => sizes[props.size] || '1rem'};
`;
