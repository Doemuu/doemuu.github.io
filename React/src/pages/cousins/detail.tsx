import React from 'react';

import "./detail.scss";

interface DetailProps {

}

interface DetailState {
}

class Detail extends React.Component<DetailProps, DetailState>{
  constructor(props: DetailProps) {
    super(props);
  }

  render() {
    return (
      <div className="details">
        <h1>Details</h1>
        <div className="ideabtns">
        <a className="btn">Idee 1</a>
        <a className="btn">Idee 2</a>
        </div>
      </div>
    );
  }

}

export default Detail;
