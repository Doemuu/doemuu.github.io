import React from 'react';

import "./progressbar.scss";

interface ProgressbarProps {
  activestage: number;
  stages: number;
  handleClick: ((index: number) => (() => void));
}

function Progressbar(props: ProgressbarProps) {
  const { activestage, stages, handleClick } = props;

  return (
    <div className="progressbar">
      {Array.from(Array(stages).keys()).map((s: number, i: number) => {
        return i < activestage ?
          <div onClick={handleClick(i)} key={i}></div> :
          i === activestage ? <div key={i} className="active"></div> :
            <div key={i}></div>;
      })}
    </div>
  );
}

export default Progressbar;
