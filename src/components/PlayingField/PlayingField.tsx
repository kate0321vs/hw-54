import "./PlayingField.css";
import { useState } from 'react';
import Cell from '../Сell/Cell.tsx';

interface ICell {
  hasItem: boolean;
  clicked: boolean;
  id: number;
  clickedCells: (idCell: number) => void;
}

const PlayingField = () => {

  const drawCells = () => {
    const cellsArray= []
    for (let i = 0; i < 36; i++) {
      cellsArray.push({hasItem: false, clicked: false, id: i + 1});
    }
    cellsArray[Math.floor(Math.random() * 36)].hasItem = true;
    return cellsArray
  }

  const [cells, setCells] = useState<ICell[]>(drawCells());

  const clickedCells = (idCell: number) => {
    setCells(prevState => prevState.map((cell) => cell.id === idCell ? { ...cell, clicked: true } : cell));
  }

  return (
    <div className="playingField">
      {cells.map((cell) => (
        <Cell hasItem={cell.hasItem}
              clicked={cell.clicked}
              key={cell.id}
              onClickCell={() => clickedCells(cell.id)}
        />
      ))}
    </div>
  );
};

export default PlayingField;