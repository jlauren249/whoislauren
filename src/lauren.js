import React from 'react';
import './App.css';
import lauren from './lauren.jpg' 

class Lauren extends React.Component
{
    constructor(props) {
        super(props);


    }

    render() {
        let showInfo;
        if (this.props.clickedLink === 2)
        {
        showInfo = <div>
            <img src={lauren} className="App-logo"/>
            <div>
                About Me (non work related)
                Skills
                Work Experience
                Projects
            </div>
        </div>;
        }    
        console.log('the clickedLink is ' + this.props.clickedLink)

        return(
            <div>
                {showInfo}
            </div>
            
        );
    };
}
export default Lauren;