import './Cell.css'
import { MouseEventHandler } from 'react';

interface Props {
  hasItem: boolean,
  clicked: boolean,
  onClickCell: MouseEventHandler<HTMLDivElement>,
}

const Cell: React.FC<Props> = ({hasItem, clicked, onClickCell}) => {
  return (
    <div className={`cell ${clicked ? 'clicked' : ''} ${hasItem && clicked ? 'hasItem' : ''}`}
         onClick={onClickCell}>
    </div>
  );
};

export default Cell;