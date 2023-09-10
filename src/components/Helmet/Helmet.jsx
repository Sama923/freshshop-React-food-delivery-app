import React from 'react'
//import { Helmet } from 'react-helmet-async';

const helmet = (props) => {
  document.title = "Freshshop Ordering App" + props.title;
  return (

    <div className='w-100'>{props.children}</div>

  )
}

export default helmet

