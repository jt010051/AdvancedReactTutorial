import React, { useState } from 'react';
//useState - function
const UseStateBasics = () => {
  // console.log(useState('hello world'))
  // const value = useState(1)[0]
  // const handler = useState(1)[1]
  // console.log(value, handler)

  const [text, setText] = useState('random title')
    const handleClick = () =>{

setText('helo world')
    
  }
  return (
  <React.Fragment>
<h1>{text}</h1> 
<button className='btn' onClick={handleCLick}>
  change title
</button>
   </React.Fragment>;
  );
};

export default UseStateBasics;
