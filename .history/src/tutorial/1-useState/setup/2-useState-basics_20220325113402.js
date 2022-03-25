import React, { useState } from 'react';
//useState - function
const UseStateBasics = () => {
  // console.log(useState('hello world'))
  // const value = useState(1)[0]
  // const handler = useState(1)[1]
  // console.log(value, handler)
  const [text, setText] = useState('random title')
  return <React.Fragment>
<h1>{text}</h1> 
   </React.Fragment>;
};

export default UseStateBasics;
