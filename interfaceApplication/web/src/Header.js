import React from 'react';

function Header(props) { //Receve proprieties 
  //Every time we want to use some variable inside of HTML, use {variable}
  return <h1>{props.title}</h1> 
}

export default Header;