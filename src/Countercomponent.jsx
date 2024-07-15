import React,{useState} from 'react'

const Countercomponent = (props) => {
    const [count,setCount] = useState(0)
    //Hooks
  return (
    <div>
      <h3>Count is -- {count}</h3>
      <button onClick={()=>setCount(count+1)}>Add</button>
      &nbsp;    
      <button  onClick={()=>setCount(count-1)}> Minus</button>

      {props.children}
    </div>
  )
}

export default Countercomponent
