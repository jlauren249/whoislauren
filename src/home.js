import React from 'react';
import './App.css';
import ProfessionalLauren from './Lauren Jones 3.jpg' 

class Home extends React.Component
{
    constructor(props) {
        super(props);


    }

    render() {
        let showInfo;
        if (this.props.clickedLink === 0)
        {
        showInfo = <div>
            <img src={ProfessionalLauren} className="App-logo" />
        </div>;
        }    

        return(
            <div>
                {showInfo}
            </div>
            
        );
    };
}
export default Home;