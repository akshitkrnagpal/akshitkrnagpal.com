import { styled } from 'linaria/react';

export default styled.button`
  display: inline-block;
  cursor: pointer;
  font-weight: normal;
  padding: 0.5rem 1rem;
  text-decoration: none;

  color: #222;
  background-color: #fbfbfb;
  background-image: linear-gradient(to bottom, #fbfbfb 0%, #ececec 100%);
  background-repeat: repeat-x;
  border: 1px solid #ccc;
  border-radius: 3px;

  transition: background-color 0.3s ease-out, background-image 0.3s ease-out,
    transform 0.3s ease-out;

  &:hover {
    background-image: linear-gradient(to bottom, #fff 0%, #f5f5f5 100%);
    background-color: #fff;
    transform: scale(1.1);
  }
`;
