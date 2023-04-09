import { useParams } from 'react-router-dom';
import Header from "../components/Header"
import Footer from "../components/Footer"
import ProductDetail from "../components/Contentdetail";
import Carousel from "../components/carousel"
import products from "../Json/new.json";
function Product() {
   const { productId } = useParams();
   const product = products.find(
      (x) => x.id === productId
   );

   return (
      <div id="mainLayout">
         <Header
            id="layoutHeader"
         />
          <Carousel/>
         <ProductDetail product={product} id="layoutContent"
 />
         <Footer id="layoutFooter" />
      </div>
   );
}

export default Product;