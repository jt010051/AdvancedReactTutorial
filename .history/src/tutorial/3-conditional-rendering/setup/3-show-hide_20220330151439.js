import React, { useState, useEffect } from 'react';

const ShowHide = () => {
  const [show, setshow] =useState(false)
return<>
<button className='btn' onClick={()=> setshow(!show)}>show/hide</button>

</>};

export default ShowHide;
