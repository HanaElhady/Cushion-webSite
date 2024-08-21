import React, { useEffect } from 'react'
import SeasonCollection from '../../Components/SeasonCollection/SeasonCollection'
import './Home.css'
import Cards from '../../Components/Crads/Cards'
import designerCard from '../../img/designerCard.png'
import funPillow from '../../img/fun-colored-pillows.png'
import keyboard from '../../img/keyboard.png'
import About from '../About/About'
import Gallery from '../../Components/Gallery/Gallery'
import sofa from '../../img/sofa.jpg'
import zigzagCushion from '../../img/blue-caution-in-nature.jpg'
import bedroom from '../../img//pink Cushion/first.jpg'

import Products from '../../Components/Products/Products'
import designer from '../../img/designer.png'
import NavBar from '../../Components/navBar/NavBar'
import Form from '../../Components/Form/Form'
import NewsLetter from '../../Components/newsLetter/NewsLetter'
import AdvantagesSection from '../../Components/advantagesSection/AdvantagesSection'
import Footer from '../../Components/Footer/Footer'
import { Link as ScrollLink } from 'react-scroll'
import { useLocation } from 'react-router-dom';
import {productsData} from '../../Components/Products/productsData'


export default function Home() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);
  return (
    <div >
      <div id="navBarSection"></div>
      <NavBar />
      <SeasonCollection />
      <br />
      <div className='section'>
        <div >
        <h1 style={{
          color: '#c9adc6', 
          fontSize: '18px',
          }}>
            I'M A CUSHION DESIGNER</h1>
          </div>
          <div className='sectionParag'>
          <p>Based in San Francisco, California I design trendy and fashion Cushions,
        since I have memory I always had a tendency to design and illustration.</p>
        
        </div>
        <div>
        <ScrollLink
          to="aboutSection"
          smooth={true}
          duration={1000} >
        <button>LEARN MORE</button>
        </ScrollLink>
        </div>
        <br />
        <div className="cards">
        <Cards imageId ={designerCard} link ={'About me'} goTo ={'aboutSection'}/>
        <Cards  imageId ={funPillow} link ={'My products'} goTo = {'ProductsSection'} />
        <Cards  imageId ={keyboard} link ={'Contact me'} goTo = {'contactSection'} />
        </div>
        </div>
        <div id ='aboutSection'></div>
        <About 
        rightComponent="anotherComponent" 
        leftComponent="heroCard" 
        firstParagraph={'ABOUT ME '}
        secondParagraph={"I'm a trendy Cushion Designer"}
        goTo={'/About'}
        link={'LEARN MORE'}
        image = {designer}
        />
        <br />
        <br />
        <Gallery  
        title ={'BEGINNINGS'}
        paragraph1 = {'Credibly innovate granular internal or organic sources whereas high standards in web-readiness.Energistically scale future-proof core competencies vis-a-vis impactful experiences. '}
        paragraph2 ={'Dramatically synthesize integrated schemas. with optimal networks.'}
        paragraph3 = {''}
        image = {sofa}
        />
        <Gallery 
        title ={'carrer'}
        paragraph1={'Collaboratively administrate turnkey channels whereas virtual e-tailers.'} 
        paragraph2 ={'Objectively seize scalable metrics whereas proactive e-services seamlessly empower fully researched growth strategies.'} 
        paragraph3 ={'And interoperable internal or “organic” sources.'}
        image = {zigzagCushion}
        leftComponent = 'img'
        rightComponent = 'parag'
        />
        <Gallery 
        title = {'products'}
        paragraph1 ={'Seamlessly empower fully researched growth strategies and interoperable internal or “organic” sources.'}
        paragraph2 = {'Credibly innovate granular internal or “organic” sources whereas high standards in web-readiness.'}
        paragraph3 ={'Energistically scale future-proof core competence'}
        image = {bedroom}
        isLast = {true}
        />

  <About id = 'aboutSection' 
    rightComponent="heroCard" 
    leftComponent="anotherComponent" 
    firstParagraph={'New'}
    secondParagraph={"Spring Cushion Collection 2019"}
    goTo={'ProductsSection'}
    link={'BUY NOW'}
    image = {funPillow}
/>
<br /><br /> <br /> <br />
<div id = 'ProductsSection'></div>
<Products productsData={productsData}/>
<div id ='contactSection'></div>
<Form />
<NewsLetter />
<br /><br /> <br /> <br />
<AdvantagesSection />
<Footer />
</div>

    
  )
}
