import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const [firstName, setFirstName] = useState('')
  const [email, setEmail] = useState('')
 const handleSubmit = (e)=>{
e.preventDefault();
console.log('hello world')
  }
  return <>
  <article>

    <form className='form' onSubmit={handleSubmit}>

      <div className="form-control">

        <label htmlFor="firstName">Name : </label>
        <input type="text" name="firstName" id="firstName" value={firstName}/>
      </div>
      <div className="form-control">

        <label htmlFor="email">Email : </label>
        <input type="text" name="email" id="email" value={email}/>
      </div>
      <button type='submit'>add person</button>
    </form>
  </article>
  
  </>;
};

export default ControlledInputs;
