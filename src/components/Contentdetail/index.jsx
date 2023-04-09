import { Row, Col } from "antd";
import AddToCart from "../AddToCart"
import styles from "./Contentdetail.module.css"

function ProductDetail({ product }) {

   return (
      <Row 
         style={{justifyContent: 'center',backgroundColor:'black'}}
      >
         <Col 
            xs={{ span: 24 }} 
            lg={{ span: 6 }} 
         >
            <img
               alt={product.name}
               className={styles.image}
               src={product.image}
            />                          
         </Col>
         <Col 
            xs={{ span: 24 }} 
            lg={{ span: 12 }} 
         >
            <div className={styles.info} >
               <h1 className={styles.name} >
                  {product.name}
               </h1>
               <p className={styles.description}>
                  {product.description}
               </p>
               <div className={styles.wrap}>
                  <AddToCart />
               </div>
            </div>           
         </Col>
      </Row>         
   );
}

export default ProductDetail;