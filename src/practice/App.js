import React from 'react';
import First from './First'
import Second from './Second'
import { Route } from 'react-router-dom'
class App extends React.Component {
  render() {
    return (
      <div className="App">
          <Route exact path='/' component={First} />
          <Route path='/second' component={Second} />
      </div>
    )
  }
}


export default App;
