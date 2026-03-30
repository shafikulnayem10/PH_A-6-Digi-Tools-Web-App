import './App.css'
import { Suspense , useState } from "react";
import Banner from './components/homepage/banner/Banner'
import Stats from './components/homepage/stats/Stats'
import Navbar from './components/NavBar/Navbar'
import Products from './components/homepage/products/Products';
  import { ToastContainer} from 'react-toastify';
import Steps from './components/homepage/steps/Steps';
import Pricing from './components/homepage/pricing/Pricing';
import CTA from './components/homepage/cta/CTA';
import Footer from './components/homepage/footer/Footer';


const fetchProducts = async () => {
  const res = await fetch("/data.json");
  return res.json();
};
function App() {
  const productsPromise = fetchProducts();
  const [cartItems, setCartItems] = useState([]);
  

  return (
    <>
    <div className="bg-white min-h-screen">
      <Navbar cartCount={cartItems.length} />
      <Banner></Banner>
      <Stats></Stats>
     <Suspense
        fallback={
          <div className="flex justify-center py-20">
            <span className="loading loading-dots loading-xl"></span>
          </div>
        }
      >
        <Products
          productsPromise={productsPromise}
          cartItems={cartItems}
          setCartItems={setCartItems}
        >
          
        </Products>
        
      </Suspense>
   <ToastContainer position="top-right" autoClose={2000} />
         
   
      <Steps></Steps>
      <Pricing></Pricing>
      <CTA></CTA>
      <Footer></Footer>
    </div>
    </>
  )
}

export default App
