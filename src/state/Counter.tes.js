import React from 'react';
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import Counter from './Counter'

describe(`TheDate Component`, () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Counter />, div);
    ReactDOM.unmountComponentAtNode(div);
  })
  
  it('renders the UI as expected', () => {
    for (let i = 1; i < 5; i++){
    expect(
      renderer.create(<Counter count={123} step = {i}/>).toJSON()
    ).toMatchSnapshot()
    }
  })

})