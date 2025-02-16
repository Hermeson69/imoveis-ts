import Navbar from './components/Navbar'
import Global from './styles/Global'
import Banner_Total from './components/Banner'
import About from './components/About'
import Modelos from './components/Modelos'
function App() {
 
  return (
    <>
      <Global />
      <Navbar />
      <Banner_Total />
      <About/>
      <Modelos/>
    </>
  )
}

export default App
