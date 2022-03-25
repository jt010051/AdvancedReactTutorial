import React, { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson]=useState({
    name:'Peter', 
    age:24, 
    message:'random Message'
  })
  const changeMessage =()=>{
setPerson('hello world')

  }
  return <>
  <h3>{person.name}</h3>
    <h3>{person.age}</h3>
  <h3>{person.message}</h3>
<button className='btn' onClick={changeMessage}>
  change message
</button>
  </>
};

export default UseStateObject;
