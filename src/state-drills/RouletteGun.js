import React from 'react';

class RouletteGun extends React.Component {
    static defaultProps = {
        bulletInChamber: 3
      };
      
  
    state = {
        chamber: null,
        spinningTheChamber: false 
    }
    handleButtonClick = () => {
        this.setState({spinningTheChamber: true})
        this.timeout = setTimeout(() => this.updateState(), 2000)
    }

    updateState() {
        this.setState({chamber: Math.ceil(Math.random() * 3), spinningTheChamber: false});
    }
    
    componentWillUnmount() {
        clearTimeout(this.timeout)
    }

    renderDisplay(){
        if (this.state.spinningTheChamber){
            return 'spinning the chamber and pulling the trigger!'
        }
        else if (this.state.chamber === this.props.bulletInChamber){
            return 'BANG'
        }
        else{
            return `you're safe`
        }
    }
    
    render() {
        return (
            <div>
              <p>{this.renderDisplay()}</p>
              <button onClick= {this.handleButtonClick}>
                Pull the trigger!
              </button>
            </div>
          )
    }
}

export default RouletteGun