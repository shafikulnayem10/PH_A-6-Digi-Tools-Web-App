import './App.css'
import Banner from './components/homepage/banner/Banner'
import Stats from './components/homepage/stats/Stats'
import Navbar from './components/NavBar/Navbar'

function App() {
  

  return (
    <>
    <div>
      <Navbar cartCount={8} />
      <Banner></Banner>
      <Stats></Stats>
    </div>
    </>
  )
}

export default App
