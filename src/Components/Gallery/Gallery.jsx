import React from 'react';
import './Gallery.css';

export default function Gallery(props) {
    const { 
        title, 
        paragraph1, 
        paragraph2, 
        paragraph3, 
        image, 
        isLast, 
        leftComponent, 
        rightComponent 
    } = props;

    const styleImg = { 
        backgroundImage: `url(${image})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover'
    };

    const renderParag = () => (
        <div className="paragraphs">
            <div className='title'>
                <h1>{title}</h1>
            </div>
            <div>{paragraph1}</div>
            <div>{paragraph2}</div>
            <div>{paragraph3}</div>
        </div>
    );

    const renderImg = () => (
        <div className='galleryImageSide'>
        <div className="galleryImage" style={styleImg}></div>
        </div>
    );

    const renderLeftComponent = () => {
        switch (leftComponent) {
            case 'img':
                return (
                    <div className='galleryImageSide' style ={{
                        height:"100%"
                    }}>
                    <div className="galleryImage" style={styleImg}></div>
                    </div>)
            case 'parag':
                return  renderParag();
            default:
                return renderParag();
        }
    };

    const renderRightComponent = () => {
        switch (rightComponent) {
            case 'img':
                return renderImg();
            case 'parag':
                return ( <div className='column'>
                        
                <div>
                    {renderParag()}
                </div>
                <div className="section galleryButton">
                    <button>LEARN MORE</button>
                </div>
            </div>
               )
            default:
                return renderImg();
        }
    };

    return (
        <div className='galleryContainer'>
            <br />
            <div className='galleryContent'>
                <div className='galleryleftSide'>
                    {renderLeftComponent()}
                    </div>
                    <div className='galleryRightSide' >
                    {renderRightComponent()}
                    </div>
             
            </div>
            <br />
            {!isLast && (
                <hr
                    style={{
                        color: '#81667f',
                        display: 'block',
                        width: '95%',
                      
                    }}
                />
            )}
        </div>
    );
}
