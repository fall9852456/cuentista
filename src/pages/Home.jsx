import Header from "../components/Header"
import Container from "../components/Container"
import Footer from "../components/Footer"
import Carousel from "../components/carousel"
import products from "../Json/new.json";
import movies from "../Json/movie.json";
function Home() {
    return (
        <div id="mainLayout">
            <Header
                id="layoutHeader"



            />
             <Carousel 
             id="layoutcarousel"


             
             />
            <Container products={products}
            id="layoutContent"



            />
            <Footer
                id="layoutFooter"



            />
        </div>
    )




}
export default Home;