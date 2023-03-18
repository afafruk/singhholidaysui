import React, { Component } from 'react'
import Header from '../Component/Header'
import Footer from '../Component/Footer'
import { Link } from 'react-router-dom'
import states, { packagedata } from '../constants/States'
import destimg9 from '../images/destinations-1-img-9.jpg'
import destimg10 from '../images/destinations-1-img-10.jpg'
import destimg11 from '../images/destinations-1-img-11.jpg'
import destimg12 from '../images/destinations-1-img-12.jpg'
import destimg13 from '../images/destinations-1-img-13.jpg'
import destimg14 from '../images/destinations-1-img-14.jpg'
import destimg15 from '../images/destinations-1-img-15.jpg'
import samegrelo from '../images/samegrelo.jpg'
import mtskheta from '../images/mtskheta02.jpg'
import sixdaygeorgia from '../images/6daygeorgia.jpg'
import sevendaygeorgia from '../images/7daygeorgia.jpg'
import sevendayWgeorgia from '../images/7dayWgeorgia.jpg'
import elevenDaysGeorgia from '../images/11daysGeorgia.jpg'
import elevendaysAzGeorgia from '../images/11daysAz-Georgia.jpg'
import FifteenDaysCaucasusPearls from '../images/15DaysCasusasTour.jpg'

import destimg16 from '../images/destinations-1-img-16.jpg'
import Slider from '@mui/material/Slider';
import { Checkbox, createTheme, FormControlLabel, FormGroup } from '@material-ui/core'
import { red } from '@material-ui/core/colors'

const color = red[900];


function valuetext(value) {
    return `$${value}`;
}


export class Tours extends Component {
    constructor() {
        super()
        this.state = {
            toursList: [
                { id: 1, dest: 'Kazbegi', img: destimg14, amount: 750, days: 2, age: 18, rating: 10.0 },
                { id: 2, dest: 'samegrelo', img: samegrelo, amount: 2450, days: 4, age: 2, rating: 9.3 },
                { id: 3, dest: 'Mtskheta', img: mtskheta, amount: 320, days: 5, age: 12, rating: 8.0 },
                { id: 4, dest: '6 Day Exploration of Georgia', img: sixdaygeorgia, amount: 350, days: 6, age: 18, rating: 8.3 },
                { id: 5, dest: '7 Days Visit To Georgia', img: sevendaygeorgia, amount: 750, days: 14, age: 2, rating: 8.7 },
                { id: 6, dest: '7 Days Winter Visit To Georgia', img: sevendayWgeorgia, amount: 950, days: 5, age: 5, rating: 8.7 },
                { id: 7, dest: '10 Days Authentic Georgia', img: elevenDaysGeorgia, amount: 450, days: 12, age: 7, rating: 9.2 },
                { id: 8, dest: '11 Days Azerbaijan-Georgia', img: elevendaysAzGeorgia, amount: 550, days: 6, age: 18, rating: 8.2 },
                { id: 9, dest: '15 Days Caucasus Pearls', img: FifteenDaysCaucasusPearls, amount: 1259, days: 5, age: 18, rating: 8.4 },
                { id: 10, dest: 'Omalo &  Other Villages In Tusheti', img: destimg10, amount: 750, days: 2, age: 18, rating: 10.0 },
                { id: 11, dest: 'Sighnagi', img: destimg11, amount: 550, days: 7, age: 12, rating: 9.0 },
                { id: 12, dest: 'Shatili Khevsureti', img: destimg12, amount: 450, days: 7, age: 2, rating: 7.2 },
                { id: 13, dest: 'Juta', img: destimg13, amount: 450, days: 8, age: 7, rating: 10.0 },
                { id: 14, dest: 'Ushguli & Other Villages In Svaneti', img: destimg9, amount: 450, days: 8, age: 7, rating: 10.0 },
                { id: 15, dest: 'The Canons Of Martvili', img: destimg15, amount: 550, days: 7, age: 12, rating: 9.0 },
                // { id: 16, dest: 'Balhmaro', img: destimg16, amount: {450}', days: 7, age: 2, rating: 7.2 },
                
            ],
            filterList:[
                { id: 1, dest: 'Kazbegi', img: destimg14, amount: 750, days: 2, age: 18, rating: 10.0 },
                { id: 2, dest: 'samegrelo', img: samegrelo, amount: 2450, days: 4, age: 2, rating: 9.3 },
                { id: 3, dest: 'Mtskheta', img: mtskheta, amount: 320, days: 5, age: 12, rating: 8.0 },
                { id: 4, dest: '6 Day Exploration of Georgia', img: sixdaygeorgia, amount: 350, days: 6, age: 18, rating: 8.3 },
                { id: 5, dest: '7 Days Visit To Georgia', img: sevendaygeorgia, amount: 750, days: 14, age: 2, rating: 8.7 },
                { id: 6, dest: '7 Days Winter Visit To Georgia', img: sevendayWgeorgia, amount: 950, days: 5, age: 5, rating: 8.7 },
                { id: 7, dest: '10 Days Authentic Georgia', img: elevenDaysGeorgia, amount: 450, days: 12, age: 7, rating: 9.2 },
                { id: 8, dest: '11 Days Azerbaijan-Georgia', img: elevendaysAzGeorgia, amount: 550, days: 6, age: 18, rating: 8.2 },
                { id: 9, dest: '15 Days Caucasus Pearls', img: FifteenDaysCaucasusPearls, amount: 1259, days: 5, age: 18, rating: 8.4 },
                { id: 10, dest: 'Omalo &  Other Villages In Tusheti', img: destimg10, amount: 750, days: 2, age: 18, rating: 10.0 },
                { id: 11, dest: 'Sighnagi', img: destimg11, amount: 550, days: 7, age: 12, rating: 9.0 },
                { id: 12, dest: 'Shatili Khevsureti', img: destimg12, amount: 450, days: 7, age: 2, rating: 7.2 },
                { id: 13, dest: 'Juta', img: destimg13, amount: 450, days: 8, age: 7, rating: 10.0 },
                { id: 14, dest: 'Ushguli & Other Villages In Svaneti', img: destimg9, amount: 450, days: 8, age: 7, rating: 10.0 },
                
                { id: 15, dest: 'The Canons Of Martvili', img: destimg15, amount: 550, days: 7, age: 12, rating: 9.0 },
                // { id: 16, dest: 'BAKHMARO', img: destimg16, amount: {450}', days: 7, age: 2, rating: 7.2 },
                
            ],
            bgcolour: 0,
            filteramount: [250, 3500]
        }
    }

