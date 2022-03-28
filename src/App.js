
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Navbar, Container, Nav, NavDropdown} from "react-bootstrap"

function App() {
  return (
    <>
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-1214757157.png?crop=1.00xw:0.751xh;0.00160xw,0.134xh&resize=980:*"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/homemade-kimchee-royalty-free-image-1621288320.?crop=0.668xw:1.00xh;0.138xw,0&resize=768:*"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/soba-royalty-free-image-1621288461.?crop=0.669xw:1.00xh;0.164xw,0&resize=768:*"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    </>

    
  );
}


export default App;
