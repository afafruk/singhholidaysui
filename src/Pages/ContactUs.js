
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../Component/Footer'
import Header from '../Component/Header'
import ReviewComp from '../Component/ReviewComp'
import bgimg from '../images/about-us-title-img-1.jpg'
import img1 from '../images/img-8.jpg'
import logo from '../images/singh holidays logo.png'
import ourteam from "../images/ourteam.jpg"
import { Button, TextField } from '@material-ui/core'
import maps from '../images/maps2.png'
import emailjs from '@emailjs/browser';



const ContactUs = () => {
    const [toSend, setToSend] = useState({
        fname: '',
        lname: '',
        email:'',
        phone: '',
        message: '',
      });
    
      const onSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm(
          'service_v43dxgj',
          'template_1c6wa9l',
          e.target,
          'user_QjCG2AGooixHigdQydkaC'
        )
          .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
          })
          .catch((err) => {
            console.log('FAILED...', err);
          });
      };
    
      const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
      };
    
  return (
            <div>
                <span className="header-comp"><Header/></span>
               
                <div className='hero-container aboutus-cover'></div>

                    <div style={{transform:"translate(0px,400px)"}}>
                    <h1 className="coverh1">Contact Us</h1>
                    <div className="row my-bgcolour2 g-0 p-4">
                        <div className="col-sm-4 p-4 my-3 d-flex justify-content-center align-items-center">
                            <div className="d-grid p-3">
                           <h1 className="fa fa-phone text-center my-colour-1 p-2"></h1>
                           <br/>
                           <h3 className=" text-center p-2 fw-bold">PHONE</h3>
                           <h5 className="text-center p-2">Call us on:</h5>
                           <h5 className="text-center p-1 my-colour-1">+995 555 373 006</h5>

                           </div>
                        </div>  
                        <div className="col-sm-4 p-4 my-3 d-flex justify-content-center align-items-center">
                            <div className="d-grid p-3">
                           <h1 className="fa fa-envelope text-center my-colour-1 p-2"></h1>
                           <br/>
                           <h3 className=" text-center p-2 fw-bold">EMAIL</h3>
                           <h5 className="text-center p-2">Send us an email:</h5>
                           <h5 className="text-center p-1 my-colour-1">Info@singhholidays.com</h5>

                           </div>
                        </div>  
                        <div className="col-sm-4 p-4 my-3 d-flex justify-content-center align-items-center">
                            <div className="d-grid p-3">
                           <h1 className="fa fa-location-arrow text-center my-colour-1 p-2"></h1>
                           <br/>
                           <h3 className=" text-center p-2 fw-bold">LOCATION</h3>
                           <h5 className="text-center p-2 ">9 Giorgi Akhvlediani St Perovskaia Tbilisi, 0108, Georgia</h5>
                           {/* <h5 className="text-center p-1"></h5> */}

                           </div>
                        </div>       
                        <h1 className="d-flex align-items-center justify-content-center fw-bold"> Leave Us Your Info</h1>
                        <h5 className="d-flex align-items-center justify-content-center">and we will get back to you.</h5>
                        <span className="d-flex align-items-center justify-content-center">
                        <span className="d-flex align-items-center justify-content-center py-2 bottomline"></span>
                        </span>

                        <div className="row g-0 p-5">
                            <div className="col-md-5">
                            <form onSubmit={onSubmit}>
                                <div className="row">
                                    <div className="col-md-6  py-3">
                                        <TextField label="First Name" name="fname" type="text" placeholder="First Name" className="col-md-12 w-100" required variant="filled" value={toSend.fname}  onChange={handleChange}></TextField>
                                    </div>
                                    <div className="col-md-6  py-3">
                                        <TextField label="Last Name" name="lname" type="text" placeholder="Last Name" className="col-md-12 w-100" required variant="filled" value={toSend.lname}  onChange={handleChange}></TextField>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6  py-3">
                                        <TextField label="Email" name="email" type="email" placeholder="Email" className="col-md-12 w-100" required variant="filled" value={toSend.email}  onChange={handleChange}></TextField>
                                    </div>
                                    <div className="col-md-6  py-3">
                                        <TextField label="Pnone no." name="phone" type="text" placeholder="Pnone no." className="col-md-12 w-100" variant="filled" value={toSend.phone}  onChange={handleChange}></TextField>
                                    </div>
                                    <div className="col-md-12  py-4">
                                        <TextField label="Message" name="message" type="text" placeholder="Message" className="col-md-12 w-100" multiline rows={4} variant="filled" value={toSend.message}  onChange={handleChange}></TextField>
                                    </div>
                                    
                                </div>
                                <div className="">
                                <Button type='submit' variant="outlined">Submit</Button>
                                </div>
                            </form>

                            </div>
                            <div className="col-md-1"></div>
                            <div className="col-md-5 d-flex align-items-center justify-content-center">
                                <div className="card">
                                <img src={maps} alt="location" className="mapsimg"></img>
                                </div>
                            </div>
                        </div>
                    </div> 
                    <Footer/>  
                </div>
            </div>
        )}


export default ContactUs