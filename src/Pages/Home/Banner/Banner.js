import React from 'react';
import {Carousel,} from 'react-bootstrap'
const Banner = () => {
  
    return (
<Carousel >
  <Carousel.Item>
  <img
      className="d-block w-100 img-fluid"
      src="https://th.bing.com/th/id/OIP.a1ohOv_7dEn-cS3fw2YLQAHaCs?w=339&h=127&c=7&r=0&o=5&pid=1.7"
      alt="Third slide" height="230px"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <img
      className="d-block w-100 img-fluid"
      src="https://th.bing.com/th/id/OIP.5xe5jHBYToSGj6LLeWqrxQHaDF?w=339&h=145&c=7&r=0&o=5&pid=1.7"
      alt="Third slide" height="230px"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 img-fluid"
      src="https://th.bing.com/th/id/OIP.vjo4r-s5wX47rgVsJUp8mgHaDZ?w=339&h=160&c=7&r=0&o=5&pid=1.7"
      alt="Third slide" height="230px"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    );
};

export default Banner;