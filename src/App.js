import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Error from './pages/Error/Error';
import ProductsPage from './pages/Products/ProductsPage';
import Product from './pages/Product/Product';
import ScrollToTop from './utility';
import Cart from './pages/Cart/Cart';

function App() {
  return (
    <>
    <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/Product/:id" element={<Product />} />
        <Route path='*' element = {<Error />} />
      </Routes>
    </>
  );
}

export default App;
