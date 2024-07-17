import './App.css';
import React,{useState} from 'react';
import Login from './Login';
import Logout from './Logout';
import Lifecyclecomponent from './Lifecyclecomponent';

function App() {
  const [isLogin,setIsLogin] = useState(0)
  
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
 
  return (
    <>
    <div className="App">
      <h3>My React Component</h3>
  

    { isLogin ? <Login /> :<Logout /> }
    <button onClick={()=> setIsLogin(!isLogin)}> { isLogin ? "Logout" : "Login" }</button>
    
 <ul>
    {
      user.map((i,index)=>{
        return <li key={index}>{i.uname}</li>
      })
    }

 </ul>
 <Lifecyclecomponent />
    </div>
    
    </>
  );

}

export default App;