    componentDidMount(){
        states.setPackageData("")
    }


    handleChange = (event, newValue) => {
        this.setState({ filteramount: newValue });
    };

    handleSort=(value)=>{
        this.setState({bgcolour:value})
        let a = this.state.toursList

        if(value === 0){
            this.setState({filterList:a})
        }

        if(value === 1){
            this.setState({filterList : a.sort(function(a, b){
                if(a.amount < b.amount) { return -1; }
                if(a.amount > b.amount) { return 1; }
                return 0;
            })})
        }
        if(value === 2){
            this.setState({filterList : a.sort(function(a, b){
                if(a.amount > b.amount) { return -1; }
                if(a.amount < b.amount) { return 1; }
                return 0;
            })})
        }
        if(value === 3){
            this.setState({filterList : a.sort(function(a, b){
                if(a.dest < b.dest) { return -1; }
                if(a.dest > b.dest) { return 1; }
                return 0;
            })})
        }
    }


    render() {
        return (
            <div>
                 <span className="header-comp"><Header /></span>

                <div className='hero-container tours-cover'>

                </div>
                <div style={{ transform: "translate(0px,500px)" }}>
                    <h1 className="coverh1">Tours</h1>
                    <div className="row g-0">
                        <div className="col-md-9">
                            <div className="row row-cols-1 row-cols-md-4 g-0" >
                                <span className={`col filter-hover px-3 py-2 text-white text-center d-flex justify-content-around ${this.state.bgcolour === 0 ? 'my-bgcolour2' : ''}`} onClick={() => this.handleSort(0)}><h5 className={`fw-bold filter-item-hover p-2 px-5 ${this.state.bgcolour === 0 ? 'text-black' : ''}`} style={{ borderBottom: `${this.state.bgcolour === 0 ? "4px solid rgb(143,15,28)" : ''}` }}>Tours</h5></span>
                                <span className={`col filter-hover px-3 py-2 text-white text-center d-flex justify-content-around ${this.state.bgcolour === 1 ? 'my-bgcolour2' : ''}`} onClick={() => this.handleSort(1)}><h5 className={`fw-bold filter-item-hover p-2 px-5 ${this.state.bgcolour === 1 ? 'text-black' : ''}`} style={{ borderBottom: `${this.state.bgcolour === 1 ? "4px solid rgb(143,15,28)" : ''}` }}>Price Low To High</h5></span>
                                <span className={`col filter-hover px-3 py-2 text-white text-center d-flex justify-content-around ${this.state.bgcolour === 2 ? 'my-bgcolour2' : ''}`} onClick={() => this.handleSort(2)}><h5 className={`fw-bold filter-item-hover p-2 px-5 ${this.state.bgcolour === 2 ? 'text-black' : ''}`} style={{ borderBottom: `${this.state.bgcolour === 2 ? "4px solid rgb(143,15,28)" : ''}` }}>Price High To Low</h5></span>
                                <span className={`col filter-hover px-3 py-2 text-white text-center d-flex justify-content-around ${this.state.bgcolour === 3 ? 'my-bgcolour2' : ''}`} onClick={() => this.handleSort(3)}><h5 className={`fw-bold filter-item-hover p-2 px-5 ${this.state.bgcolour === 3 ? 'text-black' : ''}`} style={{ borderBottom: `${this.state.bgcolour === 3 ? "4px solid rgb(143,15,28)" : ''}` }}>Name(A-Z)</h5></span>

                            </div>
                            <div className="my-bgcolour2">
                                <div className="row row-cols-1 row-cols-md-2 g-0 justify-content-between py-5">
                                    {this.state.filterList.map(e =>
                                        <div className="col px-4 py-3" style={{ overflow: "hidden", fontWeight: "400", }}>
                                            <Link className="card" style={{ overflow: "hidden", textDecoration: 'none' }} to={{ pathname: "/tourdetails", state: { id: e.id, name: e.dest } }} onClick={this.handleCLick()}>
                                                <span style={{ overflow: "hidden"}}><img src={e.img} className="card-img-top imghover" style={{height:"250px",objectFit:'cover'}} alt="..." /></span>
                                                <div className="card-body" style={{ overflow: "hidden", color: 'rgb(143,15,28)' }}>
                                                    <h5 className="card-title d-flex justify-content-between" style={{ fontSize: "22px" }}>
                                                        <span className="fw-bold">{e.dest}</span>
                                                        <span className="fw-bold">GEL {e.amount}</span>
                                                    </h5>
                                                    <h5 className="card-title"><span>{e.rating} {e.rating >= 7 ? 'Superb' : (e.rating < 7) && (e.rating >= 5) ? 'Good' : (e.rating < 5) && (e.rating < 1) ? 'bad' : 'worst'}</span></h5>
                                                    <p className="card-text text-secondary my-3">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                                </div>
                                                <div className="card-footer text-white py-3 my-bgcolour">
                                                    <div className="d-flex justify-content-around">
                                                        <span><i className="far fa-clock"></i> {e.days}</span>
                                                        <span><i className="far fa-user"></i> {e.age}+</span>
                                                        <span><i className="fas fa-map-marker-alt"></i> {e.dest}</span>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 my-bgcolour2 align-item-center">
                            <div className="p-5 bg-white">
                                <h3 className="py-3">Find Your Destination</h3>
                                <div className="inputContainer py-2" style={{ fontSize: '18px' }}>
                                    <i className="fa fa-search fs-5 fw-normal my-colour-1"> </i>
                                    <input className="my-border-none w-100 pb-1 my-border-bottom text-black" type="text" placeholder="Search Tour?" name="searchtour" style={{ paddingLeft: '40px' }} />
                                </div>
                                <div className="inputContainer py-2" style={{ fontSize: '18px' }}>
                                    <i className="fas fa-compass fs-5 fw-normal my-colour-1"> </i>
                                    <input className="my-border-none w-100 pb-1 my-border-bottom text-black" type="text" placeholder="Where To?" name="whereto" style={{paddingLeft: '40px' }} />
                                </div>
                                <div className="inputContainer py-2" style={{ fontSize: '18px' }}>
                                    <i className="fas fa-calendar-alt fs-5 fw-normal my-colour-1"></i>
                                    {/* <input className="searchinput bg-secondary w-100" type="text" placeholder="Month" /> */}
                                    <select className="my-border-none w-100 pb-1 my-border-bottom text-black" name="month" style={{ paddingLeft: '40px' }}>
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
                                <div className="py-3" style={{ marginLeft: '20px' }} >
                                    <Slider
                                        min={250}
                                        max={3500}
                                        getAriaLabel={() => 'Price Filter'}
                                        value={this.state.filteramount}
                                        onChange={this.handleChange}
                                        valueLabelDisplay="auto"
                                        getAriaValueText={valuetext}
                                        style={{ color: 'rgb(143,15,28)' }}
                                    />
                                    <span>${this.state.filteramount[0]} - ${this.state.filteramount[1]}</span>
                                </div>
                                <div>
                                    <FormControlLabel control={<Checkbox style={{ color: 'rgb(143,15,28)' }} />} label="Best Deals" />
                                    <FormControlLabel control={<Checkbox style={{ color: 'rgb(143,15,28)' }} />} label="Group Tours" />
                                    <FormControlLabel control={<Checkbox style={{ color: 'rgb(143,15,28)' }} />} label="Summer Deals" />
                                    <FormControlLabel control={<Checkbox style={{ color: 'rgb(143,15,28)' }} />} label="Ski Trips" />
                                    <FormControlLabel control={<Checkbox style={{ color: 'rgb(143,15,28)' }} />} label="Beachs" />
                                </div>
                                <div>
                                    <button className="btn w-100 my-bgcolour text-white">Search</button>
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

export default Tours
