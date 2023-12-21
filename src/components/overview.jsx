/* eslint-disable react/no-unescaped-entities */

import { Container, Row, Col, Card } from 'react-bootstrap';

const Overview = () => {
  return (
    <Container className="py-5">
      <h2 className="text-center mb-4 ">Welcome to Shop-Time</h2>
      <Row className="mb-5">
        <Col>
          <Card className="border-0">
            <Card.Body>
              <Card.Title>Discover a New Shopping Experience</Card.Title>
              <Card.Text>
                At [Your Website Name], we're on a mission to redefine your online shopping experience. Explore a curated collection of products spanning fashion, electronics, home decor, and more.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <h2 className="text-center mb-4">Why Choose Shop-Time?</h2>
      <Row className="mb-5">
        <Col md={6}>
          <Card className="shadow p-3 bg-white rounded">
            <Card.Body>
              <Card.Title>Diverse Product Range</Card.Title>
              <Card.Text>
                Discover a vast array of high-quality products, carefully selected to meet the latest trends and your unique needs.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="shadow p-3  bg-white rounded">
            <Card.Body>
              <Card.Title>Secure and Seamless Shopping</Card.Title>
              <Card.Text>
                Enjoy a secure and hassle-free shopping journey. Our user-friendly interface ensures a smooth experience from browsing to checkout.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col md={6}>
          <Card className="shadow p-3  bg-white rounded"> 
            <Card.Body>
              <Card.Title>Exceptional Customer Service</Card.Title>
              <Card.Text>
                Our dedicated customer support team is here to assist you every step of the way. Your satisfaction is our top priority.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="shadow p-3 bg-white rounded">
            <Card.Body>
              <Card.Title>Exclusive Deals and Discounts</Card.Title>
              <Card.Text>
                Stay tuned for exclusive deals and discounts. We believe in offering you the best value for your money.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Overview;
