import React, { Component } from 'react'
import Header from '../Component/Header'
import Footer from '../Component/Footer'
import { Link } from 'react-router-dom'
import { DestinationDetails } from '../Database/DbDestinations'
import destimg1 from '../images/destinations-1-img-1.jpg'
import destimg2 from '../images/destinations-1-img-2.jpg'
import destimg3 from '../images/destinations-1-img-3.jpg'
import destimg4 from '../images/destinations-1-img-4.jpg'
import destimg5 from '../images/destinations-1-img-5.jpg'
import destimg6 from '../images/destinations-1-img-6.jpg'
import destimg7 from '../images/destinations-1-img-7.jpg'
import destimg8 from '../images/destinations-1-img-8.jpg'
import destimg9 from '../images/destinations-1-img-9.jpg'
import destimg10 from '../images/destinations-1-img-10.jpg'
import destimg11 from '../images/destinations-1-img-11.jpg'
import destimg12 from '../images/destinations-1-img-12.jpg'
import destimg13 from '../images/destinations-1-img-13.jpg'
import destimg14 from '../images/destinations-1-img-14.jpg'
import destimg15 from '../images/destinations-1-img-15.jpg'
import destimg16 from '../images/destinations-1-img-16.jpg'

export class DestinationsDetails extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.location.state===undefined?'':this.props.location.state.id,
            name: this.props.location.state===undefined?'':this.props.location.state.name,
            dest:'',
            imgBg:'',
            img:[],
            Desc:'',
        }
    }

    componentDidMount(){
        let id = this.props.location.state.id
        let data = DestinationDetails.filter(e=>e.id===id)
        console.log(id,DestinationDetails)
        console.log(id,data)
        data.map(e=>
            this.setState({
                dest:e.dest,
                img:e.img,
                imgBg:e.imgBg,
                Desc:e.Desc,
            }))
    }

    render() {
        // let destItem = this.state.DbDescription.find(e => e.id === this.state.id)
        return (
            <div>
                 <span className="header-comp"><Header /></span>

                <div className='hero-container' style={{background:`url(${this.state.imgBg}) center center/cover no-repeat`}}></div>

                <div style={{ transform: "translate(0px,500px)" }}>
                    <h1 className="coverh1">{this.state.name}</h1>
                    <div className="my-bgcolour2">
                        <div className="row g-0">
                            <div className="col-md-2 g-0"></div>
                            <div className="col-md-8 g-0">
                                <div className="bg-white">
                                    <div className="card-body">
                                        <h2 className="card-title">
                                            Lovely <span className="fs-1 fw-bold my-colour-1">{this.state.name}</span>
                                        </h2>
                                        <p className="card-text text-secondary my-3">
                                        {
                                           this.state.Desc
                                        }
                                        </p>
                                        
                                    </div>
                                </div>
                                {/* <div className="row row-cols-1 row-cols-md-4 g-0">
                                    {this.state.destinationsList.map(e =>
                                        <div className="col p-2">
                                            <div className="card">
                                                <img src={e.img} className="card-img-top" alt="..." />
                                            </div>
                                        </div>
                                    )}
                                </div> */}
                                <div className="bg-white my-border-none">
                                    <div className="card-body">
                                       
                                    </div>
                                </div>
                                <h5 className="card-title"><span className="fs-2 my-colour-1">Make Your Own Memories</span></h5>
                                <div className="row row-cols-1 row-cols-md-3 g-0">
                                
                                    {this.state.img.map(e =>
                                        <div className="col p-2">
                                            <div className="card">
                                                <img src={e} className="card-img-top" alt="..." style={{height:'300px'}}/>
                                            </div>
                                        </div>
                                    )}
                                </div>

                            </div>
                            <div className="col-md-2 g-0"></div>
                        </div>
                        <Footer />
                    </div>
                </div>

            </div>
        )
    }
}

export default DestinationsDetails
