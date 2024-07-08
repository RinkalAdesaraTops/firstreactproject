import logo from './logo.svg';
import './App.css';
import Mycomponent from './Mycomponent';
import Firstcomponent from './Firstcomponent';
import ClassComponent from './ClassComponent';

function App() {
  const arr = [10,20,30,40,50]
  const userObj = {
    id:101,
    name:"abc",
    age:25,
    salary:25890
  }
  return (
    <>
    <div>
      <h3>My React Component - Props Example</h3>
      <Firstcomponent name="Test" testarr={arr} user={userObj} />
      <ClassComponent name="Abc" />
    </div>

    </>
  );

}

export default App;
