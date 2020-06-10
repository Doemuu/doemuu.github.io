import React from 'react';

import {StageProps} from "./../cousin";

import "../cousin.scss";

interface stageZeroProps extends StageProps{
}

function StageZero(props: stageZeroProps) {
  return (
    <div className="fullscreen-cousinpage">
      <div className="banner">
        <h1>Cousin/e Treffe</h1>
        <h3>Hey alli metenand!</h3>
        <p>Wie er secher alli wössed versueched verschednigsti vo üs emmer weder es Treffe mett de Famelie z'organisiere.
        Leider hett's no nie klappet. Dorom hend ech (Dömu) ond Dzena nomol en Versuech gstartet öppis z'plane. Ech glaube dass bi allne vo euch es Interesse bestoht!
        För das han ech en chorzi omfrog erstellt. Bitte lesed aber zersch Details dore bevor er si usföllet!
        Bitte fölled si so schnell wie möglech us, sodass ech ond Dzena wiiter chönne plane. Ech erwarte bes spötistens am 13. Juni 23:59 das es jede gmacht hett! Sost send er halt eventuell ned debi
        well s datum denne gsetzt werd! (!!ANNE!!)</p>
        <br/>
        <div className="btn-div">
          <a className="btn" onClick={() => props.changeStage(1)}>Beginnen</a>
          <a className="btn" onClick={() => props.changeStage(-1)}>Details</a>
        </div>
      </div>
    </div>

  );
}

export default StageZero;