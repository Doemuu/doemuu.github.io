import React from 'react';
import Progressbar from '../../../components/progessbar/progressbar';

import { StageProps } from "./../cousin";

import "../cousin.scss";

interface stagetwoProps extends StageProps {
  handleCompany :((company:boolean) => void)
}


function StageTwo(props: stagetwoProps) {

  const [answer, setAnswer] = React.useState("");

  const functionresult = () => {
    evaluateResult();
    props.changeStage();
  }

  const evaluateResult = () =>{
    if(answer === "ja"){
      props.handleCompany(true);
    }else{
      props.handleCompany(false);
    }
  }

  return (
    <div className="cousinpage">
      <div className="banner">
        <h1>Cousin/e Treffe</h1>
        <h3>Hey alli metenand!</h3>
        <p>Wie er secher alli wössed versueched verschednigsti vo üs emmer weder es Treffe mett de engere Famelie z'organisiere.
        Leider hett's no nie klappet. Dorom hend ech (Dömu) ond Dzena nomol en Versuech gstartet öppis z'plane. Ech glaube dass bi allne vo euch es Interesse bestoht!
        För das han ech en chorzi omfrog erstellt. Bitte lesed aber zersch Details dore bevor er si usföllet!
        Bitte fölled si so schnell wie möglech us, sodass ech ond Dzena wiiter chönne plane. Ech erwarte bes spötistens am 20. Juni 23:59 das es jede gmacht hett! Sost send er halt eventuell ned debi
        well s datum denne gsetzt werd! (!!ANNE!!)</p>
        <br />
        <div className="btn-div">
          <a className="btn" onClick={props.setDetails}>Details</a>
        </div>
      </div>
      <div className="form">
        {props.children}
        <div className="accompanied">
          <p>Begleitung (+1)</p>
          <div className="form-checkbox">
            <form>
              <input type="radio" name="form" value="ja" onChange={e => setAnswer(e.target.value)}/>
              <span>JA</span>
              <br />
              <input type="radio" name="form" value="nein" onChange={e => setAnswer(e.target.value)}/>
              <span>NEIN</span>
            </form>
          </div>
        </div>
          <div className="continue">
            <a className="btn" onClick={() => functionresult()}>Weiter</a>
          </div>
        </div>
      </div>

      );
    }

    export default StageTwo;
