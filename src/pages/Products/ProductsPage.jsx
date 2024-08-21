import './ProductsPage.css';
import React from 'react';
import Products from '../../Components/Products/Products';
import NavBar from '../../Components/navBar/NavBar';
import AdvantagesSection from '../../Components/advantagesSection/AdvantagesSection';
import Footer from '../../Components/Footer/Footer';
import { productsData}  from './productsData'; 

export default function ProductsPage() {
    return (
        <div >
            <div id ="navBarSection"></div>
            <div id ="ProductsSectionPage"></div>
            <NavBar isPage={true}/>
            <div className="sectionProducts">
                <h1>Products</h1>
            </div>
            <div className="productsContents">
          <Products productsData={productsData} />
          </div>
          <AdvantagesSection />
          <Footer isPage={true} />
        </div>
    );
}
