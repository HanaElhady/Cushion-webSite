import './Product.css';
import { Link, useParams } from 'react-router-dom';
import React, { useState } from 'react';
import { productsData } from '../../pages/Products/productsData'; 
import NavBar from '../../Components/navBar/NavBar';
import AdvantagesSection from '../../Components/advantagesSection/AdvantagesSection';
import Footer from '../../Components/Footer/Footer';
import { useDispatch } from 'react-redux';
import * as actions from '../../Redux/action'
import RelatedProducts from '../../Components/relatedProducts/RelatedProducts';


export default function Product() {
     const dispatch = useDispatch();
     const { id } = useParams();
     const product = productsData.find(product => product.id === id);
     const [currentIndex, setCurrentIndex] = useState(0);
     const productImage = productsData[id-1]; 

    const [addQuantity, setAddQuantity] = useState(1);

     const handleAddQuantityChange = (event) => {
        setAddQuantity(Number(event.target.value));
     };
     
     const addToCartAction = () => {
        dispatch(actions.cushionAdded(product, addQuantity));
      };

   

    const handlePrevClick = () => {
        setCurrentIndex(prevIndex => (prevIndex === 0 ? product.images.length - 1 : prevIndex - 1));
    };

    const handleNextClick = () => {
        setCurrentIndex(prevIndex => (prevIndex === product.images.length - 1 ? 0 : prevIndex + 1));
    };


    if (!product) {
        return <div>Product not found</div>;
    }

    const { title, image, price, description, Shipping, images } = product;

    return (
        <>
        <div id="navBarSection"></div>
            <NavBar isPage = {true} />

            <div className="body" style={{
                background: 'linear-gradient(to bottom, #c9adc6 50%, #d6bbd3 50%)'
            }}>
                <div className="showProduct">
                    <div className='product_image'>
                        <div style={{
                            background: `url(${productImage.images[currentIndex]}) no-repeat center/cover`,
                 
                        }} />
                        <div className='btn'>
                            <div>
                            <button onClick={handlePrevClick} >&#x21e0;</button>
                            </div>
                            <div>
                            <button onClick={handleNextClick}>&#8674;</button>
                            </div>
                        </div>
                    </div>
                    <div className="addToCart">
                        <h1>{title}</h1>
                        <h1>$ {price} USD</h1>
                        <div className="quantityBox">
                            <label >Quantity</label>
                            <input className="label" type="number" cols="1" rows="1" value ={addQuantity} onChange = {handleAddQuantityChange} min="1" />
                        </div>
                        <div className="AddToBtn">
                            <button onClick={addToCartAction} >Add to Cart</button>
                        </div>
                    </div>
                </div>
                </div>
                <br /><br /><br />
                <div className="paragraphs paragraphsAdj" style ={{
                    padding:"15px"
                }}>
                    <div>
                        <h1>Description</h1>
                    </div>
                    <div>
                        <p>{description}</p>
                    </div>
                    <div>
                        <h1>Shipping</h1>
                    </div>
                    <div>
                        <p>{Shipping}</p>
                    </div>
                    <div>
                        <h1>Images</h1>
                    </div>
                    <div className = "imgs">
                        {images && images.map((img, index) => (
                            <img key={index} src={img} alt={`${title} image ${index}`} />
                        ))}
                    </div>
                </div>
                <br /><br /><br />
                <RelatedProducts />
            <AdvantagesSection />
            <Footer isPage={true} />
        </>
    );
}
