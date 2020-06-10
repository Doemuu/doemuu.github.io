import React from 'react';
import Progressbar from '../../../components/progessbar/progressbar';

import { StageProps} from "./../cousin";

import "../cousin.scss";


interface stagefourProps extends StageProps {
    handleIdea :((idea: string) => void)
}

interface stagefourState {
  idea: string
}

class StageFour extends React.Component<stagefourProps, stagefourState> {

  constructor(props: stagefourProps) {
    super(props);
    this.state = {
      idea:""
    }

    this.functionresult = this.functionresult.bind(this);
  }


  functionresult() {
    if(this.state.idea !== ""){
      this.props.handleIdea(this.state.idea);
      this.props.changeStage(5);
    }
  }

  render() {
    return (
      <div className="cousinpage">
        <div className="banner">
          <h1>Cousin/e Treffe</h1>
          <h3>Hey alli metenand!</h3>
          <p>Wie er secher alli wössed versueched verschednigsti vo üs emmer weder es Treffe mett de Famelie z'organisiere.
          Leider hett's no nie klappet. Dorom hend ech (Dömu) ond Dzena nomol en Versuech gstartet öppis z'plane. Ech glaube dass bi allne vo euch es Interesse bestoht!
          För das han ech en chorzi omfrog erstellt. Bitte lesed aber zersch Details dore bevor er si usföllet!
          Bitte fölled si so schnell wie möglech us, sodass ech ond Dzena wiiter chönne plane. Ech erwarte bes spötistens am 13. Juni 23:59 das es jede gmacht hett! Sost send er halt eventuell ned debi
          well s datum denne gsetzt werd! (!!ANNE!!)</p>
          <br />
          <div className="btn-div">
            <a className="btn" onClick={() => this.props.changeStage(-1)}>Details</a>
          </div>
        </div>
        <div className="form">
          <Progressbar stages={this.props.numberofstages} activestage={4} handleClick={this.props.changeStage} />
          <div className="accompanied">
          <p>Welche der beiden Ideen bevorzugst du?</p>
          <div className="form-checkbox">
            <form>
              <input type="radio" name="form" value="weggis" onChange={e => this.setState({idea:e.target.value})}/>
              <span>See</span>
              <br />
              <input type="radio" name="form" value="waldhutte" onChange={e => this.setState({idea: e.target.value})}/>
              <span>Waldhütte</span>
            </form>
          </div>
          </div>
          <div className="continue">
            <a className="btn" onClick={() => this.functionresult()}>Weiter</a>
          </div>
        </div>
      </div>
    );
  }


}

export default StageFour;