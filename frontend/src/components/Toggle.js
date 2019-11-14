import React, { Component } from 'react';



class Toggle extends Component {
    constructor(props){
        super(props);
        this.state={
            textDisplay: false,
        }}

        ToggleButton(){
            this.setState((currentState) => ({
                textDisplay: !currentState.textDisplay, 
            }));
     }

    render(){
        return(
            <div>
                <button onClick={ this.props.filterToggle }>
                {this.props.text}
                  
                </button>
            </div>
        )
    }
}

export default Toggle;