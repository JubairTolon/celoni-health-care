import React from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { FaRegClock, FaRegUser, FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import './Header.css';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    const navigateToLogin = () => {
        navigate('/login');
    }
    const handleSignOut = () => {
        signOut(auth);
    }

    return (
        <>
            <div className='header-up d-flex'>
                <div className='header-up-left d-flex w-50 align-items-center text-light'>
                    {
                        user ?
                            <button onClick={() => handleSignOut()} className='button d-flex align-items-center mx-3'><FaRegUser /><span className='ms-2'>Sign Out</span></button>
                            :
                            <button onClick={() => navigateToLogin()} className='button d-flex align-items-center mx-3'><FaRegUser /><span className='ms-2'>Login</span></button>
                    }
                    <div className='header-up-text ms-5 ps-5'>Welcome to<strong className='mx-1'>Dr.Celine Max</strong> <span className='mx-3'>|</span>
                        <span className='mx-2'><FaRegClock /></span>Sat - Thu: 8:00 am - 7:00 pm
                    </div>
                </div>
                <div className='header-up-righ w-50 d-flex align-items-center justify-content-end'>
                    {
                        user ?
                            <h5 className='me-5' role="button" ><small style={{ color: "#0DB9B6" }}><FaRegUser /> </small> {user.displayName}</h5>
                            :
                            <small className='me-5' role="button" style={{ color: "#0DB9B6" }}><FaRegUser /> </small>

                    }
                    <select className="form-select form-select-sm w-25 " aria-label=".form-select-sm example">
                        <option value={"default"}>English</option>
                        <option value="2">Bangla</option>
                        <option value="3">Arabic</option>
                    </select>
                    <span className='icons mx-4'>|</span>
                    <span className='icons fs-5 me-2'><FaFacebookF /></span>
                    <span className='icons fs-5 mx-2'><FaInstagram /></span>
                    <span className='icons fs-5 mx-2'><FaTwitter /></span>
                    <span className='icons fs-5 mx-2'><FaLinkedinIn /></span>
                </div>
            </div>
            <Navbar className='px-5' collapseOnSelect expand="lg" sticky='top' bg='light'>
                <Navbar.Brand className='nav-brande' as={Link} to="/">Dr. Celoni Max</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse className='nav-links justify-content-center' id="responsive-navbar-nav">
                    <Nav>
                        <Nav.Link className='me-4' as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link className='me-4' as={Link} to="/about">About</Nav.Link>
                        <Nav.Link className='me-4' as={Link} to="/services">Services</Nav.Link>
                        <NavDropdown className='me-4' title="Pages" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link className='me-4' as={Link} to="/blogs">Blogs</Nav.Link>
                        <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <button className='button'>Apointment</button>
            </Navbar>
        </>
    )
};

export default Header;