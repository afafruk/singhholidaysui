import React, { Component } from "react";
import Header from "../Component/Header";
import Footer from "../Component/Footer";
import cardimg1 from "../images/hotel.jpg";
import cardimg2 from "../images/h4-banner-img-2-yellow.jpg";
import cardimg3 from "../images/h4-banner-img-3-yellow.jpg";

import {getTopPackages} from '../services/PackageApi'

import logo from "../images/singh holidays logo.png";

import ReviewComp from "../Component/ReviewComp";
import { Link } from "react-router-dom";
import { TextField } from "@material-ui/core";
import States from "../constants/States";

const Loader = () => (
  <div className="divLoader">
    <svg className="svgLoader" viewBox="0 0 100 100" width="10em" height="10em">
      <path stroke="none" d="M10 50A40 40 0 0 0 90 50A40 42 0 0 1 10 50" fill="#8F0F1C" transform="rotate(179.719 50 51)"><animateTransform attributeName="transform" type="rotate" calcMode="linear" values="0 50 51;360 50 51" keyTimes="0;1" dur="1s" begin="0s" repeatCount="indefinite"></animateTransform></path>
    </svg>
  </div>
);


export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHovering: false,
      bgcolour: 0,
      Packages:[],
      Loading:true,
    };
  }

  componentDidMount() {
      this.TopPackages();
      States.setPackageData("")
      States.setpackageDateS("")
      States.setpackageDateE("")
  }

  TopPackages =async()=>{
    try {
      const res = await getTopPackages()
      this.setState({Packages: res.data})
      this.setState({Loading:false})
    } catch (error) {
      console.log(error)
    }
  }

  
   

 

  handleMouseOver = (id) => {
    this.setState({ isHovering: true });
  };

  handleMouseOut = () => {
    this.setState({ isHovering: false });
  };

  render() {
    return (
      <div>
      {console.log(this.state.Packages.map((e)=>e.freeSalePackageName),'this')}
        <span className="header-comp">
          <Header />
        </span>
        {/* <div style={{height:'60%'}}> 
                    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={boxedslider1} className="d-block w-100" alt="..."  />
                                <div className="carousel-caption d-none d-md-block">
                                    <p className="boxslidertext1">Let’s Reach <span className="boxslidertext2">the Summit</span></p>
                                    <p className="boxslidertext">Magnificent Mountains </p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src={boxedslider2} className="d-block w-100" alt="..." />
                                <div className="carousel-caption d-none d-md-block">
                                    <p className="boxslidertext1">A Journey to<span className="boxslidertext2"> Remember</span></p>
                                    <p className="boxslidertext">Magnificent Mountains</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src={boxedslider3} className="d-block w-100" alt="..." />
                                <div className="carousel-caption d-none d-md-block">
                                    <p className="boxslidertext1">Time to Take <span className="boxslidertext2">on the Trek</span></p>
                                    <p className="boxslidertext">Magnificent Mountains</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div> */}
        <div className="hero-container home-cover">
          {/* <div id="carouselExampleCaptions" className="carousel slide top-0 w-100" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={boxedslider1} className="d-block w-100" alt="..."  />
                                <div className="carousel-caption d-none d-md-block">
                                    <p className="boxslidertext1">Let’s Reach <span className="boxslidertext2">the Summit</span></p>
                                    <p className="boxslidertext">Magnificent Mountains </p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src={boxedslider2} className="d-block w-100" alt="..." />
                                <div className="carousel-caption d-none d-md-block">
                                    <p className="boxslidertext1">A Journey to<span className="boxslidertext2"> Remember</span></p>
                                    <p className="boxslidertext">Magnificent Mountains</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src={boxedslider3} className="d-block w-100" alt="..." />
                                <div className="carousel-caption d-none d-md-block">
                                    <p className="boxslidertext1">Time to Take <span className="boxslidertext2">on the Trek</span></p>
                                    <p className="boxslidertext">Magnificent Mountains</p>
                                </div>
                            </div>
                        </div>
                    </div> */}
        </div>

        <div style={{ transform: "translate(0px,550px)" }}>
          <h1 className="hometext">
            <span className="my-colour-1" style={{ fontFamily: "cursive" }}>
              <i
                className="fas fa-plane"
                style={{ transform: "rotate(315deg)" }}
              />{" "}
              Singh
            </span>{" "}
            <span className="text-secondary">Holidays</span>
          </h1>
          <div className="my-bgcolour2 pt-5">
            <div className="row row-cols-1 row-cols-md-4 g-0 mt-3 mb-5 justify-content-around">
              <div className="col">
                <div className="card shadow shadow-sm">
                  <img src={cardimg1} className="card-img-top" alt="..." />
                </div>
              </div>
              <div className="col">
                <div className="card h-100">
                  <img
                    src={cardimg2}
                    className="card-img-top h-100"
                    alt="..."
                  />
                </div>
              </div>
              <div className="col">
                <div className="card h-100 shadow shadow-sm">
                  <img
                    src={cardimg3}
                    className="card-img-top h-100"
                    alt="..."
                  />
                </div>
              </div>
            </div>
            <div className="row row-cols-1 row-cols-md-5  g-0 mt-2 mb-4 p-5 mb-5 my-bgcolour1 justify-content-between shadow shadow-md">
              <div className="col ">
                <div className="inputContainer">
                  <i className="fas fa-compass text-white"> </i>
                  <input
                    className="searchinput w-100 my-bgcolour1 "
                    type="text"
                    placeholder="Where To?"
                    name="Where To"
                  />
                </div>
              </div>
              <div className="col">
                <div className="inputContainer">
                  <i className="fas fa-calendar-alt text-white"></i>
                  {/* <input className="searchinput bg-secondary w-100" type="text" placeholder="Month" /> */}
                  <select
                    className="searchinput w-100 my-bgcolour1"
                    name="month"
                  >
                    <option value="">Month</option>
                    <option value="1">January</option>
                    <option value="2">February</option>
                    <option value="3">March</option>
                    <option value="4">April</option>
                    <option value="5">May</option>
                    <option value="6">June</option>
                    <option value="7">July</option>
                    <option value="8">August</option>
                    <option value="9">September</option>
                    <option value="10">October</option>
                    <option value="11">November</option>
                    <option value="12">December</option>
                  </select>
                </div>
              </div>
              <div className="col">
                <div className="inputContainer">
                  <i className="fas fa-thumbtack text-white"></i>
                  {/* <input className="searchinput bg-secondary w-100" type="text" placeholder="Where To" /> */}
                  <select
                    className="searchinput w-100 my-bgcolour1"
                    name="type[]"
                  >
                    <option value="">Travel Type</option>
                    <option value="beaches">Beaches</option>
                    <option value="best-deals">Best Deals</option>
                    <option value="group-tours">Group Tours</option>
                    <option value="ski-trips">Ski Trips</option>
                    <option value="summer-deal">Summer Deal</option>
                  </select>
                </div>
              </div>
              <div className="col">
                <div className="inputContainer ">
                  <button
                    type="button"
                    className="btn btn-warning my-colour-1 px-5"
                  >
                    Find Now
                  </button>
                </div>
              </div>
            </div>
            <div className="m-5">
              <h2 className="boldtext">
                Choose The{" "}
                <span className="fs-1 fw-bold my-colour-1">Destination</span>
                <br />{" "}
                <span className="fs-1 fw-bold my-colour-1">Just Right</span> For
                Your Vacation{" "}
              </h2>
              <p style={{ paddingLeft: "23px" }}>
                Tailor made packages to fit your travel needs
                <br />
                We understand every travellers need and provide 
                <br/> 
                accordingly to suits your requirements so be it 
                <br/>
                Honeymood packages, Leisure tour, Business Tour etc.{" "}
              </p>
            </div>
            <div className="my-bgcolour2">
              <h1 className="fs-2 fw-bold my-colour-1">
                <span className="border-bottom-secondary">
                  Our Tour Packages
                </span>
              </h1>

              {/* Data map Top 10 FreeSalepackages api */}
              {
                 this.state.Loading ? <div className=" d-flex justify-content-center my-3"><Loader/></div>:
              <div className="row row-cols-1 row-cols-md-3 g-0 justify-content-between py-5">
               {
               
                
                  this.state.Packages.map((e,i) => (
                    <div
                      className="col px-4 py-3"
                      style={{ overflow: "hidden", fontWeight: "400" }}
                      key={i}
                    >
                      <Link
                        className="card shadow shadow-sm"
                        style={{ overflow: "hidden", textDecoration: "none" }}
                        to={{
                          pathname: "/tourdetails",
                          state: { id: e.freeSalePackageId, name: e.freeSalePackageName,Image :e.freeSalePackageBgimg },
                        }}
                      >
                      {console.log(e)}
                        <span style={{ overflow: "hidden" }}>
                          <img
                            src={e.freeSalePackageBgimg}
                            className="card-img-top imghover"
                            alt="..."
                            style={{ height: "250px", objectFit: "cover" }}
                          />
                        </span>
                        <div
                          className="card-body my-colour-1"
                          style={{ overflow: "hidden" }}
                        >
                          <h5
                            className="card-title d-flex justify-content-between"
                            style={{ fontSize: "22px" }}
                          >
                            <span style={{ fontWeight: "600" }}>{e.freeSalePackageName}</span>
                            <span>GEL </span>
                          </h5>
                          <h5 className="card-title text-secondary">
                            {/* <span>
                              {e.rating}{" "}
                              {e.rating >= 7
                                ? "Superb"
                                : e.rating < 7 && e.rating >= 5
                                ? "Good"
                                : e.rating < 5 && e.rating < 1
                                ? "bad"
                                : "worst"}
                            </span> */}
                          </h5>
                          {/* <p className="card-text text-secondary my-3">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> */}
                        </div>
                        <div className="card-footer text-white py-3 my-bgcolour">
                          <div className="d-flex justify-content-around">
                            <span>
                              <i className="far fa-clock"></i> {e.packageDays} Days/ {parseInt(e.packageDays) + 1} Nights
                            </span>
                            <span>
                              <i className="far fa-user"></i> {e.minAge}
                            </span>
                            <span>
                              <i className="fas fa-map-marker-alt"></i> {e.freeSalePackageName}
                            </span>
                          </div>
                        </div>
                      </Link>
                    </div>
                    
                  ))}
               
                
              </div>
              }
              {/* <div className="row row-cols-1 row-cols-md-3 g-0 justify-content-between py-5">
                {this.state.toursList.map((e) => (
                  <div
                    className="col px-4 py-3"
                    style={{ overflow: "hidden", fontWeight: "400" }}
                  >
                    <Link
                      className="card shadow shadow-sm"
                      style={{ overflow: "hidden", textDecoration: "none" }}
                      to={{
                        pathname: "/tourdetails",
                        state: { id: e.id, name: e.dest },
                      }}
                    >
                      <span style={{ overflow: "hidden" }}>
                        <img
                          src={e.img}
                          className="card-img-top imghover"
                          alt="..."
                          style={{ height: "250px", objectFit: "cover" }}
                        />
                      </span>
                      <div
                        className="card-body my-colour-1"
                        style={{ overflow: "hidden" }}
                      >
                        <h5
                          className="card-title d-flex justify-content-between"
                          style={{ fontSize: "22px" }}
                        >
                          <span style={{ fontWeight: "600" }}>{e.dest}</span>
                          <span>GEL {e.amount}</span>
                        </h5>
                        <h5 className="card-title text-secondary">
                          <span>
                            {e.rating}{" "}
                            {e.rating >= 7
                              ? "Superb"
                              : e.rating < 7 && e.rating >= 5
                              ? "Good"
                              : e.rating < 5 && e.rating < 1
                              ? "bad"
                              : "worst"}
                          </span>
                        </h5>
                       
                      </div>
                      <div className="card-footer text-white py-3 my-bgcolour">
                        <div className="d-flex justify-content-around">
                          <span>
                            <i className="far fa-clock"></i> {e.days}
                          </span>
                          <span>
                            <i className="far fa-user"></i> {e.age}+
                          </span>
                          <span>
                            <i className="fas fa-map-marker-alt"></i> {e.dest}
                          </span>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div> */}
            </div>

            {/* <div className="row row-cols-1 row-cols-md-5 g-0 mx-5 justify-content-between">
              {this.state.data.map((e) => (
                <div className="col m-1" style={{ overflow: "hidden" }}>
                  <div
                    className="card imghover my-colour-1"
                    style={{ overflow: "hidden" }}
                  >
                    <img src={e.img} className="card-img-top" alt="..." />
                    <div className="cardhover">
                      <div className="card-body d-flex my-0 py-0">
                        <h5 className="card-title w-100">
                          {e.city}
                          <span className="card-title float-end">{e.cost}</span>
                        </h5>
                      </div>
                      <div className="card-body m-0 d-flex justify-content-around">
                        <Link
                          as="button"
                          className="btn btn-sm bg-warning my-colour-1 sw fw-bold"
                          to={{
                            pathname: "/tourdetails",
                            state: { id: e.id, name: e.city },
                          }}
                        >
                          Book Now
                        </Link>
                        <Link
                          as="button"
                          className="btn btn-sm text-white border border-white sw fw-bold"
                          to={{
                            pathname: "/tourdetails",
                            state: { id: e.id, name: e.city },
                          }}
                        >
                          Details
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div> */}
            <div className="row g-0">
              <div className="col-md-6">
                <div className="card m-3" style={{ border: "none" }}>
                  <div className="card-body py-4">
                    {/* <p className="text-danger">Been there recently?</p> */}
                    <span className="d-flex justify-content-center">
                      <strong className="card-title my-colour-1 mb-4 ml-1 fs-2 border-bottom-secondary">
                        About Us
                      </strong>
                    </span>
                    <p className="card-text fs-5">
                      We are offering travel services around Georgia, 
                      combining our energy and enthusiasm. Our High quality
                      service defined as part of our organisational values and missions.
                      Which are embibed in each and every person working at Singh Holidays. 
                      We have combination of travel experts, advanced systems and innovations 
                      you would ever expect from any travel agency. Our main strength is 
                      that we design tailor made packages which are suitable for our
                      customer needs’. We render comprehensive and professional services
                      at reasonable cost. We welcome you to discover some mesmerising 
                      places of Georgia and explore Georgian culture, traditions 
                      and its history.
                    </p>
                    <span className="d-flex justify-content-center">
                      <Link
                        className="card-title my-colour-1 mb-4 ml-1 fs-5"
                        to={{ pathname: "/aboutus" }}
                      >
                        Learn More{" "}
                        <i className="fas fa-long-arrow-alt-right"></i>
                      </Link>
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card p-3" style={{ border: "none" }}>
                  <div className="card-body">
                    <ReviewComp />
                  </div>
                </div>
              </div>
            </div>

            <div className="row g-0 m-4">
              <div className="col-sm-6 p-4">
                <div className="d-flex align-items-center justify-content-center w-100 h-100">
                  <img src={logo} alt="img" style={{ width: "30%" }} />
                </div>
              </div>
              <div className="col-sm-6">
                {/* <div className="align-items-center"> */}
                <span className="my-colour-1 fs-1 fw-bold">SUBSCRIBE</span>
                <br />
                <span className="text-secondary fs-5">
                  To receive promotions and newsletter
                </span>
                <br />
                <TextField
                  style={{ width: "inherit" }}
                  label="Your Email Address"
                  type="email"
                  placeholder="Email"
                ></TextField>
                <button className=" btn btn-md my-bgcolour text-white px-5 mt-2">
                  Subscribe
                </button>
                {/* </div> */}
              </div>
            </div>
            <div className="footerborder">
              <Footer />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
