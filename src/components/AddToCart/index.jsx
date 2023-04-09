import { Button } from "antd"

export default function AddToCart() {

  return (
    <Button type="primary" style={{
      height: 'auto',
      width:'35%',
      fontSize: '1.5rem',
      padding: '0.5rem 1rem'
    }}>
      Add To Cart
    </Button>
  );
}