import React, { Component } from 'react'
import { connect } from 'react-redux'


class Counter extends Component {


    increment = () => {
        this.props.increment();
    }

    decrement = () => {
        this.props.decrement();
    }

    render() {
        return (
            <div>
                <div>{this.props.count}</div>
                <br/>
                <button className="btn btn-primary mr-3" onClick={this.increment}>Increment</button> | 
                <button className="btn btn-danger  ml-3" onClick={this.decrement}>Decrement</button>
            </div>
        )
    }
}

const mapStateToProps = (store) => ({
    count : store.count
})

const mapDispatchToProps = dispatch => {
    return {
      increment: () => dispatch({ type: 'INCREMENT' }),
      decrement: () => dispatch({ type: 'DECREMENT' }),
    }
  }
  

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
