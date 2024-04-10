import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { FaSearch } from "react-icons/fa";
import { CiBellOn } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";
import 'bootstrap/dist/css/bootstrap.min.css';
import './header.scss'
function Header({setIsActive,isActive}) {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
      const checkIfMobile = () => {
        const mobileMediaQuery = window.matchMedia('(max-width: 1024px)');
        setIsMobile(mobileMediaQuery.matches);
      };
  
      checkIfMobile(); // Check initially
      window.addEventListener('resize', checkIfMobile); // Listen for resize events
  
      return () => {
        window.removeEventListener('resize', checkIfMobile); // Clean up the listener
      };
    }, []);
    return (
        <div className='header-main-wrapper'>
            <Navbar expand="lg" sticky='top' className="bg-white rounded-4 ">
                <Container fluid>
                    <div className='header-flex-wrapper'>
                    <div className='fs-2 header-notification' style={{display:isMobile ? 'block' : 'none'}} onClick={()=>setIsActive(!isActive)}><RxHamburgerMenu /></div>
                        <Navbar.Brand href="#home">
                            <Image src="/assets/images/logo.svg" fluid />
                        </Navbar.Brand>
                        <Form inline className='hedaer-input-margin'>
                            <InputGroup className='header-input-group-wrapper'>
                                <InputGroup.Text className='header-search-wrapper' id="basic-addon1"><FaSearch />
                                </InputGroup.Text>
                                <Form.Control
                                    className='header-search-wrapper'
                                    placeholder="Search"
                                />
                            </InputGroup>
                        </Form>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" style={{display:'none'}}/>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ms-auto">

                               <div className='d-flex gap-3'>
                               <div className='fs-2 header-notification border-lg-end' ><CiBellOn /><span className='header-notification-dot'>1</span></div>
                                
                               </div>
                                <Nav.Link href="#link" >
                                    <div className='d-flex gap-2'>
                                        <div className='nav-user-section-wrapper'>
                                            <Image src='/assets/images/user.png' />
                                        </div>
                                        <div className='nav-user-text-wrapper'>
                                            <h5>
                                                Cody Simmmons
                                            </h5>
                                            <p>Manager</p>
                                        </div>
                                    </div>
                                </Nav.Link>
                                <DropdownButton
                                    align="start"
                                    title=""
                                    className="header-dropdown-wrapper"
                                    id="dropdown-menu-align-start"
                                >
                                    <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                                    <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                                    <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
                                    <Dropdown.Divider />
                                    <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                                </DropdownButton>
                            </Nav>
                        </Navbar.Collapse>
                    </div>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header