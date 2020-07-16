import { styled } from 'linaria/react';

export default styled.span`
  color: #767676;
  margin: 0 0.5rem;

  &:after {
    content: '•';
  }
`;
