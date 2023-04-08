import Header from "../components/Header"
import Container from "../components/Container"
import Footer from "../components/Footer"
import Carousel from "../components/carousel/index"
import products from "../Json/new.json";
function Home() {
    return (
        <div className="container table_of-contents">
            <Header
                className="contents-header"



            />
             <Carousel/>
            <Container products={products}
            className="contents-container"



            />
            <Footer
                className="contents-footer"



            />
        </div>
    )




}
export default Home;