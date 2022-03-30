import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  let [text, setText]=useState('')
  setText = ''
  const firstValue = text || 'hello world';
  const secondValue = setText && 'hello world';

  return <>
  <h1>{firstValue}</h1>
    <h1>value : {secondValue}</h1>

  {/* {if (){console.log('hello world')}} */}
  </>;
};

export default ShortCircuit;
