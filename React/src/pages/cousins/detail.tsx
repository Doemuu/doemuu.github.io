import React from 'react';

import "./detail.scss";

interface DetailProps {
  clickBack: (() => void);
}

const Detail = (props: DetailProps) => {
  const [selectedIdea, setSelectedIdea] = React.useState(1);

  return (
    <div className="details">
      <a className="btn" onClick={props.clickBack}>Zurück</a>
      <h1>Details</h1>
      <div className="ideabtns">
        <a className="btn" onClick={e => setSelectedIdea(1)}>Idee 1</a>
        <a className="btn" onClick={e => setSelectedIdea(2)}>Idee 2</a>
      </div>
      {selectedIdea === 1 ?
        <div>
          <h1>An den See</h1>
          <p>Am östlichen Ufer des Vierwaldstättersees liegt eine Feuerstelle direkt am Strand.</p>
        </div>
        :
        <div>
          <h1>In eine Waldhütte</h1>
        </div>
      }
    </div>
  );
};

export default Detail;
