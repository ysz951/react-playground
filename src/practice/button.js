import React from 'react';

export default function Button(props) {

  return (
    <button onClick = {() => props.onClick()}>
        123
        </button>
  );
}
Button.defaultProps = {
    onClick: () => {},
}