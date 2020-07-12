import React from 'react';
import Button from './button'

import { Link } from 'react-router-dom'
export default function First(props){
  return (
    <div className="First">
        <p>First Page</p>
        <p>{props.num}</p>
        <Link to='/second'>
              Second
        </Link>
        <br/>
        <Button onClick = {props.handleClick} content="Add One"/>
    </div>
  )
}


