import React from 'react';

import "./progressbar.scss"
interface ProgressbarProps {
  activestage: number,
  stages: number,
  handleClick: ((index: number) => void)
}

function Progressbar(props: ProgressbarProps) {

  const stages = [];

  for (let i = 0; i < props.stages; i++) {

    if (i < props.activestage) {
      stages.push(<div onClick={() => props.handleClick(i)} key={i}></div>);
    } else if(i === props.activestage){
      stages.push(<div key={i} className="active"></div>);
    }else{
      stages.push(<div key={i}></div>);
    }
  }
  return (
    <div className="progressbar">
      {stages}
    </div>
  );
}

export default Progressbar;
