import React from 'react'

const Firstcomponent = (props) => {
    const li = props.testarr.map((i)=> <li>{i}</li> )
  return (
    <div>
        <h4>Name is -- {props.name}</h4>
        <ul>
            {li}
        </ul>
        <hr />
        <h4>User Information</h4>
        <p>Name is -- {props.user.name} -- {props.user.id}</p>
    </div>
  )
}
export default Firstcomponent