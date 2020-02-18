import styled from 'styled-components';

export default styled.a`
  display: inline-block;
  margin: 0 1rem;
  width: 2rem;
  height: 2rem;

  transition: transform 0.3s ease-out;

  &:not(:hover) {
    transform: scale(0.8);
  }
`;
