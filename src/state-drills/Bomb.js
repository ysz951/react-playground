import React from 'react';

class Bomb extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {count: 0, message: 'tick'}
   
        // this.state = {
        //     foo: 'foo',
        //     hello: 'Hello, world!',
        //     list: [1, 2, 3],
        //     obj: { nested: 'object', yes: true },
        // }
    }
    componentDidMount() {

        this.interval = setInterval(() => {
            this.setState({
                count: this.state.count + 1
              })
            if (this.state.count >= 8){
                this.setState({message: 'Bomb'})
                clearInterval(this.interval)

            }
            else{
                if (this.state.count % 2 === 0){
                    this.setState({message: 'tick'})
                }
                else{
                    this.setState({message:'tock'})
                }
            }
        //   console.log('setInterval')
            
          
        }, 1000)
    }
    componentWillUnmount() {
        clearInterval(this.interval)
    }
    render() {
        // console.log('render')
        return (
        <p>{this.state.message}</p>
            // <div>{this.state.hello}</div>
        // <div>{this.state.datetime.toLocaleString()}</div>
        )
    }
}

export default Bomb