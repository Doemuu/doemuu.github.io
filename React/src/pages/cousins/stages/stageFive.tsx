import React from 'react';
import Progressbar from '../../../components/progessbar/progressbar';

import { StageProps} from "./../cousin";

import "../cousin.scss";


interface stagefiveProps extends StageProps {
    handleComment :((comment: string) => void)
}

interface stagefiveState {
  comment: string
}

class StageFive extends React.Component<stagefiveProps, stagefiveState> {

  constructor(props: stagefiveProps) {
    super(props);
    this.state = {
      comment:""
    }

    this.functionresult = this.functionresult.bind(this);
  }


  functionresult() {
      this.props.handleComment(this.state.comment);
      this.props.changeStage();
  }

  render() {
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
            <a className="btn" onClick={this.props.setDetails}>Details</a>
          </div>
        </div>
        <div className="form">
          {this.props.children}
          <div className="">
          <div className="">
            <form>
              <textarea placeholder="Hast du etwas hinzuzufügen?" onChange={e => this.setState({comment : e.target.value})}>

              </textarea>
            </form>
          </div>
          </div>
          <div className="continue">
            <a className="btn" onClick={() => this.functionresult()}>Beenden</a>
          </div>
        </div>
      </div>
    );
  }


}

export default StageFive;
