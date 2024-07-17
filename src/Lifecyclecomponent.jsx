import React, { Component } from 'react'

class Lifecyclecomponent extends Component {
    constructor(){
        super()
        console.log("constructor is called..");
        this.state = {
            color:"red"
        }
    }
    componentDidMount(){
        console.log("component did mount called..");
        setTimeout(()=>{
            this.setState({
                color:"yellow"
            })
        },3000)
    }
    static getDerivedStateFromProps(props,state){
        console.log("color is -- "+state.color);
        console.log("getDerivedStateFromProps func called..");
        return state;
    }
    shouldComponentUpdate(){
        console.log("shouldComponentUpdate func called..");
        return true;
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log("getSnapshotBeforeUpdate called...");
        console.log("prev state color value is -- "+prevState.color);
        return prevState.color
    }
    componentDidUpdate(){
        console.log("Component updated...");
    }

  render() {
    console.log("Render return called");
    return (
      <div>
        <h3 style={{color:this.state.color}}>Hello</h3>
      </div>
    )
  }
}
export default Lifecyclecomponent;
