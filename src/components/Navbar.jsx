
import Container from 'react-bootstrap/Container';

import Navbar from 'react-bootstrap/Navbar';

import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';



function NavbarMain() {
  const data = useSelector(state => state.cartReducer.cart)
  return (
    <Navbar className="bg-body-tertiary">
      <Container fluid>
        <Link to="/" className="navbar-brand">Shop App</Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
            <span className="ms-auto">
            <Link to="/cart"><i className={`fa-solid fa-cart-shopping fa-2x`}></i></Link>

              {data.length > 0 && (
                <span style={{ position: 'absolute', top: '1px', right: '2px', backgroundColor: 'red', borderRadius: '50%', padding: '4px 8px', color: 'white', fontSize: '10px' }}>{data.length}</span>
              )}</span>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarMain;