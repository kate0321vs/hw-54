import './PlayingField.css';
import { useState } from 'react';
import Cell from '../Сell/Cell.tsx';
import { ICell } from '../../types';
import Button from '../Button/Button.tsx';
import Counter from '../Counter/Counter.tsx';

const PlayingField = () => {

  const drawCells = () => {
    const cellsArray = []
    for (let i = 0; i < 36; i++) {
      cellsArray.push({hasItem: false, clicked: false, id: i + 1});
    }
    cellsArray[Math.floor(Math.random() * 36)].hasItem = true;
    return cellsArray
  }

  const [cells, setCells] = useState<ICell[]>(drawCells());
  const [countTries, setCountTries] = useState<number>(0)

  const clickedCells = (idCell: number) => {
    setCells(prevState => prevState.map((cell) => cell.id === idCell ? {...cell, clicked: true} : cell));
    setCountTries(prevState => prevState + 1);
  }

  const newGame = () => {
    setCells(drawCells());
    setCountTries(0)
  }

  return (
    <>
      <div className="playingField">
        {cells.map((cell) => (
          <Cell hasItem={cell.hasItem}
                clicked={cell.clicked}
                key={cell.id}
                onClickCell={() => clickedCells(cell.id)}
          />
        ))}
      </div>
      <Counter tries={countTries}/>
      <Button resetGame={newGame}/>
    </>

  );
};

export default PlayingField;