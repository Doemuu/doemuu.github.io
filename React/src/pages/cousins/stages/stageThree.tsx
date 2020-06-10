import React from 'react';
import Progressbar from '../../../components/progessbar/progressbar';

import { StageProps, PersonalDate} from "./../cousin";

import "../cousin.scss";


interface stagethreeProps extends StageProps {
    handleDates :((dates: PersonalDate[]) => void)
}

interface stagethreeState {
  chosenDate: PersonalDate,
  possibleDates: PersonalDate[],
  dates: PersonalDate[],
  correctInput: boolean
}

class StageThree extends React.Component<stagethreeProps, stagethreeState> {

  constructor(props: stagethreeProps) {
    super(props);
    var d = {
      date: "Keins"
    }
    this.state = {
      chosenDate: d,
      possibleDates: [], dates: [
        { date: "Keins" },
        { date: "SO 28. Juni" },
        { date: "SO 05. Juli" },
        { date: "SO 12. Juli" },
        { date: "SO 26. Juli" },
        { date: "SA 01. August" },
        { date: "SO 16. August" }

      ],
      correctInput: false
    }

    this.addDate = this.addDate.bind(this);
    this.addChosenDate = this.addChosenDate.bind(this);
    this.functionresult = this.functionresult.bind(this);
  }

  addChosenDate(date: string) {
    var d = {
      date: date
    }
    this.setState({ chosenDate: d });
  }

  addDate(date: PersonalDate) {
    const array = this.state.possibleDates;

    array.push(date);
    const arraydates = this.state.dates;
    if (date.date === "Keins") {
      this.setState({ dates: [] });
    } else {
      if (this.state.possibleDates.length === 1) {
        arraydates.splice(0, 1);
      }
      let index = -1;
      for (let i = 0; i < arraydates.length; i++) {
        if (arraydates[i].date === date.date) {
          var d;
          let retVal = "";
          if (i === arraydates.length - 1) {
            //last digit
            d = {
              date: arraydates[0].date
            }
            retVal = d.date;
          } else {
            d = {
              date: arraydates[i + 1].date
            }
            retVal = d.date;
          }
          this.addChosenDate(retVal);
          index = i;
        }
      }
      if (index > -1) {
        arraydates.splice(index, 1);
      }
      this.setState({ dates: arraydates });
    }
    this.setState({ possibleDates: array });
  }

  functionresult() {
    if (this.state.possibleDates[0] !== undefined) {
      this.props.handleDates(this.state.possibleDates);
      this.props.changeStage(4);
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
          <Progressbar stages={this.props.numberofstages} activestage={3} handleClick={this.props.changeStage} />
          <p>Wähle bitte ALLE die Daten aus, die dir passen!</p>
          {this.state.dates.length === 0 ?
            <div>
            </div>
            :
            <div className="dates">
              <select name="dateselector" onChange={e => this.addChosenDate(e.target.value)}>
                {this.state.dates.map((date, i) => <option key={i} >{date.date}
                </option>)}
              </select>
              <div>
                <a onClick={() => this.addDate(this.state.chosenDate)}>+</a>
              </div>
            </div>
          }
          <div>
            {this.state.possibleDates.map((date, index) => <p key={index}>{date.date}</p>)}
          </div>
          <div className="continue">
            <a className="btn" onClick={() => this.functionresult()}>Weiter</a>
          </div>
        </div>
      </div>
    );
  }


}

export default StageThree;
