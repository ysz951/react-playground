import React from 'react';
class RouletteGun extends React.Component {
    static defaultProps = {
        bulletInChamber: 3
      };

    constructor(props) {
        super(props)
        this.state = {
            chamber: null,
            spinningTheChamber: false 
        }
      }
    componentWillUnmount() {
    clearTimeout(this.timeout)
    }
    handleButtonClick = () => {
        
        this.setState({spinningTheChamber: true})
        this.timeout = setTimeout(() => {
            this.setState({chamber: Math.ceil(Math.random() * 3), spinningTheChamber: false})
        }, 2000)

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