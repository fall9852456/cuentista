import { Row, Col } from "antd";
import Content from "../Content";
export default function Container({products}) {
  return (
    <Row gutter={[32, 32]}>
          {products.map(product=>(
              <Col
              key={product.id}
              sm={{ span: 16 }}
              lg={{ span: 12 }}
              xl={{ span: 8 }}
            >
            <Content key={product.id} product={product}/>
            </Col>
          ))}

</Row>
  );
}
