/* eslint-disable react/prop-types */
import { Modal,  Row, Col, Image } from 'react-bootstrap';

const ProductDetailModal = ({ show, onHide, product }) => {
  

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>{product.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col md={6}>
            <Image src={product.images[0]} alt={product.title} fluid />
          </Col>
          <Col md={6}>
            <Image src={product.images[1]} alt={product.title} fluid />
          </Col>
        </Row>
        <Row className="mt-3">
          <Col>
            <p>{product.description}</p>
            <p>
              <strong>Price:</strong> ${product.price}
            </p>
            <p>
              <strong>Rating:</strong> {product.rating}/5
            </p>
            <p>
              <strong>Brand:</strong> {product.brand}
            </p>
          </Col>
        </Row>
      </Modal.Body>
  
    </Modal>
  );
};

export default ProductDetailModal;
