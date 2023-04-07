import Header from "../components/Header"
import Container from "../components/Container"
import Footer from "../components/Footer"
import Carousel from "../components/carousel/index"
function Home() {
    return (
        <div className="table-of-contents">
            <Header
                className="contents-header"



            />
             <Carousel/>
            <Container
                className="contents-container"



            />
            <Footer
                className="contents-footer"



            />
        </div>
    )




}
export default Home;