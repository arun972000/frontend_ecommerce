
import { Container, Row, Col } from 'react-bootstrap';


const Footer = () => {
  return (
    <footer className="bg-dark text-light text-center py-1">
      <Container>
        
        <Row className="mt-3">
          <Col>
            <p>&copy; 2023 My Online Store. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
