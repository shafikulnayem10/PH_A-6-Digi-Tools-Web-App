import './App.css'
import { Suspense} from "react";
import Banner from './components/homepage/banner/Banner'
import Stats from './components/homepage/stats/Stats'
import Navbar from './components/NavBar/Navbar'
import Products from './components/homepage/products/Products';


const fetchProducts = async () => {
  const res = await fetch("/data.json");
  return res.json();
};
function App() {
  const productsPromise = fetchProducts();
  

  return (
    <>
    <div>
      <Navbar cartCount={8} />
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
          
        />
      </Suspense>
    </div>
    </>
  )
}

export default App
