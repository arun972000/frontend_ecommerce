import Carousel from 'react-bootstrap/Carousel';
import { Image } from 'react-bootstrap';
import banner1 from "/src/assets/sponline_phone114_generated.jpg";
import banner2 from "/src/assets/sponline_phone116_generated.jpg";
import banner3 from "/src/assets/vecteezy_paper-art-shopping-online-on-smartphone-and-new-buy-sale_3690389.jpg";


function Banner() {
  return (
    <Carousel className='mb-5'>
      <Carousel.Item>
        <Image src={banner1} fluid/>
        <Carousel.Caption>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Image src={banner2} fluid/>
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Image src={banner3} fluid/>
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Banner;