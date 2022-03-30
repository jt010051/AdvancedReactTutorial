import React, { useState, useEffect } from 'react';

const ShowHide = () => {
  const [show, setshow] =useState(false)
return<>
<button className='btn' onClick={()=> setshow(!show)}>show/hide</button>
{show && <Item />}

</>};


const Item =() =>{

  return(
     <div style={{marginTop: '2rem'}}>
    <h1>window</h1>
    <h2>size : </h2>
  </div>
  );
}
export default ShowHide;
