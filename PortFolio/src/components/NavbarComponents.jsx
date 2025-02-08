import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom'
import '../styles/Navbar.css'


function Navbor() {
    return (
    <>
     <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse >
          <Nav className="me-auto">
            <Nav.Link href="/" className='btn-neon'>
                <span id="span1"></span>
                <span id="span2"></span>
                <span id="span3"></span>
                <span id="span4"></span>Inicio</Nav.Link>
                <Nav.Link href="/Formacion" className='btn-neon'>
            <span id="span1"></span>
                <span id="span2"></span>
                <span id="span3"></span>
                <span id="span4"></span>Formacion</Nav.Link>
            <Nav.Link href="/Habilidades" className='btn-neon'>
            <span id="span1"></span>
                <span id="span2"></span>
                <span id="span3"></span>
                <span id="span4"></span>Habilidades</Nav.Link>
            <Nav.Link href="/Project" className='btn-neon'>
            <span id="span1"></span>
                <span id="span2"></span>
                <span id="span3"></span>
                <span id="span4"></span>Proyectos</Nav.Link>
           
            <Nav.Link href="/Contacto" className='btn-neon'>
            <span id="span1"></span>
                <span id="span2"></span>
                <span id="span3"></span>
                <span id="span4"></span>Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    </>
    )
  
}

export default Navbor