import React, { Component } from 'react';

class ClassComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            name:this.props.name,
            id:101,
            course:"MERNstack",
            count:0
        }
    }
    render() {
        const changeData =()=>{
            this.setState({
                id:111
            })
        }
        return (
            <div>
                <h3>My Class component called...</h3>
                <h4>Name is -- {this.props.name}</h4>
                <h4>Id-Name-Course is ---- {this.state.id} ---  {this.state.name}</h4>
                <button onClick={changeData}>Change Id</button> <br />
                <input type="text" name="data" id="data" value="dfg" onChange={(e)=>this.setState({name:e.target.value})}  />
            </div>
        );
    }
}

export default ClassComponent;