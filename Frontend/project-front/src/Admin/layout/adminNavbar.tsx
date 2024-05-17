import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaBars } from 'react-icons/fa';

const adminNavbar = ({ toggleSlidebar }: { toggleSlidebar: any }) => {
  const routelist: string[] = ["dashboard", "order", "product"];

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
      <Button variant="outline-light" onClick={toggleSlidebar}>
          <div className="custom-icon">
          <FaBars />
          </div>
        </Button>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {routelist.map((item,index) => (
              <Nav.Link key={index} href={"/admin/"+item}>{item}</Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  )
}

export default adminNavbar