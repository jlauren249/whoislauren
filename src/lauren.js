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
        showInfo = 
            <img src={lauren} className="App-logo"/>;
        }    
        console.log('the clickedLink is ' + this.props.clickedLink)

        return(
            <div className='Content1'>
                {showInfo}
            </div>
            
        );
    };
}
export default Lauren;