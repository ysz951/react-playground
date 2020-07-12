import React from 'react';

export default function Button(props) {

  return (
    <button onClick = {() => props.onClick()}>
        {props.content}
    </button>
  );
}
Button.defaultProps = {
    onClick: () => {},
}