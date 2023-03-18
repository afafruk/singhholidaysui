import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {GetPkgBookingPaymentId} from '../../services/PackageApi'
import Header from '../Header'

const PaymentDone = () => {
  const [detaisl, setdetaisl] = useState()
    const params = useParams()
    useEffect(() => {
      getPaymentData()
    }, [])


    const getPaymentData =async()=>{
        const res = await GetPkgBookingPaymentId(params.id)
        setdetaisl(res.data)
    }    
  return (
    <div>
      <span className="header-comp"><Header /></span>

        <div className="card mt-5">
  <div className="card-body">
  
   {detaisl!==null&&detaisl!==undefined&&detaisl!==""? <div className="container mb-5" style={{marginTop:"8rem"}}>
      <div className="row d-flex align-items-baseline">
        <div className="col-xl-9">
          <p style={{color: "#7e8d9f",fontSize: "20px"}}> Booking &gt;&gt; <strong>ID: {detaisl?.bookingId}</strong></p>
        </div>
      </div>
      <div className="container" >
        <div className="col-md-12">
          <div className="text-center">
            {/* <i className="far fa-building fa-4x ms-0" style={{color:"#8f8061"}}></i> */}
            <p className="pt-2">singh Holidays</p>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-8">
            {/* <ul className="list-unstyled">
              <li className="text-muted">To: <span style={{color:"#8f8061"}}>John Bootstrap</span></li>
              <li className="text-muted">Street, City</li>
              <li className="text-muted">State, Country</li>
              <li className="text-muted"><i className="fas fa-phone"></i> 123-456-789</li>
            </ul> */}
          </div>
          <div className="col-xl-4">
            {/* <p className="text-muted">Invoice</p>
            <ul className="list-unstyled">
              <li className="text-muted"><i className="fas fa-circle" style={{color:"#8f8061"}}></i> <span
                  className="fw-bold">ID:</span>#123-456</li>
              <li className="text-muted"><i className="fas fa-circle" style={{color:"#8f8061"}}></i> <span
                  className="fw-bold">Creation Date: </span>Jun 23,2021</li>
              <li className="text-muted"><i className="fas fa-circle" style={{color:"#8f8061"}}></i> <span
                  className="me-1 fw-bold">Status:</span><span className="badge bg-warning text-black fw-bold">
                  Unpaid</span></li>
            </ul> */}
          </div>
        </div>
        {/* <div className="row my-2 mx-1 justify-content-center">
          <div className="col-md-2 mb-4 mb-md-0">
            <div className="
                        bg-image
                        ripple
                        rounded-5
                        mb-4
                        overflow-hidden
                        d-block
                        " data-ripple-color="light">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/new/img(4).webp"
                className="w-100" height="100px" alt="Elegant shoes and shirt" />
              <a href="#!">
                <div className="hover-overlay">
                  <div className="mask" style={{backgroundColor: "hsla(0, 0%, 98.4%, 0.2)"}}></div>
                </div>
              </a>
            </div>
          </div>
          <div className="col-md-7 mb-4 mb-md-0">
            <p className="fw-bold">Custom suit</p>
            <p className="mb-1">
              <span className="text-muted me-2">Size:</span><span>8.5</span>
            </p>
            <p>
              <span className="text-muted me-2">Color:</span><span>Gray</span>
            </p>
          </div>
          <div className="col-md-3 mb-4 mb-md-0">
            <h5 className="mb-2">
              <s className="text-muted me-2 small align-middle">$1500</s><span className="align-middle">$1050</span>
            </h5>
            <p className="text-danger"><small>You save 25%</small></p>
          </div>
        </div> */}
        <hr/>
        <div className="row">
          <div className="col-xl-8">
            <p className="ms-3">payment information</p>
          </div>
          <div className="col-xl-3">
            <ul className="list-unstyled">
              {/* <li className="text-muted ms-3"><span className="text-black me-4">Booking Id</span>{detaisl.bookingId}</li> */}
              <li className="text-muted ms-3 mt-2"><span className="text-black me-4">Booked On</span>{detaisl?.bookedOn}</li>
            </ul>
            <p className="text-black float-start"><span className="text-black me-3"> Total Amount</span><span
                style={{fontSize: "25px"}}>${detaisl?.bookingTotalPrice}</span></p>
          </div>
        </div>
      </div>
    </div>:<div style={{marginTop:"9rem",textAlign:"center"}}>LOADING...</div>}
  </div>
</div>
    </div>
  )
}

export default PaymentDone