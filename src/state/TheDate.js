import React from 'react';

class TheDate extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {datetime: new Date()}
        console.log('constructor')
        // this.state = {
        //     foo: 'foo',
        //     hello: 'Hello, world!',
        //     list: [1, 2, 3],
        //     obj: { nested: 'object', yes: true },
        // }
    }
    componentDidMount() {
        console.log('componentDidMount')
        this.interval = setInterval(() => {
          console.log('setInterval')
          this.setState({
            datetime: new Date()
          })
        }, 1000)
    }
    componentWillUnmount() {
        clearInterval(this.interval)
    }
    render() {
        console.log('render')
        return (
            // <div>{this.state.hello}</div>
        <div>{this.state.datetime.toLocaleString()}</div>
        )
    }
}

export default TheDate