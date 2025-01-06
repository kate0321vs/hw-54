import React from 'react';

interface Props {
  resetGame: React.MouseEventHandler;
  text?: string;
}

const Button: React.FC<Props> = ({resetGame, text = "Reset"}) => {

  return (
    <button
      style={{marginTop: '30px', backgroundColor: 'white', color: 'black'}}
      type="button"
      onClick={resetGame}>{text}
    </button>
  );
};

export default Button;