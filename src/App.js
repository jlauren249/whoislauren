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
      clickedLink: 0,
      showWelcome: true
    }

    this.setLink = this.setLink.bind(this);
    this.setWelcome = this.setWelcome.bind(this);
  }

  componentDidMount() {
    setTimeout(() => {this.setWelcome()}, 4500)
  };

  setLink(e, id)
  {
    this.setState({clickedLink: id})
  };

  setWelcome()
  {
    this.setState({showWelcome: !this.state.showWelcome})
  };

  render() {
    let appDisplay;
    if (this.state.showWelcome)
    {
      appDisplay = 
      <div className='Welcome'>
      <img src={marty} className="App-logo" alt="logo" />
        <p>
          I'm Lauren. This is Marty.
          <br></br>
          I like to let him make the first impression!
        </p>
      </div>
    }
    else{
      appDisplay = 
      <div className="App">
        <div className="Content">
          <div>
            Placeholder
          </div>
          <Marty clickedLink={this.state.clickedLink}/>
          <Lauren clickedLink={this.state.clickedLink}/>
        </div>
        <div className="App-Nav">
          <button className="appbutton" onClick={(e) => this.setLink(e,0)} >Home</button>
          <button className="appbutton" onClick={(e) => this.setLink(e,1)} >Marty</button>
          <button className="appbutton" onClick={(e) => this.setLink(e,2)} >Lauren</button>
        </div>
      </div>
    }
    
  return (
    <body className="Body" >
     {appDisplay}
    </body>
  );
}
}

export default App;
