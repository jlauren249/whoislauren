import React from 'react';
import marty from './marty.jpg';
import Marty from './marty.js'
import Lauren from './lauren.js'
import './App.css';

class App extends React.Component
{
  constructor(props)
  {
    super(props);

    this.state = {
      clickedLink: 0
    }

    this.setLink = this.setLink.bind(this);
  }

 

  setLink(e, id)
  {
    this.setState({clickedLink: id})
  };

  render() {
    let header;
    if (this.state.clickedLink === 0)
    {
      header = <div>
        <div>
        <img src={marty} className="App-logo" alt="logo" />
        <p>
          I'm Lauren. That's Marty (he always makes a great first impression).
          <br></br>
          Learn more about us by clicking!
        </p>
      </div>
    </div>
    }
  return (
    <body className="Body">
      <div className="App">
        {header}
        <Marty clickedLink={this.state.clickedLink}/>
        <Lauren clickedLink={this.state.clickedLink}/>
      </div>
      <div className="App-Nav">
      <button className="appbutton" onClick={(e) => this.setLink(e,0)} >Home</button>
        <button className="appbutton" onClick={(e) => this.setLink(e,1)} >Marty</button>
        <button className="appbutton" onClick={(e) => this.setLink(e,2)} >Lauren</button>
      </div>
    </body>
  );
}
}

export default App;
