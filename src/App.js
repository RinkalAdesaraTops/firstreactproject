import './App.css';
import ClassComponent from './ClassComponent';
import Mycomponent from './Mycomponent';

function App() {
  let a=10;
  let name = "Test";
  let arr=[10,20,30,40,50]
  let obj = {
    "id":101,
    "name":"test",
    "age":25,
    "salary":25000
  }
  let user = [
    {
      "uid":101,
      "uname":"dsfgsd"
    },
    {
      "uid":102,
      "uname":"test" 
    },
    {
      "uid":103,
      "uname":"abc"
    }
  ]
  let st = {
    color:"maroon",
    backgroundColor:"yellowgreen"
  }
  return (
    <>
    <div className="App">
      <h3>My React Component</h3>
      <ClassComponent name="AbcPqr"/>

      {/* <Mycomponent name="Test"/> */}

    </div>
    
    </>
  );

}

export default App;