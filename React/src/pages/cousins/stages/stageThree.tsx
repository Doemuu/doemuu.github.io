import React from 'react';
import Progressbar from '../../../components/progessbar/progressbar';

import { StageProps, PersonalDate } from "./../cousin";

import "../cousin.scss";


interface stagethreeProps extends StageProps {
  handleDates: ((dates: PersonalDate[]) => void);
}

interface stagethreeState {
  selectedIndex: number;
  possibleDates: PersonalDate[];
  dates: PersonalDate[];
}

class StageThree extends React.Component<stagethreeProps, stagethreeState> {
  constructor(props: stagethreeProps) {
    super(props);

    this.state = {
      selectedIndex: 0,
      possibleDates: [],
      dates: [
        { date: "Keins" },
        { date: "SO 05. Juli" },
        { date: "SO 12. Juli" },
        { date: "SO 26. Juli" },
        { date: "SA 01. August" },
        { date: "SO 16. August" },
        {date: "SO 23. August" },
      ],
    };
  }

  addDate = () => {
    const selectedDate = this.state.dates[this.state.selectedIndex];

    if (selectedDate.date !== "Keins") {
      this.setState({
        possibleDates: [...this.state.possibleDates, selectedDate],
        dates: this.state.dates.filter((date: PersonalDate, index: number) => {
          return index !== this.state.selectedIndex && date.date !== "Keins";
        }),
        selectedIndex: 0,
      });
    } else if (this.state.possibleDates.length === 0) {
      this.setState({
        possibleDates: [selectedDate],
        dates: [],
        selectedIndex: 0,
      })
    }
  }

  handleClick = () => {
    if (this.state.possibleDates[0] !== undefined) {
      this.props.handleDates(this.state.possibleDates);
      this.props.changeStage();
    }
  }

  render() {
    const { changeStage, numberofstages, setDetails, children } = this.props;
    const { dates, selectedIndex, possibleDates } = this.state;

    return (
      <div className="cousinpage">
        <div className="banner">
          <h1>Cousin/e Treffe</h1>
          <h3>Hey alli metenand!</h3>
          <p>Wie er secher alli wössed versueched verschednigsti vo üs emmer weder es Treffe mett de engere Famelie z'organisiere.
          Leider hett's no nie klappet. Dorom hend ech (Dömu) ond Dzena nomol en Versuech gstartet öppis z'plane. Ech glaube dass bi allne vo euch es Interesse bestoht!
          För das han ech en chorzi omfrog erstellt. Bitte lesed aber zersch Details dore bevor er si usföllet!
          Bitte fölled si so schnell wie möglech us, sodass ech ond Dzena wiiter chönne plane. Ech erwarte bes spötistens am 20. Juni 23:59 das es jede gmacht hett! Sost send er halt eventuell ned debi
          well s datum denne gsetzt werd!</p>
          <br />
          <div className="btn-div">
            <a className="btn" onClick={setDetails}>Details</a>
          </div>
        </div>
        <div className="form">
          {children}
          <p>Wähle bitte ALLE die Daten aus, die dir passen!</p>
          {dates.length > 0 &&
            <div className="dates">
              <select name="dateselector" value={dates[selectedIndex].date} onChange={e => this.setState({ selectedIndex: e.target.selectedIndex })}>
                {dates.map((date, i) => <option key={i} >{date.date}
                </option>)}
              </select>
              <div>
                <a onClick={this.addDate}>+</a>
              </div>
            </div>}
          <div>
            {possibleDates.map((date, index) => <p key={index}>{date.date}</p>)}
          </div>
          <div className="continue">
            <a className="btn" onClick={this.handleClick}>Weiter</a>
          </div>
        </div>
      </div>
    );
  }


}

export default StageThree;
