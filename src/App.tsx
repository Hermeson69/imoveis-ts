import Navbar from './components/Navbar'
import Global from './styles/Global'
import Banner_Total from './components/Banner'
import About from './components/About'
import Modelos from './components/Modelos'
import SecKitchen from './components/kitchen_section'
function App() {
 
  return (
    <>
      <Global />
      <Navbar />
      <Banner_Total />
      <About/>
      <Modelos/>
      <SecKitchen/>
    </>
  )
}

export default App
