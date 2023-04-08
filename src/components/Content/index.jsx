import styles from './Content.module.css';
export default function Content( { product }) {
    return (
        <section className="col-md-6 col-lg-4 col-xl-3 col-xxl-2 pt-4 p-md-3 p-lg-4">
        <div className={styles.item} >
        <div className={styles.image}>
          <a href="/">
            <img
              style={{width:"477px",height:"600px"}}
              src={product.image}
              alt={product.name}
            />
          </a>
          </div>
          <div className={styles.info}>
            <h5 className={styles.name}>{product.name}</h5>
            <p className={styles.description}>
            {product.description}
            </p>
            </div>
          </div>
      </section>
    );
  }