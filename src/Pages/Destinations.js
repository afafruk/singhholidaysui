import React, { Component } from 'react'
import Header from '../Component/Header'
import Footer from '../Component/Footer'
import { Link } from 'react-router-dom'
import destinationcover from '../images/destinationcover.jpg'
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

export class Destinations extends Component {
    constructor() {
        super()
        this.state = {
            destinationsList: [
                { id: 0, dest: 'Kazbegi', img: destimg14 },
                { id: 1, dest: 'Tbilisi', img: destimg2 },
                { id: 2, dest: 'Mtskheta', img: destimg3 },
                { id: 3, dest: 'Gori', img: destimg4 },
                { id: 4, dest: 'Zugdidi', img: destimg5 },
                { id: 5, dest: 'Kutaisi', img: destimg6 },
                { id: 6, dest: 'Mestia', img: destimg7 },
                { id: 7, dest: 'Borjomi', img: destimg8 },
                { id: 8, dest: 'Sairme', img: destimg9 },
                { id: 9, dest: 'Akhatsikhe', img: destimg10 },
                { id: 10, dest: 'Kvareli', img: destimg11 },
                { id: 11, dest: 'Sighnaghi', img: destimg12 },
                { id: 12, dest: 'Gudauri', img: destimg13},
                { id: 13, dest: 'Bakuriani', img: destimg1 },
                { id: 14, dest: 'Hatsvali', img: destimg15 },
                { id: 15, dest: 'Tetnuldi', img: destimg16 },
                { id: 16, dest: 'Goderdzi', img: destimg16 },
                { id: 17, dest: 'Anaklia', img: destimg16 },
            ]
        }
    }
    render() {
        return (
            <div>
                 <span className="header-comp"><Header /></span>

                <div className='hero-container destination-cover'>

                </div>
                <div style={{ transform: "translate(0px,500px)" }}>
                    <h1 className="coverh1">Destinations</h1>
                    <div className="my-bgcolour2">
                        <div className="text-secondary">
                            <div style={{ padding: '100px' }}>
                                <h2 className="boldtext">
                                    Spectacular <span className="fw-bold my-colour-1">Georgia</span><br /> <span className="fw-bold my-colour-1">Just Right</span> For Your Vacation </h2>
                                <p style={{ paddingLeft: '23px' }}>
                                    Mesmerising places you ever imagined to be present on this earth.
                                    <br />
                                    We welcome you to Georgia, Explore and be adventurous with Singh Holidays. </p>
                            </div>
                        </div>

                        <div className="row row-cols-1 row-cols-md-4 px-5 pb-5 g-0 justify-content-between">
                            {this.state.destinationsList.map(e =>
                                <div className="col p-2 fw-solid" style={{ overflow: "hidden"}}>
                                    <Link className="card glasseffect text-white justify-content-center" style={{ alignItems: 'center',overflow: "hidden" }}
                                        to={{ pathname: "/destinationdetails", state: { id: e.id, name: e.dest } }}
                                    >
                                        <img src={e.img} className="card-img-top imghover" alt="..." style={{height:'300px'}}/>
                                        <h1 className="d-flex fs-3 " style={{ position: 'absolute' }}><b>{e.dest}</b></h1>
                                    </Link>
                                </div>
                            )}
                        </div>
                        <Footer />
                    </div>
                </div>

            </div>
        )
    }
}

export default Destinations
