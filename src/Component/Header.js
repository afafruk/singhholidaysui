import { Modal, Table, TableBody, TableCell, TableRow, TextField, Typography } from '@material-ui/core';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/singh holidays logo.png'
// import { Button } from './Button';
import './header.css';
import LoginSignup from './LoginSignup';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'white',
    // border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    zindex: 2000,
};

function Header() {
    const [displaymenu, setdisplaymenu] = useState(false);
    const [modalstatus,setModalstatus] = useState();
    const [open, setOpen] = useState(false);
    // const [sopen,setSOpen] = React.useState(false);
    // const handlesOpen = () => {
    //     setSOpen(true)
    //     setOpen(false)}
    // const handlesClose = () =>{
    //     setSOpen(false)
    //     setOpen(false)
    // }
    const handleOpen = (value) => {
        setOpen(!open)
        setModalstatus(value)
        // setSOpen(false)
    }
    const handleClose = (value) => {
        setOpen(false)
        // setSOpen(false)
    }

    const openNav = () => {
        setdisplaymenu(true)
    }

    const closeNav = () => {
        setdisplaymenu(false)
    }

    window.onscroll = function(){
        var stickynav = document.getElementById("stickynav")
        if(window.pageYOffset > stickynav.offsetTop){
            stickynav.classList.add("sticky")
        }
        else{
            stickynav.classList.remove("sticky")
        }
    }
    return (
        <>
            <div className="collapse fixed" id="searchcollapse">
                <div className="card card-body bg-secondary p-5">
                    <div className="d-flex">
                        <div className="inputContainer text-white" >
                            <i className="fas fa-search"> </i>
                            <input className="searchinput bg-secondary" type="text" placeholder="Search?" name="search" />
                        </div>
                    </div>

                </div>
            </div>
            <nav className="navbar navbar-light navbar-expand-lg" id="navmenu">
                <ul className="col-md-6  collapse navbar-collapse" id="navbarSupportedContent">
                    <span className="nav-item  mx-3 my-colour-1"><i className="far fa-phone">&nbsp;&nbsp;&nbsp;<span className="text-dark">+995 555 373 006</span></i></span>
                    <span as="button" className="nav-item mx-3 my-colour-1" ><i className="far fa-envelope">&nbsp;&nbsp;&nbsp;<span className="text-dark">info@singhholidays.com</span></i></span>
                </ul>
                
                <ul className="col-md-4">
                    <a className="nav-item mx-2 my-colour-1" href="https://www.instagram.com/singhholidays2015/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                    <a className="nav-item mx-2 my-colour-1" href="https://www.facebook.com/SINGHOLIDAYS"  target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
                    <a className="nav-item mx-2 my-colour-1" href="https://www.youtube.com/channel/UCSg_BzJDmHJUb9vgr-_I0LQ" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube"></i></a>
                    {/* <a className="nav-item mx-2 my-colour-1" href="https://www.twitter.com/"><i className="fab fa-twitter"></i></a> */}
                    {/* <a className="nav-item mx-2 my-colour-1" href="https://www.tumblr.com/"><i className="fab fa-tumblr"></i></a>
                    <a className="nav-item mx-2 my-colour-1" href="https://www.vimeo.com/"><i className="fab fa-vimeo-v"></i></a> */}
                    <a as="button" className="nav-item  mx-3 my-colour-1" onClick={()=>handleOpen(1)}><i className="far fa-lock">&nbsp;&nbsp;&nbsp;<span className="text-dark">Login</span></i></a>
                    <a as="button" className="nav-item  ml-3 my-colour-1" onClick={()=>handleOpen(0)}><i className="far fa-user">&nbsp;&nbsp;&nbsp;<span className="text-dark">SignUp</span></i></a>
                   
                    {/* <Link as="button" className="nav-link m-0 text-dark" onClick={handleOpen}><i className="fas fa-lock my-colour-1"/>Login</Link>
                    <Link as="button" className="nav-link m-0 text-dark" onClick={handleOpen}><i className="far fa-user my-colour-1"/>SignUp</Link> */}

                </ul>
            </nav>
            <nav className="navbar navbar-light navbar-expand-lg bg-none" id="stickynav">
                <div className="container-fluid" >
                    <Link as="button" aria-current="page" to="/">
                        <img src={logo} alt="Logo..." width="100" height="80" />
                    </Link>
                    <Link as="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon text-white"></span>
                    </Link>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                        {/* <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        </ul> */}
                       
                        <ul className="nav">
                            <li className="nav-item">
                                <Link as="button" className="nav-link nav-link-hover text-dark" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link as="button" className="nav-link nav-link-hover text-dark" to="/aboutus">About Us</Link>
                            </li>
                            <li className="nav-item">
                                <Link as="button" className="nav-link nav-link-hover text-dark" to="/destinations">Destinations</Link>
                            </li>
                            <li className="nav-item">
                                <Link as="button" className="nav-link nav-link-hover text-dark" to="/tours">Tours</Link>
                            </li>
                            <li className="nav-item">
                                <Link as="button" className="nav-link nav-link-hover text-dark" to="/contact">Contact</Link>
                            </li>
                            <li className="nav-item">
                                <Link as="button" className="nav-link text-dark" data-bs-toggle="collapse" data-bs-target="#searchcollapse"><i className="far fa-search"></i></Link>
                            </li>
                            <li className="nav-item">
                                <Link as="button" className="nav-link text-dark" data-bs-toggle="modal" data-bs-target="#exampleModal"><i className="far fa-user"></i></Link>
                            </li>
                            <li className="menu-bars ml-2">
                                <a className="nav-link text-light" onClick={openNav}><i className="fas fa-bars my-colour-1"></i></a>
                            </li>
                        </ul>
                        {/* </form> */}
                    </div>
                </div>
            </nav>

            {/* <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    {modalstatus === 1?<>
                    <Typography id="modal-modal-title" variant="h6" component="h1" className="text-center">
                        Login
                    </Typography>
                    <Typography id="modal-modal-description" className="justify-content-center" sx={{ mt: 2 }}>
                        <form className="form-row">
                            <div className="m-2">
                                <TextField className="col-md-12" type="text" label="UserName" name="username" required/>
                            </div>
                            <div className="m-2">
                            <TextField className="col-md-12" type="password" label="Password" name="password" required/>
                            </div>
                            
                            <div  className="col-md-12 my-4">
                            <button type="submit" className="btn w-100 my-bgcolour text-white">Submit</button>
                            </div>
                            <div  className="col-md-12 text-center m-1">Do you have an account?</div>
                            <div className="col-md-12 text-center m-1"><Link as="button" className="my-colour-1"  onClick={()=>setModalstatus(0)}> Create an account?</Link></div>
                        </form>
                    </Typography>
                    </>
                    :
                    <>
                     <Typography id="modal-modal-title" variant="h6" component="h1" className="text-center">
                        SignUp
                    </Typography>
                    <Typography id="modal-modal-description" className="justify-content-center" sx={{ mt: 2 }}>
                        <form className="form-row">
                            <div className="col-md-12 m-2 ">
                                <TextField className="w-100" type="text" label="UserName" name="username" required/>
                            </div>
                            <div className="col-md-12 m-2">
                            <TextField className="w-100" type="password" label="Password" name="password" required/>
                            </div>
                            <div className="col-md-12 m-2">
                            <TextField className="w-100" type="password" label="Confirm Password" name="confirmpassword" required/>
                            </div>

                            <div className="col-md-12 m-2">
                            <TextField className="w-100" type="text" label="First Name" name="fname" required/>
                            </div>
                            <div className="col-md-12 m-2">
                            <TextField className="w-100" type="text" label="Last Name" name="lname" required/>
                            </div>
                            <div className="col-md-12 m-2">
                            <TextField className="w-100" type="email" label="email" name="Email" required/>
                            </div>
                            <div className="col-md-12 m-2">
                            <TextField className="w-100" type="number" label="Phone" name="phone" required/>
                            </div>
                            <div className="col-md-12 m-2">
                            <TextField className="w-100" type="text" label="Country" name="country" required/>
                            </div>
                            
                            <div  className="col-md-12 my-4">
                            <button type="submit" className="btn w-100 my-bgcolour text-white">Submit</button>
                            </div>
                            <div  className="col-md-12 text-center m-1">Already have an account?</div>
                            <div className="col-md-12 text-center m-1"><Link as="button" className="my-colour-1" onClick={()=>setModalstatus(1)}> Login?</Link></div>
                        </form>
                    </Typography>
                    </>
                        }
                </Box>
            </Modal> */}
            <LoginSignup openM={open} Modals={modalstatus} OnClose={handleClose}/>

            {displaymenu === true ?
                <div id="mySidenav" className="sidenav text-white w-30" onMouseLeave={closeNav} >
                    <button className="closebtn btn my-colour-1" onClick={closeNav}>&times;</button>
                    <div className=" d-flex flex-column m-4">
                        <div className="d-flex justify-content-center">
                            <img src={logo} alt="Logo..." width="100" height="80" />
                        </div>
                        <p className="mt-5">
                            Singh Holidays – Being your favorite tours operators in Georgia, we welcome you to explore Georgia with the team of professionals in this business. With Singh holidays you feel home in Georgia. We serve our clients with utmost care and comfort. 

                        Singh holidays has its own restaurant chain and fleets business. We have been into this business from 2009 and keep on serving our clients with the personal choices of their comfort be it food, car or accommodation. Every choice is served with utmost professionalism to fulfill customers’ expectations.  

                        Singh Holidays welcome you to Gerogia – Feel Home with us.
                         </p>
                        <div className="my-2 align-item-bottom">
                            <Table>
                                <TableBody>
                                    <TableRow><TableCell className="text-white my-border-none"><i className="fa fa-phone" />+995 555 373 006</TableCell></TableRow>
                                    <TableRow><TableCell className="text-white my-border-none"><i className="fas fa-map-marker-alt" /> 9 Giorgi Akhvlediani St Perovskaia Tbilisi, 0108, Georgia</TableCell></TableRow>
                                    <TableRow><TableCell className="text-white my-border-none"><i className="far fa-envelope" /> Info@singhholidays.com</TableCell></TableRow>
                                </TableBody>
                            </Table>

                            <ul className="d-flex align-self-baseline">
                                <a className="nav-item " href="https://www.instagram.com/singhholidays2015/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                                <a className="nav-item" href="https://www.facebook.com/SINGHOLIDAYS"  target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
                                <a className="nav-item"href="https://www.youtube.com/channel/UCSg_BzJDmHJUb9vgr-_I0LQ" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube"></i></a>
                            </ul>
                        </div>
                    </div>
                </div>
                : ''
            }

        </>
    );
}

export default Header;