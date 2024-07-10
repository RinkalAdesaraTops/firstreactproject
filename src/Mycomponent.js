import React from 'react'

const Mycomponent = (props) => {
    console.log('component created by me.');
  return (
    <div>
      <h3>My First component --- {props.name}</h3>
    </div>
  )
}

export default Mycomponent
