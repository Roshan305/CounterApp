import React, { Component } from 'react';
class Counter extends Component {
    // state = { 
    //     value: this.props.counter.value
    //  };

    //  handleIncrement = () => {
    //     this.setState({ value: this.state.value + 1 })
    //  };
    
    render() { 
        return (
            <div>
                <span 
                className={this.getBtnClasses()}>{this.formatCount()}
                </span>
                <button 
                onClick={() => this.props.onIncrement(this.props.counter)} 
                className="btn btn-secondary">Increment</button>
                <button 
                onClick={() => this.props.onDelete(this.props.counter.id)} 
                className="btn btn-danger btn-sm m-2">Delete
                </button>
            </div>
        );
    }

    getBtnClasses() {
        let classes = "btn m-2 btn-";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const {value: count} = this.props.counter;
        return count === 0 ? "Zero" : count;

    }
}
 
export default Counter;