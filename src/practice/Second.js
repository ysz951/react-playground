import React from 'react';
import Button from './button'
import { Link } from 'react-router-dom'
class Second extends React.Component {
  state = {
      count: 100,
  }
  handleClick = () => this.setState({count: this.state.count - 1})
  render() {
    return (
      <div className="Second">
          <p>Second Page</p>
            <p>{this.state.count}</p>
            <Link to='/'>
                First
            </Link>
            <br/>
            <Button onClick = {this.handleClick}/>
      </div>
    )
  }
}


export default Second;
