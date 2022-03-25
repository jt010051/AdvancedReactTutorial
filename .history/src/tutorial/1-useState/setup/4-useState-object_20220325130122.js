import React, { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson]=useState({
    name:'Peter', 
    age:24, 
    message:'random Message'
  })
  console.log(person)
  return <h2>useState object example</h2>;
};

export default UseStateObject;
