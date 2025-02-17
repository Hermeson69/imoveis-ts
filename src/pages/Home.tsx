import Navbar from '../components/Navbar'
import Global from '../styles/Global'
import Banner_Total from '../components/Banner'
import About from '../components/About'
import Modelos from '../components/Modelos'
import SecKitchen from '../components/kitchen_section'
import SecPool from '../components/Pool_Section'
const Home = () => {
    return (
        <>
            <Global />
            <Navbar />
            <Banner_Total />
            <About />
            <Modelos />
            <SecKitchen />
            <SecPool />
        </>
    )
}

export default Home