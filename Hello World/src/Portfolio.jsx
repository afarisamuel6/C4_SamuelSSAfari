import React from "react";

const Portfolio = ()=> {
  const name = 'Samuel Sadat Saeed Afari';  
  const education = 'MBA, Management Information System';
  const profession = 'Junior Web Developer , Azubi Africa';  
  return (
    <>
    <h1>{name}</h1>
    <h2>{education}</h2>
    <p>{profession}</p>
    <ul>
      <li>Html & Css</li>
      <li>Javascript</li>
      <li>React</li>
    </ul>
    </>
  )
}

export default Portfolio
