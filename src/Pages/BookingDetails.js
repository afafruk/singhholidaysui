import React, { useEffect, useState } from 'react'
import Footer from '../Component/Footer'
import Header from '../Component/Header'
import { Autocomplete, FormControl, Stack, Step, StepLabel, Stepper, TextField } from '@mui/material'
import { styled } from '@mui/material/styles';
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import InventoryIcon from '@mui/icons-material/Inventory';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import { Country }  from 'country-state-city';
import moment from 'moment';
import { useHistory } from "react-router-dom"
import {GetPkgBookingModelById} from '../services/PackageApi'
import {AddPkgBookingModel} from '../services/PackageApi'
import { usePDF } from '@react-pdf/renderer';
import Pkgpdf from '../Component/Pdf/Pkgpdf';
import { Spinner } from 'react-bootstrap';


  const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
      top: 22,
    },
    [`&.${stepConnectorClasses.active}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        backgroundImage:
          'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
      },
    },
    [`&.${stepConnectorClasses.completed}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        backgroundImage:
          'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
      },
    },
    [`& .${stepConnectorClasses.line}`]: {
      height: 3,
      border: 0,
      backgroundColor:
        theme.palette.mode === 'dark' ? theme.palette.grey[900] : '#BBBBC0',
      borderRadius: 1,
    },
  }));

  
  const ColorlibStepIconRoot = styled('div')(({ theme, ownerState }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#ccc',
    zIndex: 1,
    color: '#fff',
    width: 50,
    height: 50,
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    ...(ownerState.active && {
      backgroundImage:
        'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
      boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
    }),
    ...(ownerState.completed && {
      backgroundImage:
        'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
    }),
  }));
  

