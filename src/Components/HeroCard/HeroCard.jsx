import React from 'react'
import { Link } from 'react-router-dom';
import './HeroCard.css'
import { Link as ScrollLink } from 'react-scroll';

export default function HeroCard(props) {
    const {firstParagraph , secondParagraph , goTo , link} = props ;
  return (
    <div className="Hero-Card">
    <h1 style ={{
        fontSize : 'medium'
    }}>{firstParagraph}</h1>
    <h1>{secondParagraph}</h1>
    <ScrollLink to={goTo} smooth={true} duration={1000}  > {link} </ScrollLink>
    </div>
  )
}
