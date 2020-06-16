import React from 'react';

import "./detail.scss";

interface DetailProps {
  clickBack: (() => void);
}

const Detail = (props: DetailProps) => {
  const [selectedIdea, setSelectedIdea] = React.useState(1);

  return (
    <div className="details">
      <h1>Details</h1>
      <div className="ideabtns">
        <a className="button" onClick={e => setSelectedIdea(1)}>See</a>
        <a className="button" onClick={e => setSelectedIdea(2)}>Waldhütte</a>
      </div>
      {selectedIdea === 1 ?
        <div>
          <h1>An den See</h1>
          <p>Am östlichen Ufer des Vierwaldstättersees (In Weggis LU) liegt eine Feuerstelle direkt am Strand. Dort könnten wir uns einen ruhigen, friedlichen Grilltag machen.</p>
          <div className="vergleich">
            <div className="vorteile">
              <h2>Vorteile</h2>
              <div>
                <ul>
                  <li>Schöne Aussicht</li>
                  <li>Kostenlos</li>
                  <li>Bademöglichkeit</li>
                </ul>
              </div>
            </div>
            <div className="nachteile">
              <h2>Nachteile</h2>
              <div>
                <ul>
                  <li>Wetterabhängig</li>
                  <li>Mobiliar notwendig</li>
                  <li>Weitentfernter Parkplatz</li>
                  <li>Keine Toiletten</li>
                  <li>Öffentlich</li>
                </ul>
              </div>
            </div>
          </div>
          <a className="link" href="https://www.schweizerfeuerstellen.ch/roehrli-weggis-zentralschweiz">www.schweizerfeuerstellen.ch</a>
          <br/>
        </div>
        :
        <div>
          <h1>In eine Waldhütte</h1>
          <p>Die zweite Möglichkeit besteht darin, eine Waldhütte zu mieten. Diese Variante ist bei jedem Wetter durchführbar. Der Standort ist zurzeit jedoch unklar. Zuerst muss ein Datum festgelegt werden, um die Verfügbarkeit der Hütten zu prüfen.
          Einige Daten (z.B. 1. August) könnten dadurch schwierig werden.</p>
          <div className="vergleich">
            <div className="vorteile">
              <h2>Vorteile</h2>
              <div>
                <ul>
                  <li>Wetterunabhängig</li>
                  <li>Einrichtungen vorhanden</li>
                  <li>Abgeschottet</li>
                  <li>Nahe Parkmöglichkeiten</li>
                </ul>
              </div>
            </div>
            <div className="nachteile">
              <h2>Nachteile</h2>
              <div>
                <ul>
                  <li>Mietkosten ca.200-300ChF </li>
                  <li>Möglicherweise weite Anreise</li>
                  <li>Frühzeitige Reservierung</li>
                  <li>Keine Bademöglichkeit</li>
                </ul>
              </div>
            </div>
          </div>
          <a className="link" href="https://www.schweizerfeuerstellen.ch/roehrli-weggis-zentralschweiz">www.schweizerfeuerstellen.ch</a>
          <br/>
        </div>
      }
      <br/>
        <a className="back" onClick={props.clickBack}>Zurück</a>
    </div>
  );
};

export default Detail;
