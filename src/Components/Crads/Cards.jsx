import React from 'react'
import { Link } from 'react-router-dom'
import './Cards.css'
import { Link as ScrollLink } from 'react-scroll';

export default function Cards(props) {
  const {imageId , link , goTo} = props;
  return (
    <div className ='card'>
        <div>
        <img src ={imageId} style= {{width: '100%'}} />
        </div>
        <div className='link'>
          <ScrollLink to = {goTo} smooth ={true} duration={1000} style={{
            cursor : "pointer"
        }} >{link} </ScrollLink>
          <ScrollLink to = {goTo} smooth ={true} duration={1000} style={{
            fontSize : 'medium',
            cursor : "pointer"
        }}>{link} </ScrollLink>
        </div>
    </div>
  )
}
