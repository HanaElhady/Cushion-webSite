import React from 'react';
import HeroCard from '../../Components/HeroCard/HeroCard';
import './About.css';

export default function About(props) {
    const { 
        id,
        leftComponent, 
        rightComponent, 
        firstParagraph = 'Default first paragraph',
        secondParagraph = 'Default second paragraph',
        goTo = '/default',
        link = 'Default link',
        image = '', 
    } = props;

    const styleImage = { 
        backgroundImage: `url(${image})`, 
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center', 
        backgroundSize: 'cover',
        position: 'absolute', 
        height: '100%',
        width: '60%', 
    };
    
    const renderLeftComponent = () => {
        switch (leftComponent) {
            case 'heroCard':
                return (
                    <div className = "styleHero" style={{ left: '0' }}>                
                        <HeroCard
                            firstParagraph={firstParagraph}
                            secondParagraph={secondParagraph}
                            goTo={goTo}
                            link={link}
                        />
                    </div>
                );
            case 'anotherComponent':
                return <div className="styleImage" style={{ ...styleImage ,left: '0' }} />;
            default:
                return <div>No left component</div>;
        }
    };

    const renderRightComponent = () => {
        switch (rightComponent) {
            case 'heroCard':
                return (
                    <div className = "styleHero" style={{ right: '0' }}>                
                        <HeroCard
                            firstParagraph={firstParagraph}
                            secondParagraph={secondParagraph}
                            goTo={goTo}
                            link={link}
                        />
                    </div>
                );
            case 'anotherComponent':
                return <div className="styleImage" style={{ ...styleImage , right: '0' }} />;
            default:
                return <div>No right component</div>;
        }
    };
    
    return (
        <div id ={id} className="body" style={{ backgroundColor: '#d6bbd3' }}>
            <div className='AboutContainer'>
                {renderLeftComponent()}
                {renderRightComponent()}
            </div>
        </div>
    );
}
