import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  return <>
  <article>

    <form className='form'>

      <div className="form-control">

        <label htmlFor="firstName">Name : </label>
        <input type="text" name="firstName" id="firstName" />
      </div>
      <div className="form-control">

        <label htmlFor="email">Email : </label>
        <input type="text" name="email" id="email" />
      </div>
    </form>
  </article>
  
  </>;
};

export default ControlledInputs;
