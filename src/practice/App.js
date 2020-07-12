import React from 'react';
import First from './First'
import Second from './Second'
import { Route } from 'react-router-dom'
class App extends React.Component {
  state = {
    firstCount: 0,
    secondCount: 100,
  }
  handlePlus = () => this.setState({firstCount: this.state.firstCount + 1})
  handleMinus = () => this.setState({secondCount: this.state.secondCount - 1})
  render() {
    return (
      <div className="App">
          <Route 
            exact path="/"
            render ={() => <First handleClick={this.handlePlus} num={this.state.firstCount}/>}
          />
          {/* <Route exact path='/' component={First} /> */}
          <Route path='/second' component={Second} />
      </div>
    )
  }
}


export default App;
