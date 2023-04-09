import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./carousel.module.css";
export default function carousel() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className={styles.carousel}>
      <Slider {...settings}>
        <div className={styles.box}>
          <h3>1</h3>
        </div>
        <div className={styles.box}>
          <h3>2</h3>
        </div>
        <div className={styles.box}>
          <h3>3</h3>
        </div>     <div className={styles.box}>
          <h3>4</h3>
        </div>     <div className={styles.box}>
          <h3>5</h3>
        </div>
      </Slider>
    </div>
  );
}


