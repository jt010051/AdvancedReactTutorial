import React from 'react';

const ErrorExample = () => {
  let title= 'random title';
  const handleClick = () =>{
console.log(title)

  }
  return (
  <React.Fragment>
<h2>
  {title}
  <button type="button" className='btn' onClick={handleClick}>Change Title</button>
  </h2>


  </React.Fragment>
  )
};

export default ErrorExample;
