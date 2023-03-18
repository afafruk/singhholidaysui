import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../Component/Footer'
import Header from '../Component/Header'
import ReviewComp from '../Component/ReviewComp'
import bgimg from '../images/about-us-title-img-1.jpg'
import img1 from '../images/img-8.jpg'
import logo from '../images/singh holidays logo.png'
import ourteam from "../images/ourteam.jpg"

export class AboutUs extends Component {
    constructor() {
        super()
        this.state = {
            aboutus: false
        }
    }
    render() {
        return (
            <div>
                <span className="header-comp"><Header/></span>
               
                <div className='hero-container aboutus-cover'></div>

                    <div style={{transform:"translate(0px,500px)"}}>
                    <h1 className="coverh1">About Us</h1>   
                    <div className="row justify-content-around my-bgcolour2 g-0 pt-3">
                        <div className="col-sm-6 p-4 my-3 d-flex ">
                            <div className="card my-border-none w-100 h-100">
                                <div className="card-body">
                                    {/* <p className="text-danger">Been there recently?</p> */}
                                    {this.state.aboutus === false ?<>
                                        <span className="d-flex justify-content-around">
                                        <Link as="button" className="card-title my-colour-1 mb-4 mr-1 border-bottom-secondary" style={{ fontSize: '25px',textDecoration:'none',}} onClick={()=>this.setState({ aboutus: false })}><strong>Who We Are</strong></Link>
                                        <Link as="button" className="card-title text-dark mb-4 ml-1" style={{ fontSize: '25px',textDecoration:'none', }} onClick={()=>this.setState({ aboutus: true })}><strong>What We Do</strong></Link>
                                    </span>
                                        <p className="card-text fs-5">
                                            We are travelers. Singh Holidays Georgia is a tour agency, established in Tbilisi Georgia in March 2021. We are offering travel services around Georgia, Armenia and Azerbaijan, combining our energy and enthusiasm. High quality of our services are represented with the strongly elaborated working strategy which includes experienced teammates, advanced systems and innovations you would expect from the travel agency. Our main strength is that we have diverse choice of tour packages which are customized according to our clients’ wishes and are acceptable for everyone. We offer comprehensive and professionally effective service at affordable prices. We invite you to discover some of the most unique places of Georgia and learn about its culture, traditions and history stoned through the ages.
                                        </p>
                                        </>:<>
                                        <span className="d-flex justify-content-around">
                                        <Link as="button" className="card-title text-dark mb-4 mr-1" style={{ fontSize: '25px',textDecoration:'none', }} onClick={()=>this.setState({ aboutus: false })}><strong>Who We Are</strong></Link>
                                        <Link as="button" className="card-title my-colour-1 mb-4 ml-1 border-bottom-secondary" style={{ fontSize: '25px',textDecoration:'none' }} onClick={()=>this.setState({ aboutus: true })}><strong>What We Do</strong></Link>
                                    </span>
                                        <p className="card-text fs-5">
                                          We build connections. We leverage our platform and technology capabilities across an extensive portfolio of businesses and brands to orchestrate the movement of people and the delivery of travel experiences on both a local and global basis. We help our travelers and our partners find the right pathways  through millions of possibilities to reach the best possible outcome.
                                        </p>
                                        </>
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 p-4 my-3">
                            <div className="d-flex align-items-center justify-content-center w-100 h-100">
                                <img src={logo} alt="img" style={{width:'55%'}} />
                            </div>
                        </div> 

                        <div className="col-sm-6 p-4 my-3">
                            <div className="my-border-none  w-100 h-100">
                                <img src={ourteam} alt="img" className=" w-100 h-100"/>
                                <div className="card-body">
                                </div>
                            </div>
                        </div> 
                        <div className="col-sm-6 p-4 my-3 d-flex justify-content-center align-item-center">
                            <div className="card my-border-none  w-100 h-100">
                                <div className="card-body margin-auto">
                                        <span className="d-flex justify-content-around">
                                        <h3 className="card-title my-colour-1 mb-4 ml-1"><strong className="border-bottom-secondary">Our Team</strong></h3>
                                    </span>
                                        <p className="card-text fs-5">
                                        Singh Holidays team consist of professionals who willing to make every single traveler fell in love with our country and happy with our service. We have professional office team who are always ready to process your inquiry, give you detailed information on everything, advice you and plan  unforgettable trip for you.
                                        When you book your tour and landed in our country, Singh Holidays friendly guides and drivers will meet you  ready to give the best travel experience ever.
                                        So What’s Stopping you? Contact now
                                        </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6 p-4 my-3  d-flex justify-content-center align-item-center">
                            <div className="card my-border-none  w-100 h-100">
                                <div className="card-body">
                                        <span className="d-flex justify-content-around">
                                        <h3 className="card-title my-colour-1 mb-4 ml-1"><strong className="border-bottom-secondary">About Services</strong></h3>
                                    </span>
                                        <p className="card-text fs-5">
                                        Singh Holidays provides wide variety of services that makes your experience more satisfying. We give you opportunity to choose preferable hotel, activity, guide and driver, daily tour, airport transfer and restaurant. So even before you visit Georgia you can plan and modify your own trip. Check out our services:
                                        </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 p-4 my-3" style={{marginTop:"auto",marginBottom:"auto"}}>
                            <div className="w-100 h-100">
                                <div className="card-body my-colour-1">
                                    <div className="d-flex justify-content-around my-3">
                                        <h4 className="fs-3 fw-bolder"><i className="fas fa-bed fs-1"/><span> Hotel</span></h4>
                                        <h4 className="fs-3 fw-bolder"><i className="fas fa-car fs-1"/><span> Tour</span></h4>
                                        <h4 className="fs-3 fw-bolder"><i className="fas fa-street-view fs-1"/><span> Activities</span></h4>
                                    </div>
                                    <div className="d-flex justify-content-around my-3">
                                        <h4 className="fs-3 fw-bolder"><i className="fas fa-bed fs-1"/><span> Hotel</span></h4>
                                        <h4 className="fs-3 fw-bolder"><i className="fas fa-car fs-1"/><span> Tour</span></h4>
                                        <h4 className="fs-3 fw-bolder"><i className="fas fa-street-view fs-1"/><span> Activities</span></h4>
                                    </div>
                                </div>
                            </div>
                        </div> 

                        <div className="col-sm-6 p-4 my-3">
                            <div className="w-100 h-100">
                                <div className="card-body">
                                    <div className="d-flex justify-content-between">
                                        <h4 className="mr-auto">Over All</h4>
                                        <h4>85%</h4>
                                    </div>
                                    <div className="progress mb-4" style={{ height: "5px" }}>
                                        <div className="progress-bar my-bgcolour" role="progressbar" style={{ width: '85%' }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <h4 className="mr-auto">Accomodation</h4>
                                        <h4>68%</h4>
                                    </div>
                                    <div className="progress mb-4" style={{ height: "5px" }}>
                                        <div className="progress-bar my-bgcolour" role="progressbar" style={{ width: '68%'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <h4 className="mr-auto">Destination</h4>
                                        <h4>88%</h4>
                                    </div>
                                    <div className="progress mb-4" style={{ height: "5px" }}>
                                        <div className="progress-bar my-bgcolour" role="progressbar" style={{ width: '88%'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <h4 className="mr-auto">Meals</h4>
                                        <h4>87%</h4>
                                    </div>
                                    <div className="progress mb-4" style={{ height: "5px" }}>
                                        <div className="progress-bar my-bgcolour" role="progressbar" style={{ width: '87%'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <h4 className="mr-auto">Transport</h4>
                                        <h4>92%</h4>
                                    </div>
                                    <div className="progress mb-4" style={{ height: "5px" }}>
                                        <div className="progress-bar my-bgcolour" role="progressbar" style={{ width: '92%'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <h4 className="mr-auto">Value For Money</h4>
                                        <h4>85%</h4>
                                    </div>
                                    <div className="progress mb-4" style={{ height: "5px" }}>
                                        <div className="progress-bar my-bgcolour" role="progressbar" style={{ width: '85%'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 p-4 my-3">
                            <div className="card  w-100 h-100 my-border-none" >
                                <div className="card-body">
                                    <ReviewComp />
                                </div>
                            </div>
                        </div>
                    </div>


                    <div>
                        <div className="row justify-content-around g-0 p-3 bg-secondary text-white" >
                            <div className="col-md-3 bg-secondary">
                                <div className="card-body">
                                    <p className="card-text"><b>San Francisco</b></p>
                                    <p className="card-text"><i className="fas fa-phone-alt" style={{ color: 'rgb(143,15,28)' }} />&nbsp;&nbsp;&nbsp;156-677-124-442-2887</p>
                                    <p className="card-text"><i className="fas fa-at" style={{ color: 'rgb(143,15,28)' }} />&nbsp;&nbsp;&nbsp;getaway@qode.com</p>
                                    <p className="card-text"><i className="fas fa-map-marker-alt" style={{ color: 'rgb(143,15,28)' }} />&nbsp;&nbsp;&nbsp;Main Street Victoria 8007</p>
                                </div>
                            </div>
                            <div className="col-md-3 bg-secondary">
                                <div className="card-body">
                                    <p className="card-text"><b>San Francisco</b></p>
                                    <p className="card-text"><i className="fas fa-phone-alt" style={{ color: 'rgb(143,15,28)' }} />&nbsp;&nbsp;&nbsp;156-677-124-442-2887</p>
                                    <p className="card-text"><i className="fas fa-at" style={{ color: 'rgb(143,15,28)' }} />&nbsp;&nbsp;&nbsp;getaway@qode.com</p>
                                    <p className="card-text"><i className="fas fa-map-marker-alt" style={{ color: 'rgb(143,15,28)' }} />&nbsp;&nbsp;&nbsp;Main Street Victoria 8007</p>
                                </div>  
                            </div>
                            <div className="col-md-3 bg-secondary">
                                <div className="card-body">
                                    <p className="card-text"><b>San Francisco</b></p>
                                    <p className="card-text"><i className="fas fa-phone-alt" style={{ color: 'rgb(143,15,28)' }} />&nbsp;&nbsp;&nbsp;156-677-124-442-2887</p>
                                    <p className="card-text"><i className="fas fa-at" style={{ color: 'rgb(143,15,28)' }} />&nbsp;&nbsp;&nbsp;getaway@qode.com</p>
                                    <p className="card-text"><i className="fas fa-map-marker-alt" style={{ color: 'rgb(143,15,28)' }} />&nbsp;&nbsp;&nbsp;Main Street Victoria 8007</p>
                                </div>
                            </div>
                            <div className="col-md-3 bg-secondary">
                                <div className="card-body">
                                    <p className="card-text"><b>San Francisco</b></p>
                                    <p className="card-text"><i className="fas fa-phone-alt" style={{ color: 'rgb(143,15,28)' }} />&nbsp;&nbsp;&nbsp;156-677-124-442-2887</p>
                                    <p className="card-text"><i className="fas fa-at" style={{ color: 'rgb(143,15,28)' }} />&nbsp;&nbsp;&nbsp;getaway@qode.com</p>
                                    <p className="card-text"><i className="fas fa-map-marker-alt" style={{ color: 'rgb(143,15,28)' }} />&nbsp;&nbsp;&nbsp;Main Street Victoria 8007</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer />
                    </div>
                </div>
        )
    }
}

export default AboutUs
