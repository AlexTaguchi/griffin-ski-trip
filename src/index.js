import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

var style1 = {
    height: "200px",
    backgroundImage: "url(https://isa-lyon.fr/wp-content/uploads/2016/06/MIT-Griffin.Robert.jpg)"
};

var style2 = {
    color: "purple",
    fontSize: 50,
    textAlign: "center",
};

var style3 = {
    textAlign: "center"
}

class Welcome extends React.Component {
  render() {
    return (
        <div>
            <div style={ style1 } ></div>
            <div style={ style2 }>
                Griffin Group Ski Trip
            </div>
            <h2 style={ style3 }>Waterville Valley Resort, 1 Ski Area Rd, Waterville Valley, NH 03215</h2>
            <h2 style={ style3 }>February 11-12, 2019</h2>
            <br></br>
            <h3>Attendees: Bob, Kong, Zhiwei, Christy, Alex, Nikki, Brian, Michael, Salima</h3>
            <h3>Transportation: Bob's car and Michael's car (THANK YOU!)</h3>
            <h3>Hotel: Silver Fox Inn, 70 Packard's Rd, Waterville Valley, NH 03215 (breakfast included)</h3>
            <h3>Cost:</h3>
            <ul>Lift tickets: $39 per day ($29 for seniors)</ul>
            <ul>Skis + helmet: $61 per day</ul>
            <ul>Hotel: $32.5 ($129 for Bob)</ul>
            <h3>Total:</h3>
            <ul>$232.5 - Ski and helmet included</ul>
            <ul>$110.5 - Ski and helmet not included</ul>
            <ul>$187.0 - Bob</ul>
            <h3>Notes: The price covers your transportation, hotel, breakfast, skis, helmet, and lift ticket, but does NOT cover snow goggles, gloves, pants, and jacket, or gas costs.</h3>
      </div>
    )
  }
}

ReactDOM.render(
  <Welcome/>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();