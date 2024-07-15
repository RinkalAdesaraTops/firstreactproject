import React,{useState} from 'react'

const Countercomponent = () => {
    const [count,setCount] = useState(0)
  return (
    <div>
      <h3>Count is -- {count}</h3>
      <button onClick={()=>setCount(count+1)}>Add</button>
      &nbsp;    
      <button  onClick={()=>setCount(count-1)}> Minus</button>
    </div>
  )
}

export default Countercomponent
