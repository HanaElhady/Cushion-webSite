import React, { useState } from 'react'
import './SeasonCollection.css'
import HeroCard from '../HeroCard/HeroCard';
import pinkDesigner from '../../img/PinkDesigner.jpg'
import funPillow from '../../img/background.jpg'


export default function () {
  const [button , setButton] = useState(false);

  const image = button ?  pinkDesigner : funPillow ;
  const heroCardRender = () => {
    return (
      <HeroCard
        firstParagraph={'NEW'}
        secondParagraph={'Spring Cushion Collection 2019'}
        goTo={'ProductsSection'}
        link={'BUY NOW'}
      />
    );
  };
  
  const designerRender = () => {
    return (
      <HeroCard
        firstParagraph={'ABOUT ME '}
        secondParagraph={"I'm a trendy Cushion Designer"}
        goTo={'aboutSection'}
        link={'LEARN MORE'}
      />
    );
  };

  const ToBeRenderd = button ? designerRender() : heroCardRender() ;

  return (
    <div className='body' style ={{
      background: 'linear-gradient(to bottom , #c9adc6 50% , #d6bbd3 50% )'
    }}>
      <div className='Button'>
         <button onClick = {()=>{
          setButton(!button)
         } } >&#8668;</button>
         <button  onClick = {()=>{
          setButton(!button)
         } }> &#8669;</button>
  </div>
        <div className="container">
          <div className='leftSide' style ={{
             background: `url(${image}) no-repeat center/cover`
          }}>
            </div>
           
              <div className="rightSide">
           {ToBeRenderd}
           </div>
       
        </div>
    </div>
  )
}
