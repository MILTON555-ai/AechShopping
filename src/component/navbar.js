import "../styles/navbar.css";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import Cart from "./cart";

const Header = (props) => {

  let location = useLocation()
  let cart = props.cart;
  return (
    <Navbar bg="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <Link to="/home" className="logo">Aech</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <Nav.Link href="#home">
              <Link to="/home">Home</Link>
            </Nav.Link>
            <Nav.Link href="#Fashion">
              <Link to="/fashion">Fashion</Link>
            </Nav.Link>
            <Nav.Link href="#Electronics">
              <Link to="/electronics">Electronics</Link>
            </Nav.Link>
            <Nav.Link href="#about">
              <Link to="/about">About</Link>
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="">
              <Link to="/cart">
                <FaShoppingCart color="" size={"25px"} />
                <span className="cart-count">{cart.length}</span>
              </Link>
            </Nav.Link>
            <Nav.Link href="#link">
              <Link to="/">
              {(location.pathname == '/')? (<Button className="py-0" variant="dark">
                  LogIn
                </Button>):(<Button className="py-0" variant="dark">
                  LogOut
                </Button>)}
                
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
