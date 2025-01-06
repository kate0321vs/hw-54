import React from 'react';

interface Props {
  tries: number;
}

const Counter: React.FC<Props> = ({ tries }) => {
  return (
    <p>Tries: <span>{tries}</span></p>
  );
};

export default Counter;