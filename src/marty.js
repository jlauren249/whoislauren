import React from 'react';
import './App.css';
import marty from './marty.jpg'

class Marty extends React.Component
{
    constructor(props) {
        super(props);


    }

    render() {
        let showInfo;
        if (this.props.clickedLink === 1)
        {
        showInfo = <div>
            <img src={marty} className="App-logo"/>
            <div>
                Breed info(API that can connect or something to embed?)
                Stories and pictures about marty
                Link back to my info
            </div>
        </div>
        }    
        console.log('the clickedLink is ' + this.props.clickedLink)

        return(
            <div>
                {showInfo}
            </div>
        );
    };
}
export default Marty;