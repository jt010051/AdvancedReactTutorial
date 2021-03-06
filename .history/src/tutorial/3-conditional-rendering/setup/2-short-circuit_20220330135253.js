import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText]=useState('')
 const[isError, setIsError]=useState(false)
  // const firstValue = text || 'hello world';
  // const secondValue = text && 'hello world';
  return <>
  {/* <h1>{firstValue}</h1>
    <h1>value : {secondValue}</h1> */}

  {/* {if (){console.log('hello world')}} */}
  <h1>{text || 'john doe'}</h1>
  <button className='btn'>toggle error</button>
  {text && <h1>hello world</h1> }
{isError && <h1>Error</h1> }
  </>;
};

export default ShortCircuit;
