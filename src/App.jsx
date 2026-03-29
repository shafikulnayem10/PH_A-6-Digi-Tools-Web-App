import './App.css'
import Banner from './components/homepage/banner/Banner'
import Navbar from './components/NavBar/Navbar'

function App() {
  

  return (
    <>
    <div>
      <Navbar cartCount={8} />
      <Banner></Banner>
    </div>
    </>
  )
}

export default App
