import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
const { data } = require('./data.js');
const { colors } = require('./colors.js');

class Quotemachine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      randomIndex: 0,
      randomIndexColor: 0,
    };
    this.changeQuote = this.changeQuote.bind(this);
  }
  changeQuote() {
    this.setState({
      randomIndex: Math.floor(Math.random() * data.length),
      randomIndexColor: Math.floor(Math.random() * colors.length),
    });
  }

  render() {
    let currentQuote = data[this.state.randomIndex];
    let colorStyle = colors[this.state.randomIndexColor];

    return (
      <div className = "App">
        <button className = "button" onClick = {this.changeQuote}>New Quote</button>
        <br />
        <h2 style = {{color: colorStyle}}>
          {currentQuote.quote}
        </h2>
        <br />
        <h3 style = {{color: colorStyle}}>
          {currentQuote.source}
        </h3>
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Quotemachine />);
