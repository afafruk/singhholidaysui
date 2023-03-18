import React, { Component } from 'react'
import commentbg from "../images/testimonials-background-img-1.jpg"

class ReviewComp extends Component {
    render() {
        return (
            <div>

                <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
                    <div className="carousel-inner justify-content-center">
                        <div className="carousel-item active" data-bs-interval="2000">
                            <img src={commentbg} className="d-block" alt="..." />
                            <div className="caroseltext d-flex align-items-start flex-column ">
                                <span className="text-danger" style={{ fontSize: "22px" }}><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i></span>
                                <h5 className="card-text mt-5 mb-auto">Places Like Gerogia is most enchanting for me and my family. More than this we like the guesture and services provided to us by professional and experienced travel agency like Singh holidays. We loved the entire tour and enjoyed it thoroughly. i would definately recommend Singh holidays to everyone who like to visit Georgia</h5>
                                <p className="mb-5 align-self-baseline">By <span className="text-danger"> Nazeer Ahmed - Businessman (Qatar) </span></p>
                            </div>
                        </div>
                        <div className="carousel-item" data-bs-interval="2000">
                            <img src={commentbg} className="d-block" alt="..." />
                            <div className="caroseltext d-flex align-items-start flex-column ">
                                <span className="text-danger" style={{ fontSize: "22px" }}><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star-half"></i></span>
                                <h5 className="card-text mt-5 mb-auto">Wonderful places and wonderful team singh holidays. This was my dream trip to Georgia, i love the places like Gaduari, Tiblisi etc. Thanks to Singh Holidays for full filling my dream and providing me with best services in Georgia. </h5>
                                <p className="mb-5 align-self-baseline">By <span className="text-danger"> Manpreet Badal - Industrialist (India)</span></p>
                            </div>
                        </div>
                        <div className="carousel-item" data-bs-interval="2000">
                            <img src={commentbg} className="d-block" alt="..." />
                            <div className="caroseltext d-flex align-items-start flex-column ">
                                <span className="text-danger" style={{ fontSize: "22px" }}><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i></span>
                                <h5 className="card-text mt-5 mb-auto">Singh holidays and special thanks to Gurjeet he was wonderful throughout our tour in Georgia, his passion towards serving clients is unmatched. Wishing Singh holidays and the team to grow higher and higher and to become the best inbound travel agency of Gerogia.</h5>
                                <p className="mb-5 align-self-baseline">By <span className="text-danger"> Sunita Chauhan -Zoologist (Kashmir-India)</span></p>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        )
    }
}

export default ReviewComp
