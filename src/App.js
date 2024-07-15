import './App.css';
import React,{useState} from 'react';
import ClassComponent from './ClassComponent';
import Countercomponent from './Countercomponent';
import Firstcomponent from './Firstcomponent';
import Login from './Login';
import Logout from './Logout';

function App() {
  let a=10;
  let name = "Test";
  let arr=[10,20,30,40,50]
  const [isLogin,setIsLogin] = useState(0)
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
      {/* <ClassComponent name="AbcPqr"/> */}

      {/* <Mycomponent name="Test"/> */}
<Countercomponent />

    { isLogin ? <Login /> :<Logout /> }
    <button onClick={()=> setIsLogin(!isLogin)}> { isLogin ? "Logout" : "Login" }</button>
 
 <ul>
    {
      user.map((i,index)=>{
        return <li key={index}>{i.uname}</li>
      })
    }

 </ul>
    </div>
    
    </>
  );

}

export default App;