const BookingDetails = (props) => {
      const [loading, setLoading] = useState(false);
      const [country, setCountry] = useState('')
      const [countrycode, setCountrycode] = useState('')
      const [countries, setcountries] = useState("");
      const [PackageData, setPackageData] = useState('')
      // const [pdfFile, setpdfFile] = useState('')
      const [instance, updateInstance] = usePDF(
        { document: <Pkgpdf pkgdata={props.location.state} pkgrate={props.location.state.TotalPrice}/> }
        );

      const [UserBooking, setUserBooking] = useState({
        // id : new Date().getTime().toString(),
        CustomerName : "",
        CustomerPhone : "",
        CustomerEmail : "",
        CustomerAddress : "",
        CutomerNote : "",
      })

      const history = useHistory();

    const getBookingDetails=async(id)=>{
        const res = await GetPkgBookingModelById(id)
        setPackageData(res.data)
    }
   
    function ColorlibStepIcon(props) {
        const { active, completed, className } = props;
  
        const icons = {
          1: <InventoryIcon onClick={()=>history.goBack()}/>,
          2: <GroupAddIcon />,
          3: <RequestQuoteIcon />,
          4: <DoneAllIcon />,
        };
      
        return (
          <ColorlibStepIconRoot ownerState={{ completed, active }} className={className}>
            {icons[String(props.icon)]}
          </ColorlibStepIconRoot>
        );
      }
    const steps = ['Select Tour Package', 'Customer Details', 'Payment','completed'];

    const handleDataChange =(e)=>{
        const name = e.target.name;
        const value = e.target.value;
        setUserBooking({...UserBooking,[name]:value})
    }

    const handleDataSubmit =(e)=>{
        e.preventDefault()
        setLoading(true)
        // if(UserRegistration===''||UserRegistration===undefined){
            let current_time = moment().format("MM ddd, YYYY hh:mm:ss a")
            let search = window.location.origin

          let data ={
            ...UserBooking,
            CustomerCountry:country,
            BookedOn:current_time,
            BookingStartDate:moment(props.location.state.startDate).format("MM-DD-YYYY"),
            BookingEndDate: moment(props.location.state.EndDate).format("MM-DD-YYYY"),
            BookingPaxCount:props.location.state.PaxCountA.toLocaleString(),
            BookingTotalPrice: props.location.state.TotalPrice,
            BookingData:JSON.stringify(props.location.state.data),
            BookingFrontPath:search
          }

          let formData = new FormData();
          if(!instance.loading && !instance.error){
              var file = new File([instance.blob], `Pkg${new Date()}.pdf`, {
          type: "application/pdf",
          lastModified: new Date()
        });
            formData.append('BookingImage',file)
          }
          formData.append('BookingDataform',JSON.stringify(data))




          AddPkgBookingModel(formData).then((res)=>{
            if(res.status===200){
              // getBookingDetails(2)
              getBookingDetails(res.data.bookingId)
              setLoading(false);
              alert('Booking Done Smoothly now Please complete your payment')

              window.location.assign(res.data.stripeUrl);
             
            
            }else{
              alert('something is wrong')
              setLoading(false);
            }
          }).catch(()=>setLoading(false))
    }

    const Downloadpdf = ()=>{

      if(!instance.loading && !instance.error){
          window.open(instance.url)
      }

    }

    const handleclick=()=>{
      Downloadpdf()
    }
    
    
    
    return (
      <div>
        <span className="header-comp"><Header /></span>
        <div className='hero-container' style={{ background: `url(${props.location.state.Image}) center center/cover no-repeat` }}>
</div>
        <div style={{ transform: "translate(0px,250px)", width: '100%' }}>
        <h1 className="coverh1">{props.location.state.Name}</h1>
                    
                    <div className="row g-0">
                        <div className="col-md-1 g-0 my-bgcolour2"></div>
                        <div className="col-md-7 g-0 my-bgcolour2">
                          
                                <div>
                                    <div className="px-5 py-3" style={{ fontWeight: "500", }}>
                                    <Stack sx={{ width: '100%' }} spacing={4}>
                                    
                                    <Stepper alternativeLabel activeStep={1} connector={<ColorlibConnector />}>
                                    {steps.map((label) => (
                                    <Step key={label}>
                                        <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
                                    </Step>
                                    ))}
                                </Stepper>
                                    </Stack>
                                    </div>

                                   
                                </div>

                                
                                <div className="row g-0">
                            {/* <div className="col-md-1"></div> */}
                            <div className="col-md-11 py-4 px-2" style={{backgroundColor:"#f6f7fa"}}>
                            <form onSubmit={handleDataSubmit}>

                             <div className="card-body p-md-5 text-black">
                <h5 className="mb-5 text-uppercase">Customer Details</h5>

                <div className="row">
                  <div className="col-md-6 mb-4">
                    <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                    <TextField id="outlined-basic" label="FirstName" variant="outlined" name="CustomerName" onChange={handleDataChange}/>
                    </FormControl>
                  </div>
                  <div className="col-md-6 mb-4">
                    <FormControl fullWidth  sx={{ m: 1, width: '25ch' }} variant="outlined">
                    <TextField id="outlined-basic" label="LastName" variant="outlined" />
                                        </FormControl>
                  </div>
                </div>
                <div className="col-md-12 mb-4">
                <FormControl fullWidth  sx={{ m: 1, width: '95%' }} variant="outlined">
                    <TextField id="outlined-basic" label="Email" variant="outlined" name="CustomerEmail" onChange={handleDataChange}/>
                                        </FormControl>
                </div>
                <div className="col-md-12 mb-4">
                <FormControl fullWidth  sx={{ m: 1, width: '95%' }} variant="outlined">
                    <TextField id="outlined-basic" label="Phone" variant="outlined" name="CustomerPhone" onChange={handleDataChange}/>
                                        </FormControl>
                </div>

               
                  <div className="col-md-12 mb-4">

                  <FormControl sx={{ minWidth: '95%' }}>
                       
                       <Autocomplete
                    // {...defaultPropsCountry}
                    // sx={{ width: 300 }}
                    autoHighlight
                    id="auto-complete"
                    name="countryname"
                    options={ Country.getAllCountries()}
                 getOptionLabel={(option) => `${option.name}`}
                    key={(option) => `${option.name}`}
                    autoComplete={false}
                    includeInputInList
                    isOptionEqualToValue={(option,value)=>
                    option.name === value.name}
                    noOptionsText={"Country Not Available"}
                    onChange={(e, option, reason) => {
                        
                            if(option!==undefined && option!==null){
                                setCountry(option.name)
                                setCountrycode(option.isoCode)
                                setcountries({...countries,[e.target.name]: e.target.value})
                             }else{
                                setCountry('')
                                setCountrycode('')
                             }
                        }
                    }
                    renderInput={(params) => (
                      <TextField 
                      {...params}
                      type='text'
                      name='county'
                      value={country}
                    label={`Country : ${country}`} 
                      placeholder='Select Country'
                    //    variant="standard" 
                       />
                    )}
                  />

                   </FormControl>

                  </div>

                  <div className="col-md-12 mb-4">
                <FormControl fullWidth  sx={{  width: '95%' }} variant="outlined">
                <TextField
          id="outlined-multiline-static"
          label="Address"
          multiline
          rows={4}
          name="CustomerAddress"
          onChange={handleDataChange}
        />
            </FormControl>
                </div>
                <h5>Add Note</h5>
                  <div className="col-md-12 mb-4">
                <FormControl fullWidth  sx={{  width: '95%' }} variant="outlined">
                <TextField
                    id="outlined-multiline-static"
                    label="Note"
                    multiline
                    rows={4}
                    name="CutomerNote"
                    onChange={handleDataChange}                   
                     />
            </FormControl>
                </div>
                
                
                <div className="d-flex justify-content-center pt-3">
                  <button 
                  type="submit" 
                  disabled={loading}
                  className="btn btn-lg ms-2 my-bgcolour text-uppercase text-white" 
                  onSubmit={handleDataSubmit}>
                     {loading ? (
                                  <Spinner
                                  class="spinner-border spinner-border-sm"
                                    as="span"
                                    animation="border"
                                    size="sm"
                                    role="status"
                                    aria-hidden="true"
                                  />
                                ) : (
                                  "Confirm Booking"
                                )}</button>
                  
            
                </div>

                            </div> 
                                </form>
                                   
      
                            </div>
                            <div className="col-md-1 my-bgcolour2"></div>
                             </div>
                                      
                               
                          
                                
                           
                        </div>

                        {/* <div className="col-md-1 my-bgcolour2"></div> */}
                        <div className="col-md-3 my-bgcolour2 align-item-center booking-form">
                        <div className="card bg-white p-4 my-3 ">
                                <h3 className="pt-3 pb-3">Book This Tour</h3>
                               
                              <div className=' d-flex flex-row align-baseline'>
                                <h5 className='fw500'>Start Date : </h5><p className=' ps-2 SmallF'>
                                    {
                                moment(props.location.state.startDate).format("MM-DD-YYYY")}</p>
                              </div>
                              <div className=' d-flex flex-row align-baseline'>
                                <h5 className='fw500'>End Date : </h5><p className=' ps-2 SmallF'>
                                {
                                moment(props.location.state.EndDate).format("MM-DD-YYYY")}</p>
                              </div>
                              {/* <div className=' d-flex flex-row align-baseline'>
                                <h5 className='fw500'>Duration : </h5><p className=' ps-2 SmallF'>12/20/22</p>
                              </div> */}
                              <div className=' d-flex flex-row align-baseline'>
                                <h5 className='fw500'>Pax Count : </h5><p className=' ps-2 SmallF'>{props.location.state.PaxCountA} Adults {props.location.state.PaxCountC} Child</p>
                              </div>
                              <hr/>
                               <div className='row pt-4'>
                                <div className='col-6'>
                                    <h6 className='fw500'>
                                    Total Price :
                                    </h6>
                                </div>
                                <div className='col-6 fw500'>
                                    <h5>${props.location.state.TotalPrice}</h5>
                                </div>
                                <button className="btn btn-lg ms-2 my-bgcolour text-uppercase text-white" onClick={handleclick}> itnerary</button>
                               </div>
                            </div>
                          

                            <div className="card InfoCard">
                            <div className="card-body">
                                <h5 className="card-title">Pay Safely with Us</h5>
                                <div className=' d-flex flex-row'>
                                <i className="fas fa-lock me-2 fa-3x"></i>                                
                                <p className="card-text">The payment is encrypted and
                                transmitted securely with an SSL
                                protocol.</p>
                                    </div> 
                               
                            </div>
                            </div>
                        </div>
                        <div className="col-md-1 my-bgcolour2"></div>

                       
                    </div>
                    <Footer />
        </div>
    </div>
  )
}

export default BookingDetails