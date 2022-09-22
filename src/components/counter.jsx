import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: 0,
        tags:['tag1',,'tag2','tag3']
    };

    // constructor() {
    //     super();
    //     this.handleIncrement = this.handleIncrement().bind(this); 
    // }

    renderTags() {
        if (this.state.tags.length === 0) return <p>There are no tags!</p>;

        return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>;
    };

    //styles = {
    //    fontSize: 10,
    //    fontWeight: "bold"
    //}
    //
    // inside the div we can set the styles in 2 ways like follow:
    // <span style={this.styles} className='badge badge-primary m-2'>{this.formatCount()}</span>
    //<span style={{ fontSize: 10 }} className='badge badge-primary m-2'>{this.formatCount()}</span>

    handleIncrement = product => {
        console.log(product);
        this.setState({count: this.state.count + 1});
    };

    render() { 
        return (
            <div>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button
                    // ToDo: Fix the product error ->
                    onClick={ () => this.handleIncrement(product)}
                    className='btn btn-secondary btn-sm'
                >
                    Increment</button>
                { this.state.tags.length === 0 && "Please create a new tag!"}
                { this.renderTags() }
            </div>
        ); 
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.state.count === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        // return this.state.count === 0 ? 'Zero' : this.state.count;
        const { count } = this.state;
        return count === 0 ? 'Zero' : count;

    }
}

export default Counter;