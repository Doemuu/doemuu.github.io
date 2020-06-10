import React, { MouseEvent } from 'react';
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

import StageZero from './stages/stageZero';
import StageOne from './stages/stageOne';
import StageTwo from "./stages/stageTwo";
import StageThree from "./stages/stageThree";
import StageFour from "./stages/stageFour";
import Detail from "./detail";

import "./cousin.scss";

export interface StageProps {
  changeStage: ((index: number) => void);
  numberofstages: number;
}

export interface PersonalDate {
  date: string;
}

interface CousinProps {

}

interface CousinState {
  numberofstages: number;
  stage: number;
  details: boolean;
  name: string;
  accompanied: boolean;
  dates: PersonalDate[];
  idea: string;
}

class Cousin extends React.Component<CousinProps, CousinState>{
  constructor(props: CousinProps) {
    super(props);
    this.state = { numberofstages: 5, stage: 0, details: false, name: "", accompanied: false, dates: [], idea: "" };
  }

  handleStageChange = (stage: number) => {
    this.setState({ stage: stage });
  }

  handleNameEntry = (name: string) => {
    this.setState({ name: name });
  }

  handleCompany = (company: boolean) => {
    this.setState({ accompanied: company })
  }

  handleDates = (dates: PersonalDate[]) => {
    this.setState({ dates: dates });
  }

  handleIdea = (idea: string) => {
    this.setState({ idea: idea });
  }

  handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    axios.post('https://us-central1-cousintreffe.cloudfunctions.net/sendEmail', {
        from: this.state.name,
        company: this.state.accompanied,
        dates: this.state.dates,
        idea: this.state.idea,
    }).then((response: AxiosResponse) => {
      console.log(response);
    }).catch((error: AxiosError) => {
      console.error(error);
    });
  }

  render() {
    switch (this.state.stage) {
      case 0: return (
        <StageZero numberofstages={this.state.numberofstages} changeStage={this.handleStageChange} />
      );
      case 1: return (
        <StageOne numberofstages={this.state.numberofstages} handleName={this.handleNameEntry} changeStage={this.handleStageChange} />
      );
      case 2: return (
        <StageTwo numberofstages={this.state.numberofstages} handleCompany={this.handleCompany} changeStage={this.handleStageChange} />
      );
      case 3: return (
        <StageThree numberofstages={this.state.numberofstages} handleDates={this.handleDates} changeStage={this.handleStageChange} />
      );
      case 4: return (
        <StageFour numberofstages={this.state.numberofstages} handleIdea={this.handleIdea} changeStage={this.handleStageChange} />
      );
      case 6: return(
        <Detail />
      );
      default:
        return (
          <div className="cousinpage">
            <div className="banner">
              <h1>Cousin/e Treffe</h1>
              <h3>Hey alli metenand!</h3>
              <p>Wie er secher alli wössed versueched verschednigsti vo üs emmer weder es Treffe mett de Famelie z'organisiere.
              Leider hett's no nie klappet. Dorom hend ech (Dömu) ond Dzena nomol en Versuech gstartet öppis z'plane. Ech glaube dass bi allne vo euch es Interesse bestoht
              werom die Frog grad wegfallt. Bitte fölled s'formular so gli wie möglech us. Meh Details zo was d Idee esch fended er ondter details.<a onClick={e => this.setState({ details: true })}>do</a></p>
            </div>
            <form>
              <p>{this.state.name}</p>
              <p>{this.state.accompanied.toString()}</p>
              {this.state.dates.map((date, i) => <p key={i} >{date.date}
              </p>)}
              <p>{this.state.idea}</p>
              <button onClick={this.handleClick} className="btn">Absenden</button>
            </form>
          </div>
        );
    }

  }
}

export default Cousin;
