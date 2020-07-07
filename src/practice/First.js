import React from 'react';
import Button from './button'

import { Link } from 'react-router-dom'
class First extends React.Component {
  state = {
      count: 0,
  }
  handleClick = () => this.setState({count: this.state.count + 1})
  render() {
    return (
      <div className="First">
          <p>First Page</p>
          <p>{this.state.count}</p>
          <Link to='/second'>
                Second
            </Link>
            <br/>
          <Button onClick = {this.handleClick}/>
      </div>
    )
  }
}


export default First;
