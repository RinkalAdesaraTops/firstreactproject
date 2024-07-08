import React, { Component } from 'react';

class ClassComponent extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div>
                <h3>My Class component called...</h3>
                <h4>Name is -- {this.props.name}</h4>
            </div>
        );
    }
}

export default ClassComponent;