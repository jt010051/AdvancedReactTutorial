import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  let [text, setText]=useState('')
  text ="go go power rangers"
  const firstValue = text || 'hello world';
  const secondValue = text && 'hello world';

  return <>
  <h1>{firstValue}</h1>
    <h1>value : {secondValue}</h1>

  {/* {if (){console.log('hello world')}} */}
  </>;
};

export default ShortCircuit;
