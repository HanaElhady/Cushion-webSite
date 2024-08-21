import React from 'react';
import { productsData } from '../Products/productsData';
import Products from '../Products/Products';
import './RelatedProducts.css';
import '../Products/Products.css';
import { Link, useParams } from 'react-router-dom';

export default function RelatedProducts() {

  const { id } = useParams();
  let start = id - 2; 
  let end = id ; 

  if (id == 1) {
    start = 1
    end = 2
  } 
  else if(id == 5) {
    start = id -3
  }
  else if (id == 6) {
    start = 0 ;
    end = 1;
  }

  start = Math.max(start, 0);
  end = Math.min(end, productsData.length - 1);


  const products = productsData.slice(start, end +2 )
  const filteredProducts = products.filter(product => product.id != (id));

  console.log(products)
  console.log(id)
  console.log(filteredProducts)


  return (
    <div className="relatedProducts">
      <div className='relatedTitle'>
        <h1 style={{ color: "#81667f" }}>Related Products</h1>
      </div>
      <Products productsData={filteredProducts} />
   <div className='linkStyle'>
    <Link to='/products' style ={{
        textDecoration : "none" ,
        color : "#b08ead" ,
        fontSize : "larger" ,
    
    }} >back to products</Link>
    </div>
</div>

)}
  
