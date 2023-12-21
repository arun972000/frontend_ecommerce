
import { Container, Row, Col, Image } from 'react-bootstrap';

const AboutSection = () => {
  return (
    <div className="bg-primary text-light py-5">
      <Container>
      <h1 className="display-4 mb-5">Ensuring the best welfare of the buyers</h1>
        <Row className="align-items-center">
          {/* Author Image on the Left */}
          <Col md={4} className="mb-3">
            <Image
              src="https://via.placeholder.com/150"
              alt="Author"
              roundedCircle
              fluid
            />
          </Col>

          {/* Heading and Slogan on the Right */}
          <Col md={8}>
            
            <p className="lead">
              Your one-stop destination for all your shopping needs. Discover a world of convenience and quality products.
            </p>
          </Col>
        </Row>

        {/* Website Developer Info */}
        <Row className="mt-5">
          <Col>
            <p className="text-center">
              Developed with ❤️ by xyz | Contact: xyz.in
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutSection;
