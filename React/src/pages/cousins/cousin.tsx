import React, { MouseEvent } from 'react';
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

import StageZero from './stages/stageZero';
import StageOne from './stages/stageOne';
import StageTwo from "./stages/stageTwo";
import StageThree from "./stages/stageThree";
import StageFour from "./stages/stageFour";
import StageFive from "./stages/stageFive";
import Progressbar from '../../components/progessbar/progressbar';

import Detail from "./detail";

import "./cousin.scss";

export interface StageProps {
  changeStage: (() => void);
  numberofstages: number;
  setDetails: (() => void);
  children?: React.ReactNode;
}

export interface PersonalDate {
  date: string;
}

interface CousinState {
  numberofstages: number;
  stages: number[];
  details: boolean;
  name: string;
  accompanied: boolean;
  dates: PersonalDate[];
  idea: string;
  comment: string;
  sent: boolean;
  sendClicked: boolean;
}

class Cousin extends React.Component<{}, CousinState>{
  constructor(props: {}) {
    super(props);

    this.state = {
      numberofstages: 6,
      stages: [0],
      details: false,
      name: "",
      accompanied: false,
      dates: [],
      idea: "",
      comment: "",
      sent: false,
      sendClicked: false,
    };
  }

  handleStageChange = (stage: number) => {
    return () => {
      this.setState({ stages: [...this.state.stages, stage] });
    };
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

  handleComment = (comment: string) => {
    this.setState({ comment: comment });
  }

  handleDetails = () => {
    this.handleStageChange(-1)();
  }

  handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    this.setState({ sendClicked: true });

    axios.post('https://us-central1-cousintreffe.cloudfunctions.net/sendEmail', {
      from: this.state.name,
      company: this.state.accompanied,
      dates: this.state.dates,
      idea: this.state.idea,
      comment: this.state.comment
    }).then((response: AxiosResponse) => {
      //it worked
      this.setState({ sent: true });
    }).catch((error: AxiosError) => {
      //didnt work
    });
  }

  render() {
    const { stages, numberofstages, name, dates, accompanied, idea, comment } = this.state;
    const activeStage = stages[stages.length - 1];

    const props = {
      setDetails: this.handleStageChange(-1),
      numberofstages: numberofstages,
      handleName: this.handleNameEntry,
      handleCompany: this.handleCompany,
      handleDates: this.handleDates,
      handleIdea: this.handleIdea,
      handleComment: this.handleComment,
      children: <Progressbar stages={numberofstages}
        activestage={activeStage}
        handleClick={this.handleStageChange} />,
      changeStage: this.handleStageChange(activeStage + 1),
    }

    switch (activeStage) {
      case 0: return (
        <StageZero {...props} />
      );
      case 1: return (
        <StageOne {...props} />
      );
      case 2: return (
        <StageTwo {...props} />
      );
      case 3: return (
        <StageThree {...props} />
      );
      case 4: return (
        <StageFour {...props} />
      );
      case 5: return (
        <StageFive {...props} />
      );
      case -1: return (
        <Detail clickBack={this.handleStageChange(stages[stages.length - 2])} />
      );
      default:
        return (
          <div className="cousinpage">
            <div className="list">
              {!this.state.sendClicked ?
                <div>
                  <p>✔ {name}</p>
                  <p>✔ {accompanied ? "In Begleitung" : "Alleine"}</p>
                  {dates.map((date, i) => <p key={i} >{date.date}
                  </p>)}
                  <p>✔ {idea === "weggis" ? "An den See" : "In eine Waldhütte"}</p>
                  <p>✔ {comment === "" ? "Kein Kommentar" : comment}</p>
                  <button onClick={this.handleClick} className="btn">Absenden</button>
                </div>
                :
                <div>
                  {this.state.sent ?
                    <div>
                      <p>Vielen Dank fürs Ausfüllen, {this.state.name}</p>
                    </div>
                    :
                    <div>
                      <p>Sending...</p>
                    </div>
                    }
                </div>
              }
            </div>
          </div>
        );
    }

  }
}

export default Cousin;
