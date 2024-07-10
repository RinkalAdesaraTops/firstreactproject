import './App.css';
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
      <h4>A is -- {a}</h4>
      <h4 style={st}>Name is -- {name}</h4>
      <h4>Addition is -- {10+20}</h4>
      <ul>
          {
            arr.map((i,index)=>{
              return <li key={index}>{i}</li> 
            })
          }
      </ul>
      <h5 style={{color:"red",backgroundColor:"yellow"}}>Name is -- {obj.name}</h5>
      <hr />
      <table border={'2'} align='center' bgcolor='red'>
        <tr>
          <th>Id</th>
          <th>Name</th>
        </tr>
        {
          user.map((i)=>{
              return (
                <tr>
                  <td>{i.uid}</td>
                  <td>{i.uname}</td>

                </tr>
              )
          })
        }
      </table>
      <Mycomponent />
    </div>
    <div>
      dsfbsdfbjh
    </div>
    </>
  );

}

export default App;