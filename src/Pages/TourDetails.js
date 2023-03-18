import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import Person from '@material-ui/icons/Person';
import Header from '../Component/Header'
import Footer from '../Component/Footer'
import '../Skeliton.css'
import './RoomModel.css'
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import {  Table, TableBody, TableCell, TableRow } from '@material-ui/core'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import StarIcon from '@mui/icons-material/Star';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { red } from '@material-ui/core/colors'
// import LocationMaps from './LocationMaps';
// import {TourPlans} from '../Database/Db.js'
import {GetFreeSalePackageById} from '../services/PackageApi';
import {getFinalHotelApi} from '../services/PackageApi' 
import {getHotelsChangeApi} from '../services/PackageApi' 
import {GetHotelContractRatesByHotelId} from '../services/PackageApi' 
import {getSightSeeingById} from '../services/PackageApi' 
import {getMasterDriverById} from '../services/PackageApi' 
import {getTransferAddVehicleById} from '../services/PackageApi' 
import {GetSightSeeingModelByCountryId} from '../services/PackageApi' 
import {getTransferAddVehicle} from '../services/PackageApi' 
import {GetMasterDriverModelByCountryId} from '../services/PackageApi' 
import {GetAddTransfersModelByTransferIdS} from '../services/PackageApi' 
import {GetTransferTravellsBYRouteId} from '../services/PackageApi' 
import {GetAddTransfersModelByPickupAndDropoff} from '../services/PackageApi' 
import {GetAddTransfersModelByPickup} from '../services/PackageApi' 
import {GetAddTransfersModelById} from '../services/PackageApi' 
import {GetHotelModelbyid} from '../services/PackageApi' 
import {GetSightSeeingDetailsModelbyid} from '../services/PackageApi' 
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
// import AddIcon from '@mui/icons-material/Add';
// import RemoveIcon from '@mui/icons-material/Remove';

// import InnovaCresta from '../CarImages/InnovaCresta.jpg'
// import HondaCity from '../CarImages/HondaCity.jpg'

// import { useHistory } from "react-router-dom"


import moment from 'moment/moment';

import states, { packagedata , packagedateS , packagedateE} from '../constants/States'

import reviewimg1 from '../images/user-tour-img-1.png'
import reviewimg2 from '../images/user-tour-img-2.png'
import { Interweave } from 'interweave';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, InputLabel, MenuItem, Radio, Rating, Select, TextField, Tooltip, tooltipClasses, Typography } from '@mui/material'
import { Carousel } from 'react-bootstrap'


const HtmlTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: '#f5f5f9',
      color: 'rgba(0, 0, 0, 0.87)',
      maxWidth: 220,
      fontSize: theme.typography.pxToRem(12),
      border: '1px solid #dadde9',
    },
  }));

const color = red[900];


function valuetext(value) {
    return `$${value}`;
}


export class ToursDetails extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.location.state===undefined?'':this.props.location.state.id,
            name: this.props.location.state===undefined?'':this.props.location.state.name,
            Image: this.props.location.state===undefined?'':this.props.location.state.Image,
            TourPlan:'',
            gallery:[],
            bgcolour:0,
            filteramount:[],
            tourDays: [],
            Inclusions : [],
            Exclusion: [] ,
            history:'',
            rows:[],
            DestName:'', 
            Included:'', 
            Excluded:'', 
            Days:[],
            CountryId:'',
            ImageGallery:[],
            Latitude:0,
            Longitude:0,
            TravelInfo:'',
            NecessoryInformation:'',
            Overview: '',
            PackageDays:0,
            SeasonsS:'',
            SeasonsE:'',
            MaxAgeP:null,
            HotelData:[],
            openRoom:false,
            openHotel:false,
            RoomDatas:[],
            GetHotelsByIds:[],
            TodaysDate:'',
            HotelChangeData:[],
            HotelChangeId:'',
            SelectedHotel:'',
            StayingDayId:'',
            openViewGuide:false,
            ViewGuideData:'',
            openViewCar:false,
            ViewCarDayData:'',
            openSightSeeing:false,
            sightSeeingData:[],
            sightseeingid:'',
            sightseeingname:'',
            sightSeeingDataById:'',
            VehicleData:[],
            DriverDataByCOuntryId:[],
            VehicleSightId:'',
            DriverSightId:'',
            sightadultPrice:'',
            sightchildPrice:'',
            sightticketsPrice:'',
            sighttourGuidePrice:'',
            sighttransferId:'',
            sightPublishedPrice:'',
            sightTransferRouteId:'',
            TransferADData:[],
            openViewTransferArrival:false,
            TransferArrivalDataChange:[],
            SelectedArrivalVehicle:'',
            FreeSaleArrivalDayId:'',
            IndexStoreAge:'',
            openViewTransferDeparture:false,
            TransferDepartureDataChange:[],
            FreeSaleDepartureDayId:'',
            SelectedDepartureVehicle:'',
            HotelChangeDepartureSelect:'',
            TransferArrivalData:'',
            openViewTransferArrivalDetailsById:false,
            openViewHotelDetailsById:false,
            HotelDataDetailsById:'',
            openViewTransferDepartureDetailsById:false,
            TransferDepartureData:'',
            openViewSightSeeingDetailsById:false,
            SightSeeingDataDetailsById:'',
            PackageStartDate:new Date(),
            PackageEndDate:new Date(),
            ArrivalPrice:'',
            DeparturePrice:'',
            HotelPrice:'',
            adultPrice:0,
            adultCount:1,
            childPrice:0,
            childCount:0,
            RoomCount:1,
            selectedRoomid:'',
            selectedbedtype:'',
            selectedRoomdata:{},
            TotalPrice:0
        }
    }

    HotelChangeRates = ()=>{
        this.setState({HotelPrice:

            this.state.Days.reduce((a,v,i)=>(a = a +(

                v.freeSalePackageStayingorBoardingModel?.HotelPrice?.selectedbedtype==='bb' ?
               (
                ( moment(this.state.PackageStartDate).add(i,'days').format('ddd') ==='Sat' || moment(this.state.PackageStartDate).add(i,'days').format('ddd') ==='Sun'?
               v.freeSalePackageStayingorBoardingModel?.HotelPrice?.weekEndDaysPricing===true?
                 parseFloat(
                   v.freeSalePackageStayingorBoardingModel?.HotelPrice?.weekEndDaysPriceEntry?.perRoomBbPriceW) 
                   :
                   parseFloat(
                       v.freeSalePackageStayingorBoardingModel?.HotelPrice?.perRoomBbPriceW) 
                       :
                       parseFloat(
                           v.freeSalePackageStayingorBoardingModel?.HotelPrice?.perRoomBbPriceW) 
                           )
                           
                           +
                        //    console.log(v,i,a)

            ((moment(this.state.PackageStartDate).add(i,'days').format('ddd') ==='Sat' || moment(this.state.PackageStartDate).add(i,'days').format('ddd') ==='Sun')
             && (v.freeSalePackageStayingorBoardingModel?.HotelPrice?.weekEndDaysPricing)===true?
                                   
                                parseFloat(
                                    (
                                        (
                                        (v.freeSalePackageStayingorBoardingModel?.HotelPrice?.weekEndDaysPriceEntry?.perRoomBbPriceW /100) 

                                        * 
                                        v.freeSalePackageStayingorBoardingModel?.HotelPrice?.weekEndDaysPriceEntry?.perRoomBbServicePerW
                                        ) 

                                    + 
                                        (
                                            (v.freeSalePackageStayingorBoardingModel?.HotelPrice?.weekEndDaysPriceEntry?.perRoomBbPriceW /100) 

                                        * 
                                             v.freeSalePackageStayingorBoardingModel?.HotelPrice?.weekEndDaysPriceEntry?.perRoomBbVatPerW
                                        )
                                     
                                    +
                                        (
                                            (v.freeSalePackageStayingorBoardingModel?.HotelPrice?.weekEndDaysPriceEntry?.perRoomBbPriceW /100) 

                                        *
                                            v.freeSalePackageStayingorBoardingModel?.HotelPrice?.weekEndDaysPriceEntry?.perRoomBbMunciplePerW
                                        )
                                        ).toFixed(2)
                                        ) 
                               
                                    :
                               
                                parseFloat(
                                    (
                                        (
                                            (v.freeSalePackageStayingorBoardingModel?.HotelPrice?.perRoomBbPriceW /100) 
                                            *
                                             v.freeSalePackageStayingorBoardingModel?.HotelPrice?.perRoomBbServicePerW
                                        ) 
                                        +
                                        (
                                            (v.freeSalePackageStayingorBoardingModel?.HotelPrice?.perRoomBbPriceW /100)
                                            * 
                                            v.freeSalePackageStayingorBoardingModel?.HotelPrice?.perRoomBbVatPerW
                                        )
                                            + 
                                        (
                                            (v.freeSalePackageStayingorBoardingModel?.HotelPrice?.perRoomBbPriceW /100)
                                            * 
                                            v.freeSalePackageStayingorBoardingModel?.HotelPrice?.perRoomBbMunciplePerW
                                        )
                                    ).toFixed(2)
                                    ) 

            )
            )
            *
            (this.state.Days.find((x,idx)=>i===idx).freeSalePackageStayingorBoardingModel.RoomCount)

            :

            (( moment(this.state.PackageStartDate).add(i,'days').format('ddd') ==='Sat' || moment(this.state.PackageStartDate).add(i,'days').format('ddd') ==='Sun'?
            v.freeSalePackageStayingorBoardingModel?.HotelPrice?.weekEndDaysPricing===true?
            parseFloat(
                v.freeSalePackageStayingorBoardingModel?.HotelPrice?.weekEndDaysPriceEntry?.perRoomPriceW) 
                :
                parseFloat(
                    v.freeSalePackageStayingorBoardingModel?.HotelPrice?.perRoomPriceW) 
                    :
                    parseFloat(
                        v.freeSalePackageStayingorBoardingModel?.HotelPrice?.perRoomPriceW) 
                        )
                        
                        +
                     //    console.log(v,i)

         ((moment(this.state.PackageStartDate).add(i,'days').format('ddd') ==='Sat' || moment(this.state.PackageStartDate).add(i,'days').format('ddd') ==='Sun')
          && (v.freeSalePackageStayingorBoardingModel?.HotelPrice?.weekEndDaysPricing)===true?
                                
                             parseFloat(
                                 (
                                     (
                                     (v.freeSalePackageStayingorBoardingModel?.HotelPrice?.weekEndDaysPriceEntry?.perRoomPriceW /100) 

                                     * 
                                     v.freeSalePackageStayingorBoardingModel?.HotelPrice?.weekEndDaysPriceEntry?.perRoomServicePerW
                                     ) 

                                 + 
                                     (
                                         (v.freeSalePackageStayingorBoardingModel?.HotelPrice?.weekEndDaysPriceEntry?.perRoomPriceW /100) 

                                     * 
                                          v.freeSalePackageStayingorBoardingModel?.HotelPrice?.weekEndDaysPriceEntry?.perRoomVatPerW
                                     )
                                  
                                 +
                                     (
                                         (v.freeSalePackageStayingorBoardingModel?.HotelPrice?.weekEndDaysPriceEntry?.perRoomPriceW /100) 

                                     *
                                         v.freeSalePackageStayingorBoardingModel?.HotelPrice?.weekEndDaysPriceEntry?.perRoomMunciplePerW
                                     )
                                     ).toFixed(2)
                                     ) 
                            
                                 :
                            
                             parseFloat(
                                 (
                                     (
                                         (v.freeSalePackageStayingorBoardingModel?.HotelPrice?.perRoomPriceW /100) 
                                         *
                                          v.freeSalePackageStayingorBoardingModel?.HotelPrice?.perRoomServicePerW
                                     ) 
                                     +
                                     (
                                         (v.freeSalePackageStayingorBoardingModel?.HotelPrice?.perRoomPriceW /100)
                                         * 
                                         v.freeSalePackageStayingorBoardingModel?.HotelPrice?.perRoomVatPerW
                                     )
                                         + 
                                     (
                                         (v.freeSalePackageStayingorBoardingModel?.HotelPrice?.perRoomPriceW /100)
                                         * 
                                         v.freeSalePackageStayingorBoardingModel?.HotelPrice?.perRoomMunciplePerW
                                     )
                                 ).toFixed(2)
                                 ) 

         ))
         *
         (this.state.Days.find((x,idx)=>i===idx).freeSalePackageStayingorBoardingModel.RoomCount)

            )
            )
            ,0).toFixed(2)
            
           
        },()=>{this.TotalPrices()
        // console.log(this.state.HotelPrice ,'2')
    })
   
   
   
    }
  

    // handleopenRoom=()=>{
    //     this.setState({openRoom:true})
    // }

    handleSightSeeingDetailsClose=()=>{
        this.setState({openViewSightSeeingDetailsById:false})
        this.setState({
            SightSeeingDataDetailsById:''
        })
    }

    handleHotelDetailsClose=()=>{
        this.setState({openViewHotelDetailsById:false})
        this.setState({
            HotelDataDetailsById:''
        })
    }
    

    handleTransferArrivalDetailsClose=()=>{
        this.setState({openViewTransferArrivalDetailsById:false})
        this.setState({
            TransferArrivalData:''
        })
    }
    handleTransferDepartureDetailsClose=()=>{
        this.setState({openViewTransferDepartureDetailsById:false})
        this.setState({
            TransferDepartureData:''
        })
    }

    handleTransferArrivalClose=()=>{
        this.setState({openViewTransferArrival:false})
        this.setState({
            TransferArrivalDataChange:[],
            SelectedArrivalVehicle:'',
            FreeSaleArrivalDayId:''
        })
    }
    handleTransferDepartureClose=()=>{
        this.setState({openViewTransferDeparture:false})
        this.setState({
            TransferDepartureDataChange:[],
            FreeSaleDepartureDayId:'',
            SelectedDepartureVehicle:''
        })
    }

    handleRoomClose=()=>{
        this.setState({openRoom:false})
        this.setState({
            RoomDatas:[],
            IndexStoreAge:''
        })
    }
    handleHotelClose=()=>{
        this.setState({openHotel:false})
        this.setState({
            HotelChangeData:[]
        })
        this.setState({
            SelectedHotel:'',
            IndexStoreAge:'',
            SelectedArrivalVehicle:'',
            FreeSaleArrivalDayId:'',
            FreeSaleDepartureDayId:'',
            SelectedDepartureVehicle:'',
            StayingDayId:'',
            HotelChangeId:''
        })
    }
    handleViewGuideClose=()=>{
        this.setState({openViewGuide:false})
        this.setState({
            ViewGuideData:''
        })
    }
    handleViewCarClose=()=>{
        this.setState({openViewCar:false})
        this.setState({
            ViewCarDayData:''
        })
    }
    handleSightSeeingChangeClose=()=>{
        this.setState({openSightSeeing:false})
        this.setState({
            sightSeeingData:[],
            sightseeingid:'',
            sightseeingname:'',
            sightSeeingDataById:[],
            VehicleData:[],
            DriverDataByCOuntryId:[],
            VehicleSightId:'',
            DriverSightId:'',
            sightadultPrice:'',
            sightchildPrice:'',
            sightticketsPrice:'',
            sighttourGuidePrice:'',
            sighttransferId:'',
            sightPublishedPrice:'',
            sightTransferRouteId:'',
            StayingDayId:'',
           
        })
    }

    handleChange = (event, newValue) => {
        this.setState({ filteramount: newValue });
    };
   async componentDidMount(){
        let id = this.props.location.state.id
        let res = await GetFreeSalePackageById(id)
        .then(response => response.json())
	.then(data => 
        // ?console.log(data)
        // this.setState({PackageById:res.data})
        // res.data(e=>
            this.setState({
                GetHotelsByIds:[...new Set(data.daysModel.map(e=>e.freeSalePackageStayingorBoardingModel.hotelId))],
                GetTransferArrivalByIds:[...new Set(data.daysModel.map(e=>e.freeSalePackageArrivalDetailModel.transferId))],
                GetTransferDepartureByIds:[...new Set(data.daysModel.map(e=>e.freeSalePackageDepartureModel.transferId))],
                DestName:data.freeSalePackageName,
                Included:data.inclusions,
                Excluded:data.exclusions,
                Days:data.daysModel,
                CountryId:data.countryId,
                ImageGallery:data.freeSalePackageImageGalleriesModel,
                Latitude:data.freeSalePackageLatitudes.map(e=>e.latitude),
                Longitude:data.freeSalePackageLatitudes.map(e=>e.longitude),
                TravelInfo:data.flightModel.flightInfo,
                NecessoryInformation:data.necessaryInformation,
                Overview:data.overview,
                PackageDays:parseInt(data.packageDays),
                SeasonsS: data?.freeSalePackageSeasonServiceModel?.freeSalePackageSeasonCps[0].freeSalePackageSeasonDepartureDates[0].fromDateRange,
                SeasonsE:data?.freeSalePackageSeasonServiceModel?.freeSalePackageSeasonCps[0].freeSalePackageSeasonDepartureDates[0].fromDateRange,
                MaxAgeP:data.maxAge,
                adultPrice:data.daysModel?.reduce((a,b)=>a=a + (parseFloat(b.dayDescriptionandDetails.adultPrice))),
                PackageEndDate:moment(this.state.PackageStartDate).add(parseInt(data.packageDays-1),'days').format("MM-DD-YYYY")
                
            },()=>{
                console.log(this.state.Days,"pd")
            })
    )


            let TransferRes = await GetAddTransfersModelByTransferIdS(this.state.GetTransferArrivalByIds.toString()+","+this.state.GetTransferDepartureByIds.toString())
            this.setState({
                TransferADData:TransferRes.data,
            },()=>{
                this.setState({
                    ArrivalPrice:parseFloat(this.state.TransferADData.find(h=>h.transferId===this.state.Days[0].freeSalePackageArrivalDetailModel.transferId)?.publishedPrice)
                })
                this.setState({
                    DeparturePrice:parseFloat(this.state.TransferADData.find(h=>h.transferId===this.state.Days[this.state.Days.length-1].freeSalePackageDepartureModel.transferId)?.publishedPrice)
                })
            })
           

            let Hotelres = await getFinalHotelApi(this.state.GetHotelsByIds.toString()) 
            this.setState({ 
                HotelData:Hotelres.data,
                TodaysDate:(moment().format("ddd, MMM Do YYYY")),
                HotelChangeData:Hotelres.data,

            }
            ,()=>{
                console.log(this.state.Days)
                this.setState({
                    Days : packagedata==='' || packagedata===undefined || packagedata.length===0? 
                    this.state.Days.map((e,i)=>Object.assign(e,
                        {freeSalePackageStayingorBoardingModel:{
                        ...e.freeSalePackageStayingorBoardingModel,
                        HotelPrice : Object.assign(this.state.HotelData.find(h=>h.hotelId === e.freeSalePackageStayingorBoardingModel.hotelId)?.hotelContractRates[0]?.hotelContractRoomRates,{selectedbedtype:'b'}),
                    RoomCount:1}})):packagedata})
                    
                },()=>{
                   
                    this.HotelChangeRates()
                }
                )
            
            this.HotelChangeRates()
            this.TotalPrices()
        }

     

    handleSightSeeingDetailsById=(e)=>{
        this.setState({openViewSightSeeingDetailsById:true})

        const SightSeeingData = async()=>{
            let SightSeeingResById = await GetSightSeeingDetailsModelbyid(e)
            this.setState({
                SightSeeingDataDetailsById:SightSeeingResById.data
            })
           
        }
        SightSeeingData()
    }

    handleTransferDepartureDetailsById=(e)=>{
        this.setState({openViewTransferDepartureDetailsById:true})

        const TransferDepartureDetails = async()=>{
            let DepartureTransferResById = await GetAddTransfersModelById(e.transferId)
            this.setState({
                TransferDepartureData:DepartureTransferResById.data
            })
           
        }
        TransferDepartureDetails()
    }

    handleTravelArrivalDetailsById=(e,i)=>{
        this.setState({openViewTransferArrivalDetailsById:true})
        const TransferArrivalDetails = async()=>{
            let ArrivalTransferResById = await GetAddTransfersModelById(e.transferId)
            this.setState({
                TransferArrivalData:ArrivalTransferResById.data,
                
            })
           
        }
        TransferArrivalDetails()
    }

    handleGetHotelDetailsById=(e)=>{
        this.setState({openViewHotelDetailsById:true})

        const HotelDetails = async()=>{
            let HotelDetailsResById = await GetHotelModelbyid(e.hotelId)
            this.setState({
                HotelDataDetailsById:HotelDetailsResById.data
            })
           
        }
        HotelDetails()
    }

    HandleTransferChangeOnDeparture=(e)=>{
        this.setState({openViewTransferDeparture:true})

        const TransferTravellsBYRouteId = async()=>{
            let DepartureTransferRes = await GetTransferTravellsBYRouteId(e.transferRoutesId)
            this.setState({
                TransferDepartureDataChange:DepartureTransferRes.data
            })
            this.setState({
                FreeSaleDepartureDayId:e.freeSaleDayId
            })
        }
        TransferTravellsBYRouteId()
    }

    HandleTransferChangeOnArrival=(e,i)=>{
            this.setState({openViewTransferArrival:true})

            const TransferTravellsBYRouteId = async()=>{
                let ArrivalTransferRes = await GetTransferTravellsBYRouteId(e.transferRoutesId)
                this.setState({
                    TransferArrivalDataChange:ArrivalTransferRes.data
                })
                this.setState({
                    FreeSaleArrivalDayId:e.freeSaleDayId
                })
            }
            TransferTravellsBYRouteId()

    }


    HandleRoomChange=(e,i)=>{
        this.setState({openRoom:true,IndexStoreAge:i})
        const RoomDataByHotelId = async () => {
            const res = await GetHotelContractRatesByHotelId(e);
       
        this.setState({RoomDatas:res.data},()=>{
            this.TotalPrices()
        })
    }
          RoomDataByHotelId();
          
    }

    HandleHotelChange=(e,i)=>{

        this.setState({openHotel:true})
        const DataByHotelId = async () => {
            const res = await getHotelsChangeApi(e.cityId);
            this.setState({HotelChangeData:res.data})
            this.setState({HotelChangeId:e.hotelId})
            this.setState({StayingDayId:e.stayingId})
            this.setState({FreeSaleArrivalDayId:e.freeSaleDayId})
            this.setState({FreeSaleDepartureDayId:e.freeSaleDayId})
            this.setState({
                IndexStoreAge:i
            })
          }
          DataByHotelId();
    }

    HandleOpenViewGuide=(e)=>{
        this.setState({openViewGuide:true})
        const ViewGuidebyId = async () => {
            const res = await getMasterDriverById(e);
            let da = res.data
           
            this.setState({
                ViewGuideData:da
            })
          }
          ViewGuidebyId();   
    }

    HandleOpenViewCar=(e)=>{
        this.setState({openViewCar:true})
        const ViewCarbyId = async () => {
            const res = await getTransferAddVehicleById(e);
            let da = res.data
           
            this.setState({
                ViewCarDayData:da
            })
          }
          ViewCarbyId();   
    }

    HandleSightSeeingChange=(e,AdI)=>{
        this.setState({openSightSeeing:true})
        const SightSeeingByCountryId = async () => {
            const res = await GetSightSeeingModelByCountryId(e);
            let da = res.data
           
            this.setState({
                sightSeeingData:da,
            })
          }
          this.setState({StayingDayId:AdI})
          SightSeeingByCountryId();   
    }

    Seasons =(D)=> {
        try {
            var weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
            var Month = [
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
              "Dec",
            ];
            var year = D.split("/")[2];
            var month = D.split("/")[0];
            var date = D.split("/")[1];
            var dt = new Date(year + "/" + month + "/" + date);
            var ConDate =
              weekday[dt.getDay()] +
              ", " +
              dt.getDate() +
              " " +
              Month[dt.getMonth()];
            return ConDate;
          } catch (ex) {}
      };


      HandleDepartureVehicleChangesById = (x)=>{
          this.setState({SelectedDepartureVehicle:x})
        }

      handleDepartureTransferChangeSelect=()=>{
        let TDData =  this.state.TransferADData

        if(TDData.filter(e=>e.transferId === this.state.SelectedDepartureVehicle.transferId).length===0){
            TDData.push(this.state.SelectedDepartureVehicle)
        }
        this.setState({DeparturePrice:parseFloat(this.state.SelectedDepartureVehicle.publishedPrice)})
        let DTId = this.state.SelectedDepartureVehicle
        let DayData = this.state.Days
        DayData.find(e=>e.freeSalePackageDepartureModel.freeSaleDayId === this.state.FreeSaleDepartureDayId).freeSalePackageDepartureModel.transferId = DTId.transferId
        DayData.find(e=>e.freeSalePackageDepartureModel.freeSaleDayId === this.state.FreeSaleDepartureDayId).freeSalePackageDepartureModel.transferRoutesId= DTId.transferRoutesId            
        DayData.find(e=>e.freeSalePackageDepartureModel.freeSaleDayId === this.state.FreeSaleDepartureDayId).freeSalePackageDepartureModel.routeName = DTId.routeName
        DayData.find(e=>e.freeSalePackageDepartureModel.freeSaleDayId === this.state.FreeSaleDepartureDayId).freeSalePackageDepartureModel.driverId = DTId.driverId
        DayData.find(e=>e.freeSalePackageDepartureModel.freeSaleDayId === this.state.FreeSaleDepartureDayId).freeSalePackageDepartureModel.vehicleId = DTId.vehicleId
        this.setState({Days:[...DayData]},()=>
        this.TotalPrices()  )
        this.handleTransferDepartureClose()
      }

      handleRemoveDepartureTransfer=(e,i)=>{
        let DayData = this.state.Days
        DayData.find((x,idx)=>x.freeSalePackageDepartureModel.transferId===e.transferId && idx === i).freeSalePackageDepartureModel.transferId = ""
        this.setState({DeparturePrice:0})
        this.setState(
            {Days:[...DayData]},
            ()=> this.TotalPrices()  
            )
    }

      
      HandleArrivalVehicleChangesById = (x)=>{
          this.setState({SelectedArrivalVehicle:x})
        }
        
        handleArrivalTransferChangeSelect=()=>{
            let TAData =  this.state.TransferADData
           
            if(TAData.filter(e=>e.transferId === this.state.SelectedArrivalVehicle.transferId).length===0){
                TAData.push(this.state.SelectedArrivalVehicle)
            }
            this.setState({ArrivalPrice:parseFloat(this.state.SelectedArrivalVehicle.publishedPrice)}
            )

            let ATId = this.state.SelectedArrivalVehicle
            let DayData = this.state.Days
            DayData.find(e=>e.freeSalePackageArrivalDetailModel.freeSaleDayId === this.state.FreeSaleArrivalDayId).freeSalePackageArrivalDetailModel.transferId = ATId.transferId
            DayData.find(e=>e.freeSalePackageArrivalDetailModel.freeSaleDayId === this.state.FreeSaleArrivalDayId).freeSalePackageArrivalDetailModel.transferRoutesId= ATId.transferRoutesId            
            DayData.find(e=>e.freeSalePackageArrivalDetailModel.freeSaleDayId === this.state.FreeSaleArrivalDayId).freeSalePackageArrivalDetailModel.routeName = ATId.routeName
            DayData.find(e=>e.freeSalePackageArrivalDetailModel.freeSaleDayId === this.state.FreeSaleArrivalDayId).freeSalePackageArrivalDetailModel.driverId = ATId.driverId
            DayData.find(e=>e.freeSalePackageArrivalDetailModel.freeSaleDayId === this.state.FreeSaleArrivalDayId).freeSalePackageArrivalDetailModel.vehicleId = ATId.vehicleId
            this.setState({Days:[...DayData]},()=>{
                // console.log(this.state.Days,'ddaayyss')
                this.TotalPrices()
            })
            this.handleTransferArrivalClose()
           
        }

        handleRemoveArrivalTransfer=(e)=>{
            let DayData = this.state.Days
            DayData.find(x=>x.freeSalePackageArrivalDetailModel.transferId===e.transferId).freeSalePackageArrivalDetailModel.transferId = ""
            this.setState({ArrivalPrice:0})
            this.setState({Days:[...DayData]},()=>{
                // console.log(this.state.Days,'ddaayyss')
                this.TotalPrices()
            })
        }


      onSiteChanged = (x,type)=>{

        this.setState(
            {
            selectedRoomdata:Object.assign(x,{selectedbedtype:type}), selectedRoomid:x.hotelContractRoomRatesId,selectedbedtype:type
        },()=>{
            // console.log(this.state.Days,'ddaayyss')
        })
      }

      handleRoomSelectChange = ()=>{
        let hData = this.state.Days
           hData.find((e,i)=>i === this.state.IndexStoreAge).freeSalePackageStayingorBoardingModel.HotelPrice = this.state.selectedRoomdata
           hData.map((a,i)=>a.freeSalePackageStayingorBoardingModel.RoomCount = Math.round(this.state.adultCount/a.freeSalePackageStayingorBoardingModel.HotelPrice.maxHeadCount)===0?1:Math.round(this.state.adultCount/a.freeSalePackageStayingorBoardingModel.HotelPrice.maxHeadCount))
        this.setState({
            Days:[...hData],
            openRoom:false
        },()=>this.HotelChangeRates())
      }

      HandleHotelChangesById = (x)=>{
        this.setState({SelectedHotel:x})
        let id = x.hotelId
        let CityName = x.cityName
        let DropOffROute = x.hotelName
        let PickUpROute = x.hotelName
        const AddTransfersModelByPickupAndDropoff = async () => {
            const res = await GetAddTransfersModelByPickupAndDropoff(id,CityName,DropOffROute);
            let da = res.data
           
            this.setState({
                HotelChangeArrivalSelect:da
            })
          }
          AddTransfersModelByPickupAndDropoff(); 
        const AddTransfersModelByPickup = async () => {
            const res = await GetAddTransfersModelByPickup(id,CityName,PickUpROute);
            let da = res.data
           
            this.setState({
                HotelChangeDepartureSelect:da
            })
          }
          AddTransfersModelByPickup(); 
      }
      

     handleHotelSelectChange=()=>{

        let LHotelData =  this.state.HotelData
        if(LHotelData.map(e=>e.hotelId === this.state.SelectedHotel.hotelId)){
            LHotelData.push(this.state.SelectedHotel)
        }
        let hId = this.state.SelectedHotel
        let DayData = this.state.Days
        DayData.find(e=>e.freeSalePackageStayingorBoardingModel.stayingId === this.state.StayingDayId).freeSalePackageStayingorBoardingModel.hotelId = hId.hotelId
        DayData.find(e=>e.freeSalePackageStayingorBoardingModel.stayingId === this.state.StayingDayId).freeSalePackageStayingorBoardingModel.hotelName = hId.hotelName
        DayData.find(e=>e.freeSalePackageStayingorBoardingModel.stayingId === this.state.StayingDayId).freeSalePackageStayingorBoardingModel.HotelPrice = hId.hotelContractRates[0]?.hotelContractRoomRates

        let TAData =  this.state.TransferADData

        if(this.state.SelectedArrivalVehicle){
            
                    if(TAData.map(e=>e.transferId === this.state.SelectedArrivalVehicle.transferId)){
                        TAData.push(this.state.SelectedArrivalVehicle)
                    }
                    this.setState({ArrivalPrice:parseFloat(this.state.SelectedArrivalVehicle.publishedPrice)})
                    let ATId = this.state.SelectedArrivalVehicle
                    DayData.find(e=>e.freeSalePackageArrivalDetailModel.freeSaleDayId === this.state.FreeSaleArrivalDayId).freeSalePackageArrivalDetailModel.transferId = ATId.transferId
                    DayData.find(e=>e.freeSalePackageArrivalDetailModel.freeSaleDayId === this.state.FreeSaleArrivalDayId).freeSalePackageArrivalDetailModel.transferRoutesId= ATId.transferRoutesId            
                    DayData.find(e=>e.freeSalePackageArrivalDetailModel.freeSaleDayId === this.state.FreeSaleArrivalDayId).freeSalePackageArrivalDetailModel.routeName = ATId.routeName
                    DayData.find(e=>e.freeSalePackageArrivalDetailModel.freeSaleDayId === this.state.FreeSaleArrivalDayId).freeSalePackageArrivalDetailModel.driverId = ATId.driverId
                    DayData.find(e=>e.freeSalePackageArrivalDetailModel.freeSaleDayId === this.state.FreeSaleArrivalDayId).freeSalePackageArrivalDetailModel.vehicleId = ATId.vehicleId
        }

        if(this.state.SelectedDepartureVehicle){

            if(TAData.map(e=>e.transferId === this.state.SelectedDepartureVehicle.transferId)){
                TAData.push(this.state.SelectedDepartureVehicle)
            }
            this.setState({DeparturePrice:parseFloat(this.state.SelectedDepartureVehicle.publishedPrice)})
            let DTId = this.state.SelectedDepartureVehicle
            DayData.find(e=>e.freeSalePackageDepartureModel.freeSaleDayId === this.state.FreeSaleDepartureDayId).freeSalePackageDepartureModel.transferId = DTId.transferId
            DayData.find(e=>e.freeSalePackageDepartureModel.freeSaleDayId === this.state.FreeSaleDepartureDayId).freeSalePackageDepartureModel.transferRoutesId= DTId.transferRoutesId            
            DayData.find(e=>e.freeSalePackageDepartureModel.freeSaleDayId === this.state.FreeSaleDepartureDayId).freeSalePackageDepartureModel.routeName = DTId.routeName
            DayData.find(e=>e.freeSalePackageDepartureModel.freeSaleDayId === this.state.FreeSaleDepartureDayId).freeSalePackageDepartureModel.driverId = DTId.driverId
            DayData.find(e=>e.freeSalePackageDepartureModel.freeSaleDayId === this.state.FreeSaleDepartureDayId).freeSalePackageDepartureModel.vehicleId = DTId.vehicleId
          
        }

        this.setState({Days:[...DayData]},()=>{
            this.HotelChangeRates()
        })
       this.handleHotelClose()
    }

    HandleSightSeeingChangeD=(e)=>{

        this.setState({
            sightseeingid:e.sightSeeingId,
            sightseeingname:e.sightSeeingName,
            sightadultPrice:e.adultPrice,
            sightchildPrice:e.childPrice,
            sightticketsPrice:e.ticketsPrice,
            sighttourGuidePrice:e.tourGuidePrice,
            sighttransferId:e.transferId,
            sightPublishedPrice:e.publishedPrice
            // sightTransferRouteId:e.addTransfersModel.transferRoutesId

        })
        
         const SightSeeingById = async () => {
            const res = await getSightSeeingById(e.sightSeeingId);
            let da = res.data
           
            this.setState({
                sightSeeingDataById:da
            })
          }
          SightSeeingById(); 

         const GetVehicles = async () => {
            const res = await getTransferAddVehicle();
            let da = res.data
           
            this.setState({
                VehicleData:da
            })
          }
          GetVehicles(); 
          
         const GetDriversOfCOuntry = async () => {
            const res = await GetMasterDriverModelByCountryId(e.countryId);
            let da = res.data
           
            this.setState({
                DriverDataByCOuntryId:da
            })
          }
          GetDriversOfCOuntry()
    }

    HandleVehicleChangeOnSightSeeing=(e)=>{
        this.setState({
            VehicleSightId:e.vehicleId
        })
    }
    HandleDriverChangeOnSightSeeing=(e)=>{
        this.setState({
            DriverSightId:e.driverId
        })
    }

    handleIncludeSightSelectChange=()=>{

        let DayData = this.state.Days
        let StayingId = this.state.StayingDayId
        let SightId =  this.state.sightseeingid
        let SightName = this.state.sightseeingname
        let SightAdultPrice = this.state.sightadultPrice
        let SightChildPrice = this.state.sightchildPrice
        let SightTicketPrice = this.state.sightticketsPrice
        let SightTourGuidePrice = this.state.sighttourGuidePrice
        let SightTransferId = this.state.sighttransferId
        let SightPublishedPrice = this.state.sightPublishedPrice
        let DriverId = this.state.DriverSightId
        let VehicleId = this.state.VehicleSightId

        
        DayData.find(x=>x.dayDescriptionandDetails.freeSaleArrivalDayId === StayingId).dayDescriptionandDetails.sightSeeingId = SightId
        DayData.find(x=>x.dayDescriptionandDetails.freeSaleArrivalDayId === StayingId).dayDescriptionandDetails.sightSeeingName = SightName
        DayData.find(x=>x.dayDescriptionandDetails.freeSaleArrivalDayId === StayingId).dayDescriptionandDetails.adultPrice = parseFloat(SightAdultPrice)
        DayData.find(x=>x.dayDescriptionandDetails.freeSaleArrivalDayId === StayingId).dayDescriptionandDetails.childPrice = parseFloat(SightChildPrice)
        DayData.find(x=>x.dayDescriptionandDetails.freeSaleArrivalDayId === StayingId).dayDescriptionandDetails.ticketsPrice = parseFloat(SightTicketPrice)
        DayData.find(x=>x.dayDescriptionandDetails.freeSaleArrivalDayId === StayingId).dayDescriptionandDetails.tourGuidePrice = parseFloat(SightTourGuidePrice)
        DayData.find(x=>x.dayDescriptionandDetails.freeSaleArrivalDayId === StayingId).dayDescriptionandDetails.transferId = SightTransferId
        DayData.find(x=>x.dayDescriptionandDetails.freeSaleArrivalDayId === StayingId).dayDescriptionandDetails.driverId  = DriverId
        DayData.find(x=>x.dayDescriptionandDetails.freeSaleArrivalDayId === StayingId).dayDescriptionandDetails.vehicleId = VehicleId
        DayData.find(x=>x.dayDescriptionandDetails.freeSaleArrivalDayId === StayingId).dayDescriptionandDetails.publishedPrice = parseFloat(SightPublishedPrice)
        this.setState({Days:[...DayData]},
            ()=> this.TotalPrices()  )
        this.handleSightSeeingChangeClose()
    }

    handleRemoveSightSeeing=(e)=>{
        let DayData = this.state.Days

        DayData.find(x=>x.dayDescriptionandDetails.freeSaleArrivalDayId === e.freeSaleArrivalDayId).dayDescriptionandDetails.sightSeeingId = ""
        DayData.find(x=>x.dayDescriptionandDetails.freeSaleArrivalDayId === e.freeSaleArrivalDayId).dayDescriptionandDetails.sightSeeingName = ''
        DayData.find(x=>x.dayDescriptionandDetails.freeSaleArrivalDayId === e.freeSaleArrivalDayId).dayDescriptionandDetails.adultPrice = 0
        DayData.find(x=>x.dayDescriptionandDetails.freeSaleArrivalDayId === e.freeSaleArrivalDayId).dayDescriptionandDetails.childPrice = 0
        DayData.find(x=>x.dayDescriptionandDetails.freeSaleArrivalDayId === e.freeSaleArrivalDayId).dayDescriptionandDetails.ticketsPrice = 0
        DayData.find(x=>x.dayDescriptionandDetails.freeSaleArrivalDayId === e.freeSaleArrivalDayId).dayDescriptionandDetails.tourGuidePrice = 0
        DayData.find(x=>x.dayDescriptionandDetails.freeSaleArrivalDayId === e.freeSaleArrivalDayId).dayDescriptionandDetails.transferId = ''
        DayData.find(x=>x.dayDescriptionandDetails.freeSaleArrivalDayId === e.freeSaleArrivalDayId).dayDescriptionandDetails.driverId  = ''
        DayData.find(x=>x.dayDescriptionandDetails.freeSaleArrivalDayId === e.freeSaleArrivalDayId).dayDescriptionandDetails.vehicleId = ''
        DayData.find(x=>x.dayDescriptionandDetails.freeSaleArrivalDayId === e.freeSaleArrivalDayId).dayDescriptionandDetails.publishedPrice = 0
      


        this.setState({Days:[...DayData]},()=>
        this.TotalPrices() ,
        console.log(this.state.Days,'sight Remove') )
    }

    handleRoomCountChange=(e)=>{
        this.setState({
            RoomCount:e.target.value
        })
    }
    handleAdultsCountChange=(e)=>{
        // console.log(this.state.Days,'Days')
       
            this.setState({
                adultCount:e.target.value
            })

            let Data = this.state.Days
            Data.map((a,i)=>a.freeSalePackageStayingorBoardingModel.RoomCount = Math.round(e.target.value/a.freeSalePackageStayingorBoardingModel.HotelPrice.maxHeadCount)===0?1:Math.round(e.target.value/a.freeSalePackageStayingorBoardingModel.HotelPrice.maxHeadCount))
            
            // console.log(Data.map((a,i)=>a.freeSalePackageStayingorBoardingModel.RoomCount),'cc')
            
            // if(this.state.adultCount>2 && this.state.adultCount<=4){
            //     this.setState({
            //         RoomCount:this.state.RoomCount+1
            //     })
            // }else if(this.state.adultCount<3){
            //     this.setState({
            //         RoomCount:this.state.RoomCount-1
            //     })
            // }

            this.setState({Days:[...Data]},()=>{
                this.HotelChangeRates()
                this.TotalPrices()
            },()=>{
                // console.log(this.state.Days,'Days')
            })
        // })
       
    }
    handleChildsCountChange=(e)=>{
        this.setState({
            childCount:e.target.value
        },()=>{
            this.TotalPrices()
        })
    }

    TotalPrices=()=>{
        if(this.state.Days.length>0){
        this.setState({
            TotalPrice:(this.state.Days?.reduce((a,b)=>(
                a=a+
                (
                    parseFloat(b.dayDescriptionandDetails?.publishedPrice)+
                   ( (parseFloat(b.dayDescriptionandDetails?.adultPrice) + parseFloat(b.dayDescriptionandDetails?.ticketsPrice))* 
                    parseInt(this.state.adultCount))+

                    ((parseFloat(b.dayDescriptionandDetails?.childPrice) + parseFloat(b.dayDescriptionandDetails?.ticketsPrice))*
                    parseInt(this.state.childCount))+
                    
                    parseFloat(b.dayDescriptionandDetails?.tourGuidePrice)
                    ))
                    ,0)

                    + parseFloat(this.state.ArrivalPrice)

                    + parseFloat(this.state.DeparturePrice)

                    + parseFloat(this.state.HotelPrice)

                    ).toFixed(2)
                },()=>{
                    // console.log(this.state.TotalPrice,'totalprice')
                })
                // console.log(this.state.TotalPrice,'totalprice')
            }
            }

            handleBooking=()=>{  
                // console.log(this.state.Days)
                states.setPackageData(this.state.Days)
                states.setpackageDateS(
                    this.state.PackageStartDate
                   ) 
                   states.setpackageDateE(
                       this.state.PackageEndDate
                   ) 
                this.props.history.push("/bookingdetails", 
                {
                    data:this.state.Days,
                    Image:this.state.Image,
                    Name:this.state.name,
                    startDate:this.state.PackageStartDate,
                    EndDate:this.state.PackageEndDate,
                    TotalPrice:this.state.TotalPrice,
                    PaxCountA:this.state.adultCount,
                    PaxCountC:this.state.childCount 
                    }
                );
            }
           
    
    // DecAdults=()=>{
    //     // if(this.state.adultCount>0){
    //         this.setState({
    //             adultCount:this.state.adultCount-1
    //         })
    //     // }
    // }
    // IncAdults=()=>{
    //     // if(this.state.adultCount<0){
    //         this.setState({
    //             adultCount:this.state.adultCount+1
    //         },()=>{
    //             if(this.state.adultCount===4){
    //                 alert('please change the vehicle which is compatible for your Transfer')
                    
    //             }else{

    //             }

    //         })
    //     // }
    // }
    // Dechilds=()=>{
    //     // if(this.state.adultCount>0){
    //         this.setState({
    //             childCount:this.state.childCount-1
    //         })
    //     // }
    // }
    // Inchilds=()=>{
    //     // if(this.state.childCount<0){
    //         this.setState({
    //             childCount:this.state.childCount+1
    //         },()=>{

    //             if(this.state.adultCount===3){
    //                 alert('please change the vehicle which is compatible for your Transfer')
    //             }else{
    
    //             }
    //         })

    //     // }
    // }

    //  HandleBooking =()=>{
    //     navigate('/Bookingdetails')

    //  }



    // const GetVehicles = async () => {
    //     const res = await getTransferAddVehicle();
    //     let da = res.data
       
    //     this.setState({
    //         VehicleData:da
    //     },()=> console.log(this.state.VehicleData))
    //   }
    //   GetVehicles(); 
   
    
    
    
    render() {
          // let tourItem = this.state.toursList.find(e => e.id === this.state.id)

        return (
            <div>
                <span className="header-comp"><Header /></span>
               
                <div className='hero-container' style={{ background: `url(${this.state.Image}) center center/cover no-repeat` }}>

                </div>
                <div style={{ transform: "translate(0px,250px)", width: '100%' }}>
                    <h1 className="coverh1">{this.props.location.state.name}</h1>
                    <div className="row row-cols-1 row-cols-md-6 g-0 mr-auto" >
                        <span className={`col filter-hover px-3 py-2 text-white text-center d-flex justify-content-around ${this.state.bgcolour === 0 ? 'my-bgcolour2' : ''}`} onClick={() => this.setState({ bgcolour: 0, })}><h6 className={`fw-bold filter-item-hover p-2 px-5 ${this.state.bgcolour === 0 ? 'text-black' : ''}`} style={{ borderBottom: `${this.state.bgcolour === 0 ? "4px solid rgb(143,15,28)" : ''}` }}>Overview</h6></span>
                        <span className={`col filter-hover px-3 py-2 text-white text-center d-flex justify-content-around  ${this.state.bgcolour === 1 ? 'my-bgcolour2' : ''}`} onClick={() => this.setState({ bgcolour: 1 })}><h6 className={`fw-bold filter-item-hover p-2 px-5 ${this.state.bgcolour === 1 ? 'text-black' : ''}`} style={{ borderBottom: `${this.state.bgcolour === 1 ? "4px solid rgb(143,15,28)" : ''}` }}>Tour Plan</h6></span>
                        <span className={`col filter-hover px-3 py-2 text-white text-center d-flex justify-content-around  ${this.state.bgcolour === 2 ? 'my-bgcolour2' : ''}`} onClick={() => this.setState({ bgcolour: 2 })}><h6 className={`fw-bold filter-item-hover p-2 px-5 ${this.state.bgcolour === 2 ? 'text-black' : ''}`} style={{ borderBottom: `${this.state.bgcolour === 2 ? "4px solid rgb(143,15,28)" : ''}` }}>Inclusions</h6></span>
                        <span className={`col filter-hover px-3 py-2 text-white text-center d-flex justify-content-around  ${this.state.bgcolour === 3 ? 'my-bgcolour2' : ''}`} onClick={() => this.setState({ bgcolour: 3 })}><h6 className={`fw-bold filter-item-hover p-2 px-5 ${this.state.bgcolour === 3 ? 'text-black' : ''}`} style={{ borderBottom: `${this.state.bgcolour === 3 ? "4px solid rgb(143,15,28)" : ''}` }}>Location</h6></span>
                        <span className={`col filter-hover px-3 py-2 text-white text-center d-flex justify-content-around  ${this.state.bgcolour === 4 ? 'my-bgcolour2' : ''}`} onClick={() => this.setState({ bgcolour: 4 })}><h6 className={`fw-bold filter-item-hover p-2 px-5 ${this.state.bgcolour === 4 ? 'text-black' : ''}`} style={{ borderBottom: `${this.state.bgcolour === 4 ? "4px solid rgb(143,15,28)" : ''}` }}>Prices</h6></span>
                        <span className={`col filter-hover px-3 py-2 text-white text-center d-flex justify-content-around  ${this.state.bgcolour === 5 ? 'my-bgcolour2' : ''}`} onClick={() => this.setState({ bgcolour: 5 })}><h6 className={`fw-bold filter-item-hover p-2 px-5 ${this.state.bgcolour === 5 ? 'text-black' : ''}`} style={{ borderBottom: `${this.state.bgcolour === 5 ? "4px solid rgb(143,15,28)" : ''}` }}>Reviews</h6></span>

                    </div>
                    <div className="row g-0">
                        <div className="col-md-1 g-0 my-bgcolour2"></div>
                        <div className="col-md-7 g-0 my-bgcolour2">
                            {this.state.bgcolour === 0 ?
                                <div>
                                    <div className="px-5 py-3" style={{ fontWeight: "400", }}>
                                        <div className="card">
                                            <div className="card-body" style={{ color: 'rgb(143,15,28)' }}>
                                                <h5 className="card-title d-flex justify-content-between" style={{ fontSize: "28px" }}>
                                                    <span style={{ fontWeight: '600', }}>{this.state.DestName}</span>
                                                    <span>{this.state.TourPlan.amount}</span>
                                                </h5>
                                                <h5><span>{this.state.PackageDays} Days/ {this.state.PackageDays - 1} Nights</span> </h5>
                                                {/* <h5 className="card-title"><span>{this.state.TourPlan.rating} {this.state.TourPlan.rating >= 7 ? 'Superb' : (this.state.TourPlan.rating < 7) && (this.state.TourPlan.rating >= 5) ? 'Good' : (this.state.TourPlan.rating < 5) && (this.state.TourPlan.rating < 1) ? 'bad' : 'worst'}</span></h5> */}
                                                {/* <h6 className='card-title'>Seasons: <span>{this.Seasons(this.state.SeasonsS)} to {this.Seasons(this.state.SeasonsE)}</span></h6> */}
                                               


                                                {/* <h6 className='card-title'>Distance: <span>{this.state.TourPlan.distance}</span></h6> */}
                                                <p className="card-text text-secondary my-3">
                                               {this.state.TourPlan.discription}
                                                </p>
                                            </div>
                                            <div className="card-footer text-white py-4" style={{ backgroundColor: 'rgb(143,15,28)' }}>
                                                <div className="d-flex justify-content-around">
                                                    <span><i className="far fa-clock"></i> {this.state.PackageDays} Days/ {this.state.PackageDays - 1} Nights</span>
                                                    <span><i className="far fa-user"></i> {this.state.MaxAgeP}+</span>
                                                    <span><i className="fas fa-map-marker-alt"></i> {this.state.DestName}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="p-5">
                                        <Table>
                                            <TableBody>
                                                <TableRow>
                                                    <TableCell className="fs-5">Destination</TableCell>
                                                    <TableCell>{this.state.name}</TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell className="fs-5">Departure</TableCell>
                                                    <TableCell >Main Street, Taiwan</TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell className="fs-5">Departure Time</TableCell>
                                                    <TableCell>Please arrive by 9:15 AM for a departure at 9:30 AM.</TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell className="fs-5">Return Time</TableCell>
                                                    <TableCell>Approximately 8:30 PM.</TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell className="fs-5">Necessary Information</TableCell>
                                                    <TableCell>{this.state.NecessoryInformation}</TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell className="fs-5">Included</TableCell>
                                                    
                                                    <TableCell style={{ border: 'none' }}> <Interweave content= {this.state.Included} className='Included'/>  </TableCell>
                                                  
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell className="fs-5">Not Included</TableCell>
                                                    <TableCell> <Interweave content= {this.state.Excluded} className='Excluded'/></TableCell>
                                                </TableRow>
                                            </TableBody>
                                        </Table>
                                    </div>
                                    <h5 className="card-title align-items-center"><span className="fs-2  my-colour-1 text-center">Make Your Own Memories</span></h5>
                                    <div className="row row-cols-1 row-cols-md-4 g-0">
                                        {this.state.ImageGallery.map((e,i )=>
                                            <div className="col p-2" key={i}>
                                            {i<8 && (
                                                <div className="card">
                                                    <img loading="lazy" src={e.imageSrc} className="card-img-top" alt="..." />
                                                </div>
                                            )
                                            }
                                            </div>
                                        )}
                                    </div>

                                </div>
                                : ''
                            }

            {/* ################   Days   ################## */}

            
                            {this.state.bgcolour === 1 ?
                          <>
                          <div className='row'>
                            <div className='col-11'>
                          <div className='my-4 mx-1 bg-body p-4 PostC'>
                            <h5 className=' fw-bold mb-2'>When are you Planning to Start your TOUR ?</h5>
                            <div className="postcard__bar"></div>

                          <div className='row mt-3'>
                            <div className='col-md-5'>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker
                                views={['day']}
                                label="start date"
                                minDate={moment(new Date())}
                                maxDate={moment('2023-06-01')}
                                value={packagedateS==='' || packagedateS===undefined || packagedateS.length===0?this.state.PackageStartDate:packagedateS}
                                onChange={(date) => {
                                    this.setState({
                                        PackageStartDate:(date.toDate()),
                                        PackageEndDate: moment(date.toDate()).add(this.state.PackageDays-1,'days').format("MM-DD-YYYY")     
                                    },()=>{
                                        this.HotelChangeRates()
                                       
                                    })
                                  
                                }}
                                renderInput={(params) => 
                                <TextField {...params} helperText={null} />}
                                />
                                 </LocalizationProvider>
                            </div>
                            <div className='col-md-2'></div>
                            
                            <div className='col-md-5'>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker
                                views={['day']}
                                label="End date"
                                readOnly
                               
                                value={packagedateE==='' || packagedateE===undefined || packagedateE.length===0?moment(this.state.PackageEndDate):packagedateE}
                               
                                renderInput={(params) => <TextField {...params} helperText={null} />}
                                />
                                 </LocalizationProvider>
                            </div>
                          </div>
                          </div>
                            </div>
                            <div className='col-md-1 my-bgcolour2'></div>
                          </div>
                                
                                <div className="row g-0">
                            {/* <div className="col-md-1"></div> */}
                            <div className="col-md-11 py-4 px-2" style={{backgroundColor:"#f6f7fa"}}>
                                   
                                        <div className="accordion" id="accordionExample">
                                            <h5 className="fw-bold text-capitalize my-colour-1 mb-4 ms-3">Day To Day</h5>
                                    {this.state.Days.map((e,i) =>
                                    <>
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" id="headingOne">
                                                    <span className="accordion-button bg-white" type="button" data-bs-toggle="collapse" data-bs-target={`#collapseOne${i}`} aria-expanded="true" aria-controls={`collapseOne${i}`}>
                                                       <h6 className='Acc_hov'>Day {i + 1}: {e.freeSalePackageArrivalDetailModel.dayTitle} - <span className=' text-black-50'>
                                                       {moment(this.state.PackageStartDate).add(i,'days').format("MM-DD-YYYY")}
                                                      {moment(this.state.PackageStartDate).add(i,'days').format("ddd")}
                                                       -
                                                       </span>
                                                       </h6>
                                                      <p>
                                                      </p> 
                                                    </span>
                                                </h2>
                                                <div id={`collapseOne${i}`} key={e.freeSaleDayId} className={`accordion-collapse collapse ${i===0?"show":""} `} aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                                    <div className="accordion-body">
                                                   


{/* ############### Transfers Airport to Hotel #####################  */}

                                                       { i===0?
                                                            
                                                        this.state.TransferADData?  
                                                        <>
                                                        {e.freeSalePackageArrivalDetailModel.transferId===''?
                                                        <div>
                                                        <Button 
                                                        className="btn my-bgcolour text-uppercase text-white"
                                                        onClick={()=>this.HandleTransferChangeOnArrival(e.freeSalePackageArrivalDetailModel,i)} 
                                                        >Add Arrival Travel Ride </Button>
                                                        <Dialog
                                                                   
                                                                    
                                                                   PaperProps={{
                                                                     sx: {
                                                                      
                                                                       width: "60%",
                                                                        height: "100%",
                                                                        
                                                                     }
                                                                   }}
                 
                                                                 maxWidth='lg'
                                                                 open={this.state.openViewTransferArrival}
                                                                 onClose={this.handleTransferArrivalClose}
                                                                 aria-labelledby="responsive-dialog-title"
                                                                 disableEnforceFocus
                                                             >
                                                                 <DialogTitle id="responsive-dialog-title">
                                                                 <div className=' d-flex justify-content-between'>
                                                                 <div className="d-flex align-items-center">
                                                                 {"Select Vehicle of your Choice"}
                                                                 </div>
                                                                 <div className=" align-top">
                                                                 <DialogActions>
                                                                 <IconButton onClick={this.handleTransferArrivalClose} autoFocus>
                                                                 <CloseIcon color='error'/>
                                                                 </IconButton>
                                                                 </DialogActions>
                                                                 </div>
                                                                 </div>
                                                                 </DialogTitle>
                                                                 <DialogContent  className=' dialogscroll'>

                                                                 <Box>
                                                                 
                                                                 <div className="container">
                                                                    <section className="mx-auto my-5 row" >
                                                                        {
                                                                            this.state.TransferArrivalDataChange && this.state.TransferArrivalDataChange.map((e,i)=>{
                                                                                return(
                                                                        <div className='col-4 mb-2' 
                                                                        key={i} 
                                                                        onClick={()=>this.HandleArrivalVehicleChangesById(e)}>
                                                                        <div className={`card ${this.state.SelectedArrivalVehicle.transferId===e.transferId?"cardSelected":""}`}>
                                                                        <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                                                                            <img loading="lazy" src={e.vehicleTypeName==="Sedan"?
                                                                            `https://www.revv.co.in/blogs/wp-content/uploads/2022/03/Sedan-cars-for-road-trips-in-India.jpg`:
                                                                            e.vehicleTypeName==="SUV"?
                                                                            `https://imgd.aeplcdn.com/0X0/n/cw/ec/125331/hyundai-creta-right-front-three-quarter0.jpeg?isig=0&wm=1&q=75`:
                                                                            e.vehicleTypeName==="MUV"?
                                                                            `https://d2m3nfprmhqjvd.cloudfront.net/blog/20220228132635/Kia-Carnival-1-1160x748.jpg`:
                                                                            e.vehicleTypeName==="Coupe"?
                                                                            `https://carwow-uk.imgix.net/prismic/c2de1ad5-b419-4c51-8f10-639e954d3491_39008-E220dCoupe.jpg?auto=format&cs=tinysrgb&fit=clip&ixlib=rb-1.1.0&q=60&w=750`:
                                                                            ``} alt='car' className="img-fluid" style={{height:"180px",width:"100%"}}/>
                                                                            <a href="#!">
                                                                            <div className="mask" style={{backgroundColor: "rgba(251, 251, 251, 0.15)"}}></div>
                                                                            </a>
                                                                        </div>
                                                                        <div className="card-body">

                                                                            <h5 className='mb-0 text-primary fw-bold text-end'>
                                                                                   {e.vehicleMake}, {e.vehicleName}
                                                                            </h5>
                                                                            <div className="card-heading">
                                                                                {e.seatingCapacityMin}-{e.seatingCapacityMax} seatingCapacity
                                                                            </div>
                                                                            <div className="card-text">
                                                                               {e.driverName} will be your Driver
                                                                               he knows Languages Like {e.languagesKnown}
                                                                            </div>
                                                                            <div className="card-text">
                                                                               luggageDiminsion:{e.luggageDiminsion}
                                                                            </div>
                                                                            <div className="card-text text-primary">
                                                                                ${e.publishedPrice}
                                                                            </div>

                                                                            <p className="lead"><strong>Tonight's availability</strong></p>
                                                                            <ul className="list-unstyled list-inline d-flex justify-content-between">
                                                                            <li className="list-inline-item me-0">
                                                                                <div className="chip me-0">5:30PM</div>
                                                                            </li>
                                                                           
                                                                           
                                                                            </ul>
                                                                            
                                                                        </div>
                                                                        </div>
                                                                        </div>
                                                                                )
                                                                            })
                                                                        }
                                                                        
                                                                    </section>
                                                                    </div>

                                                                     </Box>
                                                                 </DialogContent>
                                                                 <DialogActions>
                                                             <Button onClick={this.handleTransferArrivalClose}>Cancel</Button>
                                                             <Button onClick={()=>this.handleArrivalTransferChangeSelect()}>Select Transfer</Button>
                                                             </DialogActions>
                                                             </Dialog>
                                                        </div>   
                                                        : 
                                                        <div className="bg-white shadow-sm p-2 border Card mb-2">
                                                        <div className="hotel py-2 px-2 pb-4 ">

                                                        <div className="row"> 
                                                        <div className="col-lg-5">
                                                        <img loading="lazy" src={this.state.TransferADData.find(h=>h.transferId===e.freeSalePackageArrivalDetailModel.transferId)?.vehicleTypeName==="Sedan"?
                                                        `https://www.revv.co.in/blogs/wp-content/uploads/2022/03/Sedan-cars-for-road-trips-in-India.jpg`:
                                                        this.state.TransferADData.find(h=>h.transferId===e.freeSalePackageArrivalDetailModel.transferId)?.vehicleTypeName==="SUV"?
                                                        `https://imgd.aeplcdn.com/0X0/n/cw/ec/125331/hyundai-creta-right-front-three-quarter0.jpeg?isig=0&wm=1&q=75`:
                                                        this.state.TransferADData.find(h=>h.transferId===e.freeSalePackageArrivalDetailModel.transferId)?.vehicleTypeName==="MUV"?
                                                        `https://d2m3nfprmhqjvd.cloudfront.net/blog/20220228132635/Kia-Carnival-1-1160x748.jpg`:
                                                        this.state.TransferADData.find(h=>h.transferId===e.freeSalePackageArrivalDetailModel.transferId)?.vehicleTypeName==="Coupe"?
                                                        `https://carwow-uk.imgix.net/prismic/c2de1ad5-b419-4c51-8f10-639e954d3491_39008-E220dCoupe.jpg?auto=format&cs=tinysrgb&fit=clip&ixlib=rb-1.1.0&q=60&w=750`:
                                                        ``}
                                                            alt="" className="hotel-img" style={{width: '100%',
                                                        height:'auto',
                                                        objectFit: 'contain'}}/> 
                                                        </div> 
                                                        <div className="col-lg-7"> 
                                                        <div className="d-md-flex align-items-md-center">
                                                        <div className="name">
                                                        <div>
                                                       
                                                        {this.state.TransferADData.find(h=>h.transferId===e.freeSalePackageArrivalDetailModel.transferId)?.routeName}
                                                       
                                                          
                                                        </div>
                                                        <span className="city">
                                                        {this.state.TransferADData.find(h=>h.transferId===e.freeSalePackageArrivalDetailModel.transferId)?.vehicleMake},
                                                        {this.state.TransferADData.find(h=>h.transferId===e.freeSalePackageArrivalDetailModel.transferId)?.vehicleName}
                                                        </span>
                                                        </div>
                                                        <div className="ms-auto code text-uppercase">



                                                        <h4 className='mb-0 text-primary fw-bold text-end'>
                                                        ${this.state.TransferADData.find(h=>h.transferId===e.freeSalePackageArrivalDetailModel.transferId)?.publishedPrice}
                                                        </h4>
                                                  
                                                        <small className='SmallCap text-end'>
                                                            Including all Taxes and fees
                                                            </small>
                                                        


                                                        </div> 
                                                        </div>
                                                        <div className="rating">
                                                        
                                                        </div> 
                                                        <div className="d-flex flex-column tags pt-1">
                                                                <div>
                                                                    <span className="fas fa-comment-dollar"></span> 
                                                                    {this.state.TransferADData.find(h=>h.transferId===e.freeSalePackageArrivalDetailModel.transferId)?.travelCp}
                                                                </div> 
                                                                {/* <div>
                                                                    <span className="fas fa-concierge-bell"></span> 
                                                                    Concierge
                                                                </div> */}
                                                               
                                                                <div>
                                                              
                                                                
                                                                </div> 
                                                            
                                                            
                                                        
                                                        
                                                          

                                                                </div> 
                                                        </div> 
                                                        </div> 
                                                        <div className="d-flex justify-content-end mt-1">
                                                        <Button className="btn enquiry text-uppercase mx-2" style={{color:"#8F0F1C"}} size="small" onClick={()=>this.handleTravelArrivalDetailsById(e.freeSalePackageArrivalDetailModel,i)}>Details</Button>

                                                        <Dialog
                                                                   
                                                                    
                                                                   PaperProps={{
                                                                     sx: {
                                                                      
                                                                       width: "60%",
                                                                        height: "100%",
                                                                        
                                                                     }
                                                                   }}
                 
                                                                 maxWidth='lg'
                                                                 open={this.state.openViewTransferArrivalDetailsById}
                                                                 onClose={this.handleTransferArrivalDetailsClose}
                                                                 aria-labelledby="responsive-dialog-title"
                                                                 disableEnforceFocus
                                                             >
                                                                 <DialogTitle id="responsive-dialog-title">
                                                                 <div className=' d-flex justify-content-between'>
                                                                 <div className="d-flex align-items-center">
                                                                 {"Your Vehicle of the Day"}
                                                                 </div>
                                                                 <div className=" align-top">
                                                                 <DialogActions>
                                                                 <IconButton onClick={this.handleTransferArrivalDetailsClose} autoFocus>
                                                                 <CloseIcon color='error'/>
                                                                 </IconButton>
                                                                 </DialogActions>
                                                                 </div>
                                                                 </div>
                                                                 </DialogTitle>
                                                                 <DialogContent  className=' dialogscroll'>

                                                                 <Box>
                                                                 
                                                                 <div className="container">
                                                                    <section className="mx-auto my-5 row" >
                                                                        
                                                                           
                                                                        <div className='col-12 mb-2' 
                                                                       >
                                                                        <div className={`card`}>
                                                                        <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                                                                            <img loading="lazy" src={this.state.TransferArrivalData.addVehicleM?.vehicleTypeName==="Sedan"?
                                                                            `https://www.revv.co.in/blogs/wp-content/uploads/2022/03/Sedan-cars-for-road-trips-in-India.jpg`:
                                                                            this.state.TransferArrivalData.addVehicleM?.vehicleTypeName==="SUV"?
                                                                            `https://imgd.aeplcdn.com/0X0/n/cw/ec/125331/hyundai-creta-right-front-three-quarter0.jpeg?isig=0&wm=1&q=75`:
                                                                            this.state.TransferArrivalData.addVehicleM?.vehicleTypeName==="MUV"?
                                                                            `https://d2m3nfprmhqjvd.cloudfront.net/blog/20220228132635/Kia-Carnival-1-1160x748.jpg`:
                                                                            this.state.TransferArrivalData.addVehicleM?.vehicleTypeName==="Coupe"?
                                                                            `https://carwow-uk.imgix.net/prismic/c2de1ad5-b419-4c51-8f10-639e954d3491_39008-E220dCoupe.jpg?auto=format&cs=tinysrgb&fit=clip&ixlib=rb-1.1.0&q=60&w=750`:
                                                                            ``} alt='car' className="img-fluid" style={{height:"350px",width:"100%"}}/>
                                                                            <a href="#!">
                                                                            <div className="mask" style={{backgroundColor: "rgba(251, 251, 251, 0.15)"}}></div>
                                                                            </a>
                                                                        </div>
                                                                        <div className="card-body">

                                                                            <h5 className='mb-0 text-primary fw-bold text-end'>
                                                                                   {this.state.TransferArrivalData.addVehicleM?.vehicleMake}, {this.state.TransferArrivalData.addVehicleM?.vehicleName}
                                                                            </h5>
                                                                                <h5 className='mb-0 text-primary fw-bold text-end'>
                                                                                ${this.state.TransferArrivalData.publishedPrice}
                                                                                </h5>
                                                                            <div className="card-heading">
                                                                                {this.state.TransferArrivalData.addVehicleM?.seatingCapacityMin}-{this.state.TransferArrivalData.addVehicleM?.seatingCapacityMax} seatingCapacity
                                                                            </div>
                                                                            <div className="card-text">
                                                                               {this.state.TransferArrivalData.addVehicleM?.driverName} will be your Driver
                                                                               he knows Languages Like {this.state.TransferArrivalData.masterDriverM?.languagesKnown}
                                                                            </div>
                                                                            <div className="card-text">
                                                                               luggageDiminsion:{this.state.TransferArrivalData.addVehicleM?.luggageDiminsion}
                                                                            </div>
                                                                            <div className="card-text">
                                                                                
                                                                            </div>

                                                                            <p className="lead"><strong>Tonight's availability</strong></p>
                                                                            <ul className="list-unstyled list-inline d-flex justify-content-between">
                                                                            <li className="list-inline-item me-0">
                                                                                <div className="chip me-0">5:30PM</div>
                                                                            </li>
                                                                           
                                                                           
                                                                            </ul>
                                                                            
                                                                        </div>
                                                                        </div>
                                                                        </div>
                                                                               
                                                                        
                                                                    </section>
                                                                    </div>

                                                                     </Box>
                                                                 </DialogContent>
                                                                 <DialogActions>
                                                             <Button onClick={this.handleTransferArrivalDetailsClose}>Cancel</Button>
                                                            
                                                             </DialogActions>
                                                             </Dialog>

                                                        


                                                            <Button variant='outlined' color="error" className="text-uppercase mx-1" style={{color:"#8F0F1C"}} onClick={()=>this.handleRemoveArrivalTransfer(e.freeSalePackageArrivalDetailModel)}>Remove </Button> 

                                                        <Button 
                                                        className="btn my-bgcolour text-uppercase text-white"
                                                        onClick={()=>this.HandleTransferChangeOnArrival(e.freeSalePackageArrivalDetailModel,i)} 
                                                        >Change </Button> 
                                                        <Dialog
                                                                   
                                                                    
                                                                   PaperProps={{
                                                                     sx: {
                                                                      
                                                                       width: "60%",
                                                                        height: "100%",
                                                                        
                                                                     }
                                                                   }}
                 
                                                                 maxWidth='lg'
                                                                 open={this.state.openViewTransferArrival}
                                                                 onClose={this.handleTransferArrivalClose}
                                                                 aria-labelledby="responsive-dialog-title"
                                                                 disableEnforceFocus
                                                             >
                                                                 <DialogTitle id="responsive-dialog-title">
                                                                 <div className=' d-flex justify-content-between'>
                                                                 <div className="d-flex align-items-center">
                                                                 {"Select Vehicle of your Choice"}
                                                                 </div>
                                                                 <div className=" align-top">
                                                                 <DialogActions>
                                                                 <IconButton onClick={this.handleTransferArrivalClose} autoFocus>
                                                                 <CloseIcon color='error'/>
                                                                 </IconButton>
                                                                 </DialogActions>
                                                                 </div>
                                                                 </div>
                                                                 </DialogTitle>
                                                                 <DialogContent  className=' dialogscroll'>

                                                                 <Box>
                                                                 
                                                                 <div className="container">
                                                                    <section className="mx-auto my-5 row" >
                                                                        {
                                                                            this.state.TransferArrivalDataChange && this.state.TransferArrivalDataChange.map((e,i)=>{
                                                                                return(
                                                                        <div className='col-4 mb-2' 
                                                                        key={i} 
                                                                        onClick={()=>this.HandleArrivalVehicleChangesById(e)}>
                                                                        <div className={`card ${this.state.SelectedArrivalVehicle.transferId===e.transferId?"cardSelected":""}`}>
                                                                        <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                                                                            <img loading="lazy" src={e.vehicleTypeName==="Sedan"?
                                                                            `https://www.revv.co.in/blogs/wp-content/uploads/2022/03/Sedan-cars-for-road-trips-in-India.jpg`:
                                                                            e.vehicleTypeName==="SUV"?
                                                                            `https://imgd.aeplcdn.com/0X0/n/cw/ec/125331/hyundai-creta-right-front-three-quarter0.jpeg?isig=0&wm=1&q=75`:
                                                                            e.vehicleTypeName==="MUV"?
                                                                            `https://d2m3nfprmhqjvd.cloudfront.net/blog/20220228132635/Kia-Carnival-1-1160x748.jpg`:
                                                                            e.vehicleTypeName==="Coupe"?
                                                                            `https://carwow-uk.imgix.net/prismic/c2de1ad5-b419-4c51-8f10-639e954d3491_39008-E220dCoupe.jpg?auto=format&cs=tinysrgb&fit=clip&ixlib=rb-1.1.0&q=60&w=750`:
                                                                            ``} alt='car' className="img-fluid" style={{height:"180px",width:"100%"}}/>
                                                                            <a href="#!">
                                                                            <div className="mask" style={{backgroundColor: "rgba(251, 251, 251, 0.15)"}}></div>
                                                                            </a>
                                                                        </div>
                                                                        <div className="card-body">

                                                                            <h5 className='mb-0 text-primary fw-bold text-end'>
                                                                                   {e.vehicleMake}, {e.vehicleName}
                                                                            </h5>
                                                                            <div className="card-heading">
                                                                                {e.seatingCapacityMin}-{e.seatingCapacityMax} seatingCapacity
                                                                            </div>
                                                                            <div className="card-text">
                                                                               {e.driverName} will be your Driver
                                                                               he knows Languages Like {e.languagesKnown}
                                                                            </div>
                                                                            <div className="card-text">
                                                                               luggageDiminsion:{e.luggageDiminsion}
                                                                            </div>
                                                                            <div className="card-text text-primary">
                                                                                ${e.publishedPrice}
                                                                            </div>

                                                                            <p className="lead"><strong>Tonight's availability</strong></p>
                                                                            <ul className="list-unstyled list-inline d-flex justify-content-between">
                                                                            <li className="list-inline-item me-0">
                                                                                <div className="chip me-0">5:30PM</div>
                                                                            </li>
                                                                           
                                                                           
                                                                            </ul>
                                                                            
                                                                        </div>
                                                                        </div>
                                                                        </div>
                                                                                )
                                                                            })
                                                                        }
                                                                        
                                                                    </section>
                                                                    </div>

                                                                     </Box>
                                                                 </DialogContent>
                                                                 <DialogActions>
                                                             <Button onClick={this.handleTransferArrivalClose}>Cancel</Button>
                                                             <Button onClick={()=>this.handleArrivalTransferChangeSelect()}>Select Transfer</Button>
                                                             </DialogActions>
                                                             </Dialog>
                                                        </div> 
                                                        </div> 
                                                        </div> }
                                                        </> 
                                                        :<div className='cardSkeliton' >
                                                        </div>
                                                        
                                                        :
                                                        ""}


{/* ############### Staying Hotel #####################  */}

                                                    
                                                        
                                                            {

                                                                this.state.HotelData?       
                                                        <div className="bg-white p-2 shadow-sm border Card mb-2">
                                                        <div className="hotel py-2 px-2 pb-4 ">

                                                        <div className="row"> 
                                                            <div className="col-lg-5">
                                                            <Carousel>
                                                                {this.state.HotelData.find(h=>h.hotelId===e.freeSalePackageStayingorBoardingModel.hotelId)?.hotelImageHotels.map((e,i)=>(
                                                                <Carousel.Item key={e.i}>
                                                                    {/* <img loading="lazy"
                                                                    className="testimonialImages d-block w-50"
                                                                    src={review.image}
                                                                    alt={review.author}
                                                                    /> */}
                                                                    <img loading="lazy" src={e.imageSrc} alt="" className="hotel-img testimonialImages" style={{width: '100%',
                                                                    height:'auto',
                                                                        objectFit: 'contain'}}/>
                                                                    {/* <Carousel.Caption>
                                                                    <h3>{review.author}</h3>
                                                                    <p>{review.content}</p>
                                                                    </Carousel.Caption> */}
                                                                </Carousel.Item>
                                                                ))}
                                                            </Carousel>
                                                              
                                                            </div> 
                                                            <div className="col-lg-7"> 
                                                            <div className="d-md-flex align-items-md-center">
                                                                 <div className="name">
                                                                <div>
                                                                {/* {this.state.HotelData.find(h=>h.hotelId=== */}
                                                                   { e.freeSalePackageStayingorBoardingModel.hotelName}
                                                                    {/* hotelId).hotelName} */}
                                                                </div>
                                                                 <span className="city">
                                                                 {this.state.HotelData.find(h=>h.hotelId===e.freeSalePackageStayingorBoardingModel.hotelId)?.address1} ,
                                                                 {this.state.HotelData.find(h=>h.hotelId===e.freeSalePackageStayingorBoardingModel.hotelId)?.cityName} ,
                                                                 {this.state.HotelData.find(h=>h.hotelId===e.freeSalePackageStayingorBoardingModel.hotelId)?.countryName}

                                                                 </span>
                                                             </div>
                                                              <div className="ms-auto code text-uppercase">
                                                    
                                                             
                                        {
                                            e.freeSalePackageStayingorBoardingModel?.HotelPrice?.selectedbedtype==='bb' ?
                                            <>
                                            <h4 className='mb-0 text-primary fw-bold text-end'>
                                               { moment(this.state.PackageStartDate).add(i,'days').format('ddd') ==='Sat' || moment(this.state.PackageStartDate).add(i,'days').format('ddd') ==='Sun'?
                                            
                                                `$ ${e.freeSalePackageStayingorBoardingModel.HotelPrice.weekEndDaysPricing===true?
                                                    e.freeSalePackageStayingorBoardingModel.HotelPrice?.weekEndDaysPriceEntry?.perRoomBbPriceW
                                                    :
                                                    e.freeSalePackageStayingorBoardingModel.HotelPrice?.perRoomBbPriceW
                                                    }`
                                                :
                                                `$${e.freeSalePackageStayingorBoardingModel.HotelPrice?.perRoomBbPriceW}`}

                                            
                                        
                                            </h4>
                                        <small className='SmallCap'>
                                           {
                                            (moment(this.state.PackageStartDate).add(i,'days').format('ddd') ==='Sat' || moment(this.state.PackageStartDate).add(i,'days').format('ddd') ==='Sun') && e.freeSalePackageStayingorBoardingModel.HotelPrice.weekEndDaysPricing===true?
                                            
                                       ` + $${ (
                                                (
                                                (e.freeSalePackageStayingorBoardingModel.HotelPrice.weekEndDaysPriceEntry?.perRoomBbPriceW /100) * 
                                                e.freeSalePackageStayingorBoardingModel.HotelPrice.weekEndDaysPriceEntry?.perRoomBbServicePerW)
                                                + 
                                                (
                                                    (e.freeSalePackageStayingorBoardingModel.HotelPrice.weekEndDaysPriceEntry?.perRoomBbPriceW /100) *
                                                    e.freeSalePackageStayingorBoardingModel.HotelPrice.weekEndDaysPriceEntry?.perRoomBbVatPerW
                                                    )
                                                     + 
                                                    (
                                                (e.freeSalePackageStayingorBoardingModel.HotelPrice.weekEndDaysPriceEntry?.perRoomBbPriceW /100) * 
                                                e.freeSalePackageStayingorBoardingModel.HotelPrice.weekEndDaysPriceEntry?.perRoomBbMunciplePerW
                                                )
                                                ).toFixed(2)
                                            } Taxes and fees`
                                       
                                            :
                                        
                                        `+ $${
                                            (
                                                (
                                                    (e.freeSalePackageStayingorBoardingModel.HotelPrice?.perRoomBbPriceW /100) * 
                                                    e.freeSalePackageStayingorBoardingModel.HotelPrice?.perRoomBbServicePerW)
                                                    + (
                                                        (e.freeSalePackageStayingorBoardingModel.HotelPrice?.perRoomBbPriceW /100) *
                                                        e.freeSalePackageStayingorBoardingModel.HotelPrice?.perRoomBbVatPerW
                                                        ) + 
                                                        (
                                                    (e.freeSalePackageStayingorBoardingModel.HotelPrice?.perRoomBbPriceW /100) * 
                                                    e.freeSalePackageStayingorBoardingModel.HotelPrice?.perRoomBbMunciplePerW
                                                    )
                                                ).toFixed(2)} 
                                        Taxes and fees`
                                        }

                                        
                                        </small>
                                        <small>with bed & Breakfast</small>
                                            </>
                                        
                                        :
                                        
                                        <>
                                        <h4 className='mb-0 text-primary fw-bold text-end'>
                                           { moment(this.state.PackageStartDate).add(i,'days').format('ddd') ==='Sat' || moment(this.state.PackageStartDate).add(i,'days').format('ddd') ==='Sun'?
                                        
                                            `$${e.freeSalePackageStayingorBoardingModel.HotelPrice?.weekEndDaysPricing===true?
                                                e.freeSalePackageStayingorBoardingModel.HotelPrice?.weekEndDaysPriceEntry?.perRoomPriceW
                                                :
                                                e.freeSalePackageStayingorBoardingModel.HotelPrice?.perRoomPriceW}`
                                            :
                                            `$${e.freeSalePackageStayingorBoardingModel.HotelPrice?.perRoomPriceW}`}

                                        
                                    
                                        </h4>
                                    <small className='SmallCap'>
                                       {
                                        (moment(this.state.PackageStartDate).add(i,'days').format('ddd') ==='Sat' || moment(this.state.PackageStartDate).add(i,'days').format('ddd') ==='Sun') && e.freeSalePackageStayingorBoardingModel.HotelPrice?.weekEndDaysPricing===true?
                                        
                                         ` + $${ (((e.freeSalePackageStayingorBoardingModel.HotelPrice.weekEndDaysPriceEntry?.perRoomPriceW /100) * e.freeSalePackageStayingorBoardingModel.HotelPrice.weekEndDaysPriceEntry?.perRoomServicePerW) + ((e.freeSalePackageStayingorBoardingModel.HotelPrice.weekEndDaysPriceEntry?.perRoomPriceW /100) * e.freeSalePackageStayingorBoardingModel.HotelPrice.weekEndDaysPriceEntry?.perRoomVatPerW) + ((e.freeSalePackageStayingorBoardingModel.HotelPrice.weekEndDaysPriceEntry?.perRoomPriceW /100) * e.freeSalePackageStayingorBoardingModel.HotelPrice.weekEndDaysPriceEntry?.perRoomMunciplePerW)).toFixed(2)} Taxes and fees`
                                    
                                            :
                                        
                                        `+ $${(
                                            (
                                                (e.freeSalePackageStayingorBoardingModel.HotelPrice?.perRoomPriceW /100) * 
                                                e.freeSalePackageStayingorBoardingModel.HotelPrice?.perRoomServicePerW)
                                                + (
                                                    (e.freeSalePackageStayingorBoardingModel.HotelPrice?.perRoomPriceW /100) *
                                                    e.freeSalePackageStayingorBoardingModel.HotelPrice?.perRoomVatPerW
                                                    ) + 
                                                    (
                                                (e.freeSalePackageStayingorBoardingModel.HotelPrice?.perRoomPriceW /100) * 
                                                e.freeSalePackageStayingorBoardingModel.HotelPrice?.perRoomMunciplePerW
                                                )
                                        ).toFixed(2)} 
                                        Taxes and fees`
                                    }
                                   
                                  

                                    </small>
                                        </>
                                        }


                            </div> 
                            </div>
                            <div className="rating">
                            <Rating
                        name="text-feedback"
                        size="small"
                        value={this.state.HotelData.find(h=>h.hotelId===e.freeSalePackageStayingorBoardingModel.hotelId)?.starRating}
                        readOnly
                        precision={1}
                        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                    />
                                </div> 
                                <div className="d-flex flex-column tags pt-1">
                                    <div>
                                        <span className="fas fa-comment-dollar me-1"></span> 
                                        
                                        <HtmlTooltip
                                                title={
                                                    <React.Fragment>
                                                    <Typography color="inherit">{`${e.freeSalePackageStayingorBoardingModel?.HotelPrice?.hotelContractCPModel?.seasonShortName} 
                                                    (${e.freeSalePackageStayingorBoardingModel?.HotelPrice?.hotelContractCPModel?.noShowCancellationPolicy})`}
                                                    </Typography>

                                                    
                                                    
                                                    {e.freeSalePackageStayingorBoardingModel?.HotelPrice?.hotelContractCPModel?.checkInPolicies.map(Cp=>{
                                                        return(
                                                            Cp?.policyDesc !== null ? 
     
                                                            <em>{Cp?.policyDesc}</em>
                                                           :
                                                        <em>
                                                        {`${Cp?.percentageOfBooking}% of Booking & ${Cp?.percentage}% of ${Cp?.noOfNights} Night Charges if cancelled from ${Cp?.nightsBeforeCheckinFrom} to ${Cp?.nightsBeforeCheckinUpto} Nights before CheckIn `}. <br/>
                                                        </em>
                                                        )
                                                    }

                                                    )
                                                    }
                                                    </React.Fragment>
                                                }
                                                >
                                                <Button>Cancellation Policy</Button>
                                                </HtmlTooltip>
                                    </div> 
                                    <div>
                                        <span className="fas fa-concierge-bell"></span> 
                                        Concierge
                                    </div>
                                    <div>
                                        <span className="fas fa-bed me-1"></span> 
                                        {e.freeSalePackageStayingorBoardingModel?.HotelPrice?.hcontractRoomName} <span className='SmallCap'> x { e.freeSalePackageStayingorBoardingModel?.RoomCount} </span> 
                                    </div> 
                                    <div>
                                        
                                    
                                        
                                    </div> 
                                    
                                    
                                    <Button onClick={()=>this.HandleRoomChange(e.freeSalePackageStayingorBoardingModel.hotelId,i)} key={e.freeSaleDayId}>Change Room</Button>
                                
                                    <Dialog
                                
                                
                                    PaperProps={{
                                    sx: {
                                        
                                        width: "60%",
                                        height: "100%",
                                        
                                    }
                                    }}

                                maxWidth='lg'
                                open={this.state.openRoom}
                                onClose={this.handleRoomClose}
                                aria-labelledby="responsive-dialog-title"
                                disableEnforceFocus
                            >
                                <DialogTitle id="responsive-dialog-title">
                                <div className=' d-flex justify-content-between'>
                                <div className="d-flex align-items-center">
                                {"Select Room of your Choice"}
                                </div>
                                <div className=" align-top">
                                <DialogActions>
                                <IconButton onClick={this.handleRoomClose} autoFocus>
                                <CloseIcon color='error'/>
                                </IconButton>
                                </DialogActions>
                                </div>
                                </div>
                                </DialogTitle>
                                <DialogContent  className=' dialogscroll'>

                                <Box>
                                    {this.state.RoomDatas?.map(e=>e.hotelContractRoomRates.map(x=>
                                    <div className=" listing" key={x.hotelContractRoomRatesId}>


                                        <div className="p-2 listing-child mt-1 d-flex flex-row">

                                            <img loading="lazy" src="https://i.imgur.com/ZGnpeai.jpg" alt='hotelimage' width="150" className="rounded"/>

                                            <div className="d-flex flex-column ms-2">

                                                <h5>{x.hcontractRoomName}</h5>

                                                <div className="d-flex flex-row room-spec">
                                                    <span> <i className="fa fa-bed text-muted"></i> King Bed</span>
                                                    <span><i className="fa fa-user text-muted"></i> Max {x.maxHeadCount}</span>
                                                    <span><i className="fa fa-wifi text-muted"></i> Free Wifi</span>
                                                </div>
                                                

                                            </div>


                                            
                                        </div>

                                        <div className="p-3 bg-white ">

                                        <div className="info">

                                            {/* <span><i className="fa fa-info-circle text-muted"></i> <small className="text-muted">Non Refundable</small></span> */}
                                            <HtmlTooltip
                                                title={
                                                    <React.Fragment>
                                                    <Typography color="inherit">{`${x.hotelContractCPModel.seasonShortName} (${x.hotelContractCPModel.noShowCancellationPolicy})`}</Typography>
                                                    
                                                    {x.hotelContractCPModel.checkInPolicies.map(Cp=>{
                                                        return(
                                                            Cp?.policyDesc !== null ? 
     
                                                            <em>{Cp?.policyDesc}</em>
                                                           :
                                                        <em>
                                                        {`${Cp.percentageOfBooking}% of Booking & ${Cp.percentage}% of ${Cp.noOfNights} Night Charges if cancelled from ${Cp.nightsBeforeCheckinFrom} to ${Cp.nightsBeforeCheckinUpto} Nights before CheckIn `}. <br/>
                                                        </em>
                                                        )
                                                    }

                                                    )
                                                    }
                                                    </React.Fragment>
                                                }
                                                >
                                                <Button>Cancellation Policy</Button>
                                                </HtmlTooltip>

                                            <span><i className="fa fa-car text-muted"></i> <small className="spec-text-color">Free Parking</small></span>
                                            <span><i className="fa fa-bed text-muted"></i> <small className="spec-text-color">Room Only</small></span>
                                            
                                        </div>


                                        <div className="d-flex justify-content-between mt-3">
                                            
                                            <div className="dropdown">
                                            <a className="more dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-expanded="false">
                                                More info
                                            </a>

                                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                                <li><a className="dropdown-item" href="#">Action</a></li>
                                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                                            </ul>
                                            </div>


                                            <div className="d-flex flex-row align-items-center spec">
                                                <span className="text-muted"><i className="fa fa-moon-o"></i> 2</span>
                                                <span className="text-muted"><i className="fa fa-user"></i> 2</span>
                                                {/* <span className="text-primary font-weight-bold">USD {x.perRoomPriceW}</span> */}
                                                <h4 className='mb-0 text-primary fw-bold'>
                                                   

                                        {
                                          moment(this.state.PackageStartDate).add(this.state.IndexStoreAge,'days').format('ddd') === 'Sat' || moment(this.state.PackageStartDate).add(this.state.IndexStoreAge,'days').format('ddd')==='Sun'?
                                            `$${x.weekEndDaysPricing===true?x.weekEndDaysPriceEntry?.perRoomPriceW:x.perRoomPriceW}`
                                            :
                                            `$${x.perRoomPriceW}`
                                        }
                                        </h4>
                                        {
                                          (moment(this.state.PackageStartDate).add(this.state.IndexStoreAge,'days').format('ddd')==='Sat' || moment(this.state.PackageStartDate).add(this.state.IndexStoreAge,'days').format('ddd') === 'Sun') && x.weekEndDaysPricing===true?
                                        <span className='text-sm text-primary '>
                                        +$ {(((x.weekEndDaysPriceEntry.perRoomPriceW /100) * x.weekEndDaysPriceEntry.perRoomServicePerW) + ((x.weekEndDaysPriceEntry.perRoomPriceW /100) * x.weekEndDaysPriceEntry.perRoomVatPerW) + ((x.weekEndDaysPriceEntry.perRoomPriceW /100) * x.weekEndDaysPriceEntry.perRoomMunciplePerW)).toFixed(2)} Taxes and fees
                                        </span>
                                        :
                                        <span className='text-sm'>
                                        +${(((x.perRoomPriceW /100) * x.perRoomServicePerW) + ((x.perRoomPriceW /100) * x.perRoomVatPerW) + ((x.perRoomPriceW /100) * x.perRoomMunciplePerW)).toFixed(2)} Taxes and fees
                                        </span>
                                        }
                                        

                                                <div className="form-check">
                                                {/* <input 
                                                className="form-check-input" 
                                                type="radio" 
                                                name="flexRadioDefault" 
                                                id="flexRadioDefault1" 
                                                
                                                
                                                
                                                /> */}
                                                <Radio
                                                    size="small"
                                                checked={x.hotelContractRoomRatesId === this.state.selectedRoomid && this.state.selectedbedtype==='b'}
                                                onChange={()=>this.onSiteChanged(x,'b')}
                                                value={x.hotelContractRoomRatesId === this.state.selectedRoomid && this.state.selectedbedtype==='b'}
                                                name="radio-buttons"
                                                inputProps={{ 'aria-label': 'A' }}
                                                />
                                                
                                                </div>
                                            </div>

                                        </div>

                                        </div>


                                        <div className="p-3 bg-white ">

                                        <div className="info">

                                            <span><i className="fa fa-check text-muted"></i> <small className="spec-text-color">Free Cancellation</small></span>

                                            <span><i className="fa fa-car text-muted"></i> <small className="spec-text-color">Free Parking</small></span>
                                            <span><i className="fa fa-car text-muted"></i> <small className="spec-text-color">With Bed & Breakfast</small></span>
                                            
                                        </div>


                                        <div className="d-flex justify-content-between mt-3">
                                            
                                            <div className="dropdown">
                                            <a className="more dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-expanded="false">
                                                More info
                                            </a>

                                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                                <li><a className="dropdown-item" href="#">Action</a></li>
                                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                                            </ul>
                                            </div>


                                            <div className="d-flex flex-row align-items-center spec">
                                                <span className="text-muted"><i className="fa fa-moon-o"></i> 2</span>
                                                <span className="text-muted"><i className="fa fa-user"></i> 2</span>
                                                {/* <span className="text-primary font-weight-bold">USD 522</span> */}
                                                <h4 className='mb-0 text-primary fw-bold'>
                                        {
                                            moment(this.state.PackageStartDate).add(this.state.IndexStoreAge,'days').format('ddd') ==='Sat' || moment(this.state.PackageStartDate).add(this.state.IndexStoreAge,'days').format('ddd') ==='Sun'?
                                            `$${x.weekEndDaysPricing===true?x.weekEndDaysPriceEntry?.perRoomBbPriceW:x.perRoomBbPriceW}`:`$${x.perRoomBbPriceW}`
                                        }
                                        </h4>
                                        {
                                            (moment(this.state.PackageStartDate).add(this.state.IndexStoreAge,'days').format('ddd') ==='Sat' || moment(this.state.PackageStartDate).add(this.state.IndexStoreAge,'days').format('ddd') ==='Sun') && x.weekEndDaysPricing===true?
                                            <span className='text-sm'>
                                            + $ {(((x.weekEndDaysPriceEntry.perRoomBbPriceW /100) * x.weekEndDaysPriceEntry.perRoomBbServicePerW) + ((x.weekEndDaysPriceEntry.perRoomBbPriceW /100) * x.weekEndDaysPriceEntry.perRoomBbVatPerW) + ((x.weekEndDaysPriceEntry.perRoomBbPriceW /100) * x.weekEndDaysPriceEntry.perRoomBbMunciplePerW)).toFixed(2)} Taxes and fees
                                            </span>
                                                :
                                            <span className='text-sm'>
                                            + ${(((x.perRoomBbPriceW /100) * x.perRoomBbServicePerW) + ((x.perRoomBbPriceW /100) * x.perRoomBbVatPerW) + ((x.perRoomBbPriceW /100) * x.perRoomBbMunciplePerW)).toFixed(2)} Taxes and fees
                                            </span>
                                            }
                                                <div className="form-check ms-2">
                                                <Radio
                                                    size="small"
                                                checked={x.hotelContractRoomRatesId === this.state.selectedRoomid && this.state.selectedbedtype==='bb'}
                                                onChange={()=>this.onSiteChanged(x,'bb')}
                                                value={x.hotelContractRoomRatesId === this.state.selectedRoomid && this.state.selectedbedtype==='bb'}
                                                name="radio-buttons"
                                                inputProps={{ 'aria-label': 'A' }}
                                                />
                                                
                                                </div>
                                            </div>

                                            </div>

                                            </div>
                                            </div>
                                                    ))}
                                                        </Box>
                                                    </DialogContent>
                                                    <DialogActions>
                                                <Button onClick={this.handleRoomClose}>Cancel</Button>
                                                <Button onClick={()=>this.handleRoomSelectChange()}>Select Room</Button>
                                                </DialogActions>
                                                </Dialog>

                                                        </div> 
                                                </div> 
                                        </div> 
                                        <div className="d-flex justify-content-end mt-1">
                                        <Button className="btn enquiry text-uppercase mx-2" style={{color:"#8F0F1C"}} size="small" onClick={()=>this.handleGetHotelDetailsById(e.freeSalePackageStayingorBoardingModel)}>Details</Button>


                                        <Dialog
                                                    
                                                    
                                                    PaperProps={{
                                                        sx: {
                                                        
                                                        width: "60%",
                                                        height: "100%",
                                                        
                                                        }
                                                    }}
    
                                                    maxWidth='lg'
                                                    open={this.state.openViewHotelDetailsById}
                                                    onClose={this.handleHotelDetailsClose}
                                                    aria-labelledby="responsive-dialog-title"
                                                    disableEnforceFocus
                                                >
                                                    <DialogTitle id="responsive-dialog-title">
                                                    <div className=' d-flex justify-content-between'>
                                                    <div className="d-flex align-items-center">
                                                    {"Your Hotel For the Day"}
                                                    </div>
                                                    <div className=" align-top">
                                                    <DialogActions>
                                                    <IconButton onClick={this.handleHotelDetailsClose} autoFocus>
                                                    <CloseIcon color='error'/>
                                                    </IconButton>
                                                    </DialogActions>
                                                    </div>
                                                    </div>
                                                    </DialogTitle>
                                                    <DialogContent  className=' dialogscroll'>

                                                    <Box>
                                                    
                                                    <div className="container">
                                                    <section className="mx-auto my-5 row" >
                                                        
                                                        <div className='col-12 mb-2' 
                                                        >
                                                        <div className="card mb-3">
                                                        <Carousel>
                                                {this.state.HotelDataDetailsById.hotelImageHotels?.map((e,i)=>(
                                                <Carousel.Item key={e.i}>
                                                    
                                                    <img loading="lazy" src={e.imageSrc} alt="" className="hotel-img testimonialImages" style={{width: '100%',
                                                    height:'auto',
                                                        objectFit: 'contain'}}/>
                                                    <Carousel.Caption style={{bottom: "9.25rem"}}>
                                                    <h3>{this.state.HotelDataDetailsById?.hotelName}</h3>
                                                    <p>{this.state.HotelDataDetailsById.cityName}, {this.state.HotelDataDetailsById.countryName}</p>
                                                    <Rating
                                                        name="text-feedback"
                                                        value={this.state.HotelDataDetailsById?.starRating}
                                                        readOnly
                                                        precision={1}
                                                        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                                                    />
                                                    </Carousel.Caption>
                                                </Carousel.Item>
                                                ))}
                                                </Carousel>
                                                        {
                                                            this.state.HotelDataDetailsById?
                                                            <div className="card-body">
                                                            <h5 className="card-title">{this.state.HotelDataDetailsById?.hotelName}</h5>
                                                            <p className="card-text">{this.state.HotelDataDetailsById?.generalInformation?.hotelInfo}</p>
                                                            <h6 className=' mt-1 fw-bold'>Accessibility</h6>
                                                            <p className="card-text">{this.state.HotelDataDetailsById?.generalInformation?.accessibilityInfo}</p>
                                                            <h6 className=' mt-1 fw-bold'>Additional Charge</h6>
                                                            <p className="card-text">{this.state.HotelDataDetailsById?.generalInformation?.aditionalChargeInfo}</p>
                                                            <h6 className=' mt-1 fw-bold'>ExteriorInfo</h6>
                                                            <p className="card-text">{this.state.HotelDataDetailsById?.generalInformation?.exteriorInfo}</p>
                                                            <h6 className=' mt-1 fw-bold'>Child Policy</h6>
                                                            <p className="card-text">{this.state.HotelDataDetailsById?.generalInformation?.childPolicy}</p>
                                                            <h6 className=' mt-1 fw-bold'>Infant Policy</h6>
                                                            <p className="card-text">{this.state.HotelDataDetailsById?.generalInformation?.infantPolicy}</p>
                                                            <h6 className=' mt-1 fw-bold'>Restaurant Information</h6>
                                                            <p className="card-text">{this.state.HotelDataDetailsById?.generalInformation?.restaurantInfo}</p>
                                                            <h6 className=' mt-1 fw-bold'>Display Terms</h6>
                                                            <p className="card-text">{this.state.HotelDataDetailsById?.generalInformation?.diplayTerms}</p>
                                                            <h6 className=' mt-1 fw-bold'>Checkin</h6>
                                                            <p className="card-text">{this.state.HotelDataDetailsById?.generalInformation?.checkin}</p>
                                                            <h6 className=' mt-1 fw-bold'>Checkout</h6>
                                                            <p className="card-text">{this.state.HotelDataDetailsById?.generalInformation?.checkout}</p>
                                                            <h6 className=' mt-1 fw-bold'>Website</h6>
                                                            <p className="card-text">
                                                                <small className="text-muted">{this.state.HotelDataDetailsById?.website}</small>
                                                            </p>
                                                            <div className='row' style={{backgroundColor:"#f6f7fa"}}>
                                                                <div className='col-6'>
                                                                <h6 className=' mt-1 fw-bold'>Hotel Facility</h6>
                                                                <p className="card-text">
                                                                    <ul className="text-muted">{this.state.HotelDataDetailsById?.hotelFacility?.map((e,i)=>{
                                                                        return(
                                                                            <li key={i}>{e.pfacilityName}</li>
                                                                        )
                                                                    })}</ul>
                                                                </p>
                                                                </div>
                                                                <div className='col-6'>
                                                                <h6 className=' mt-1 fw-bold'>Room Facility</h6>
                                                                <p className="card-text">
                                                                <ul className="text-muted">{this.state.HotelDataDetailsById?.roomFacility?.map((e,i)=>{
                                                                    return(
                                                                        <li key={i}>{e.roomFacilityName}</li>
                                                                    )
                                                                    })}</ul>
                                                                </p>
                                                                </div>
                                                            </div>
                                                        
                                                        </div>
                                                        :
                                                        <div className=' text-center fw-bolder fs-4'>Fetching Hotel Details ...</div>
                                                        }
                                                        </div>
                                                        </div>
                                                                
                                                        
                                                    </section>
                                                    </div>

                                                        </Box>
                                                    </DialogContent>
                                                    <DialogActions>
                                                <Button onClick={this.handleHotelDetailsClose}>Cancel</Button>
                                            
                                                </DialogActions>
                                                </Dialog>


                                                            <Button 
                                                            className="btn my-bgcolour text-uppercase text-white"
                                                            onClick={()=>this.HandleHotelChange(e.freeSalePackageStayingorBoardingModel,i)} 
                                                            key={e.freeSaleDayId}>Change </Button> 
                                                            <Dialog
                                                                   
                                                                    
                                                                   PaperProps={{
                                                                     sx: {
                                                                      
                                                                       width: "60%",
                                                                        height: "100%",
                                                                        
                                                                     }
                                                                   }}
                 
                                                                 maxWidth='lg'
                                                                 open={this.state.openHotel}
                                                                 onClose={this.handleHotelClose}
                                                                 aria-labelledby="responsive-dialog-title"
                                                                 disableEnforceFocus
                                                                 key={i}
                                                             >
                                                                 <DialogTitle id="responsive-dialog-title">
                                                                 <div className=' d-flex justify-content-between'>
                                                                 <div className="d-flex align-items-center">
                                                                 {"Select Hotel of your Choice"}
                                                                 </div>
                                                                 <div className=" align-top">
                                                                 <DialogActions>
                                                                 <IconButton onClick={this.handleHotelClose} autoFocus>
                                                                 <CloseIcon color='error'/>
                                                                 </IconButton>
                                                                 </DialogActions>
                                                                 </div>
                                                                 </div>
                                                                 </DialogTitle>
                                                                 <DialogContent  className=' dialogscroll'>

                                                                 <Box>
                                                                 
                                                                 <div className="container">
                                                                    <section className="mx-auto my-5 row" >
                                                                       {
                                                                        this.state.SelectedHotel !=="" && this.state.IndexStoreAge === 0?
                                                                        <>
                                                                        <h1>Select Vehicle</h1> {
                                                                            this.state.HotelChangeArrivalSelect&&this.state.HotelChangeArrivalSelect.map((e,i)=>{
                                                                                return(
                                                                        <div className='col-4 mb-2' 
                                                                        key={i} 
                                                                        onClick={()=>this.HandleArrivalVehicleChangesById(e)}>
                                                                        <div className={`card ${this.state.SelectedArrivalVehicle.transferId===e.transferId?"cardSelected":""}`}>
                                                                        <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                                                                            <img loading="lazy" src={e.vehicleTypeName==="Sedan"?
                                                                            `https://www.revv.co.in/blogs/wp-content/uploads/2022/03/Sedan-cars-for-road-trips-in-India.jpg`:
                                                                            e.vehicleTypeName==="SUV"?
                                                                            `https://imgd.aeplcdn.com/0X0/n/cw/ec/125331/hyundai-creta-right-front-three-quarter0.jpeg?isig=0&wm=1&q=75`:
                                                                            e.vehicleTypeName==="MUV"?
                                                                            `https://d2m3nfprmhqjvd.cloudfront.net/blog/20220228132635/Kia-Carnival-1-1160x748.jpg`:
                                                                            e.vehicleTypeName==="Coupe"?
                                                                            `https://carwow-uk.imgix.net/prismic/c2de1ad5-b419-4c51-8f10-639e954d3491_39008-E220dCoupe.jpg?auto=format&cs=tinysrgb&fit=clip&ixlib=rb-1.1.0&q=60&w=750`:
                                                                            ``} alt='car' className="img-fluid" style={{height:"180px",width:"100%"}}/>
                                                                            <a href="#!">
                                                                            <div className="mask" style={{backgroundColor: "rgba(251, 251, 251, 0.15)"}}></div>
                                                                            </a>
                                                                        </div>
                                                                        <div className="card-body">

                                                                            <h5 className='mb-0 text-primary fw-bold text-end'>
                                                                                   {e.vehicleMake}, {e.vehicleName}
                                                                            </h5>
                                                                            <div className="card-heading">
                                                                                {e.seatingCapacityMin}-{e.seatingCapacityMax} seatingCapacity
                                                                            </div>
                                                                            <div className="card-text">
                                                                               {e.driverName} will be your Driver
                                                                               he knows Languages Like {e.languagesKnown}
                                                                            </div>
                                                                            <div className="card-text">
                                                                               luggageDiminsion:{e.luggageDiminsion}
                                                                            </div>
                                                                            <div className="card-text text-primary">
                                                                                ${e.publishedPrice}
                                                                            </div>

                                                                            <p className="lead"><strong>Tonight's availability</strong></p>
                                                                            <ul className="list-unstyled list-inline d-flex justify-content-between">
                                                                            <li className="list-inline-item me-0">
                                                                                <div className="chip me-0">5:30PM</div>
                                                                            </li>
                                                                           
                                                                           
                                                                            </ul>
                                                                            
                                                                        </div>
                                                                        </div>
                                                                        </div>
                                                                                )
                                                                            })
                                                                        }
                                                                        </>
                                                                        :
                                                                         this.state.SelectedHotel !=="" && this.state.Days.length-1 === this.state.IndexStoreAge?
                                                                         <>
                                                                         <h1>Select Vehicle</h1> {
                                                                             this.state.HotelChangeDepartureSelect&&this.state.HotelChangeDepartureSelect.map((e,i)=>{
                                                                                 return(
                                                                         <div className='col-4 mb-2' 
                                                                         key={i} 
                                                                         onClick={()=>this.HandleDepartureVehicleChangesById(e)}>
                                                                         <div className={`card ${this.state.SelectedDepartureVehicle.transferId===e.transferId?"cardSelected":""}`}>
                                                                         <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                                                                             <img loading="lazy" src={e.vehicleTypeName==="Sedan"?
                                                                             `https://www.revv.co.in/blogs/wp-content/uploads/2022/03/Sedan-cars-for-road-trips-in-India.jpg`:
                                                                             e.vehicleTypeName==="SUV"?
                                                                             `https://imgd.aeplcdn.com/0X0/n/cw/ec/125331/hyundai-creta-right-front-three-quarter0.jpeg?isig=0&wm=1&q=75`:
                                                                             e.vehicleTypeName==="MUV"?
                                                                             `https://d2m3nfprmhqjvd.cloudfront.net/blog/20220228132635/Kia-Carnival-1-1160x748.jpg`:
                                                                             e.vehicleTypeName==="Coupe"?
                                                                             `https://carwow-uk.imgix.net/prismic/c2de1ad5-b419-4c51-8f10-639e954d3491_39008-E220dCoupe.jpg?auto=format&cs=tinysrgb&fit=clip&ixlib=rb-1.1.0&q=60&w=750`:
                                                                             ``} alt='car' className="img-fluid" style={{height:"180px",width:"100%"}}/>
                                                                             <a href="#!">
                                                                             <div className="mask" style={{backgroundColor: "rgba(251, 251, 251, 0.15)"}}></div>
                                                                             </a>
                                                                         </div>
                                                                         <div className="card-body">
 
                                                                             <h5 className='mb-0 text-primary fw-bold text-end'>
                                                                                    {e.vehicleMake}, {e.vehicleName}
                                                                             </h5>
                                                                             <div className="card-heading">
                                                                                 {e.seatingCapacityMin}-{e.seatingCapacityMax} seatingCapacity
                                                                             </div>
                                                                             <div className="card-text">
                                                                                {e.driverName} will be your Driver
                                                                                he knows Languages Like {e.languagesKnown}
                                                                             </div>
                                                                             <div className="card-text">
                                                                                luggageDiminsion:{e.luggageDiminsion}
                                                                             </div>
                                                                             <div className="card-text text-primary">
                                                                                 ${e.publishedPrice}
                                                                             </div>
 
                                                                             <p className="lead"><strong>Tonight's availability</strong></p>
                                                                             <ul className="list-unstyled list-inline d-flex justify-content-between">
                                                                             <li className="list-inline-item me-0">
                                                                                 <div className="chip me-0">5:30PM</div>
                                                                             </li>
                                                                            
                                                                            
                                                                             </ul>
                                                                             
                                                                         </div>
                                                                         </div>
                                                                         </div>
                                                                                 )
                                                                             })
                                                                         }
                                                                         </>
                                                                          
                                                                        :
                                                                        
                                                                            this.state.HotelChangeData && this.state.HotelChangeData.map((e,i)=>{
                                                                                return(
                                                                        <div className='col-4' 
                                                                        key={i} 
                                                                        onClick={()=>this.HandleHotelChangesById(e)}>
                                                                        <div className={`card ${this.state.SelectedHotel.hotelId===e.hotelId?"cardSelected":""}`}>
                                                                        <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                                                                            <img loading="lazy" src="https://images.unsplash.com/photo-1615460549969-36fa19521a4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fGhvdGVsfGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt='htlimg' className="img-fluid" />
                                                                            <a href="#!">
                                                                            <div className="mask" style={{backgroundColor: "rgba(251, 251, 251, 0.15)"}}></div>
                                                                            </a>
                                                                        </div>
                                                                        <div className="card-body">
                                                                            <h5 className="card-title font-weight-bold">
                                                                                {e.hotelName}
                                                                            </h5>
                                                                            <ul className="list-unstyled list-inline mb-0">
                                                                            <li className="list-inline-item me-0">
                                                                                <i className="fas fa-star text-warning fa-xs"> </i>
                                                                            </li>
                                                                            <li className="list-inline-item me-0">
                                                                                <i className="fas fa-star text-warning fa-xs"></i>
                                                                            </li>
                                                                            <li className="list-inline-item me-0">
                                                                                <i className="fas fa-star text-warning fa-xs"></i>
                                                                            </li>
                                                                            <li className="list-inline-item me-0">
                                                                                <i className="fas fa-star text-warning fa-xs"></i>
                                                                            </li>
                                                                            <li className="list-inline-item">
                                                                                <i className="fas fa-star-half-alt text-warning fa-xs"></i>
                                                                            </li>
                                                                            <li className="list-inline-item">
                                                                                <p className="text-muted">4.5 (413)</p>
                                                                            </li>
                                                                            </ul>
                                                                        

                                                                            <h5 className='mb-0 text-primary fw-bold text-end'>
                                                                            {
                                                                            moment(this.state.PackageStartDate).add(i,'days').format('ddd') === 'Sat' || moment(this.state.PackageStartDate).add(i,'days').format('ddd')==='Sun'?
                                                                                `$${e.hotelContractRates[0]?.hotelContractRoomRates.weekEndDaysPricing===true?e.hotelContractRates[0]?.hotelContractRoomRates.weekEndDaysPriceEntry?.perRoomPriceW:e.hotelContractRates[0]?.hotelContractRoomRates.perRoomPriceW}`:`$${e.hotelContractRates[0]?.hotelContractRoomRates?.perRoomPriceW}`
                                                                            }
                                                                            </h5>
                                                                            {
                                                                            (moment(this.state.PackageStartDate).add(i,'days').format('ddd')==='Sat' || moment(this.state.PackageStartDate).add(i,'days').format('ddd') === 'Sun') && e.hotelContractRates[0]?.hotelContractRoomRates.weekEndDaysPricing===true?
                                                                            <p className='text-sm text-black-50 text-end' style={{fontSize:"13px"}}>
                                                                            +$ {(((e.hotelContractRates[0]?.hotelContractRoomRates?.weekEndDaysPriceEntry?.perRoomPriceW /100) * e.hotelContractRates[0]?.hotelContractRoomRates?.weekEndDaysPriceEntry?.perRoomServicePerW) + ((e.hotelContractRates[0]?.hotelContractRoomRates?.weekEndDaysPriceEntry?.perRoomPriceW /100) * e.hotelContractRates[0]?.hotelContractRoomRates?.weekEndDaysPriceEntry?.perRoomVatPerW) + ((e.hotelContractRates[0].hotelContractRoomRates?.weekEndDaysPriceEntry?.perRoomPriceW /100) * e.hotelContractRates[0]?.hotelContractRoomRates?.weekEndDaysPriceEntry?.perRoomMunciplePerW)).toFixed(2)} Taxes and fees
                                                                            </p>
                                                                            :
                                                                            <p className='text-sm text-black-50 text-end' style={{fontSize:"13px"}}>
                                                                            +${(((e.hotelContractRates[0]?.hotelContractRoomRates?.perRoomPriceW /100) * e.hotelContractRates[0]?.hotelContractRoomRates?.perRoomServicePerW) + ((e.hotelContractRates[0]?.hotelContractRoomRates?.perRoomPriceW /100) * e.hotelContractRates[0]?.hotelContractRoomRates?.perRoomVatPerW) + ((e.hotelContractRates[0]?.hotelContractRoomRates?.perRoomPriceW /100) * e.hotelContractRates[0]?.hotelContractRoomRates?.perRoomMunciplePerW)).toFixed(2)} Taxes and fees
                                                                            </p>
                                                                            }

                                                                            
                                                                            <p className="mb-2">{e.address1}, {e.cityName} ,{e.countryName}</p>
                                                                            <p className="card-text">
                                                                            Some quick example text to build on the card title and make up the bulk of the
                                                                            card's content.
                                                                            </p>
                                                                            <hr className="my-4" />
                                                                            <p className="lead"><strong>Tonight's availability</strong></p>
                                                                            <ul className="list-unstyled list-inline d-flex justify-content-between">
                                                                            <li className="list-inline-item me-0">
                                                                                <div className="chip me-0">5:30PM</div>
                                                                            </li>
                                                                            <li className="list-inline-item me-0">
                                                                                <div className="chip bg-secondary text-white me-0">7:30PM</div>
                                                                            </li>
                                                                           
                                                                            </ul>
                                                                            
                                                                        </div>
                                                                        </div>
                                                                        </div>
                                                                                )
                                                                            })
                                                                         
                                                                            
                                                                        }
                                                                        
                                                                    </section>
                                                                    </div>

                                                                     </Box>
                                                                 </DialogContent>
                                                                 <DialogActions>
                                                             <Button onClick={this.handleHotelClose}>Cancel</Button>
                                                             <Button onClick={()=>this.handleHotelSelectChange()}>Select Hotel</Button>
                                                             </DialogActions>
                                                             </Dialog>
                                                            </div> 
                                                        </div> 
                                                        </div> 
                                                        :<div className='cardSkeliton' >
                                                        </div>
                                                            }

 {/* ############### SIght Seeing For the Day #####################  */}


                                                            {

                                                            this.state.HotelData?   
                                                                
                                                            <>
                                                            { 
                                                                e.dayDescriptionandDetails.sightSeeingId===""?
                                                                <div>
                                                                <Button 
                                                                className="btn my-bgcolour text-uppercase text-white"
                                                                onClick={()=>this.HandleSightSeeingChange(this.state.CountryId,e.dayDescriptionandDetails.freeSaleArrivalDayId)} 
                                                                > Add Tour for the Day </Button> 
    
                                                                <Dialog
                                                                       
                                                                        
                                                                       PaperProps={{
                                                                         sx: {
                                                                          
                                                                           width: "60%",
                                                                            height: "100%",
                                                                            
                                                                         }
                                                                       }}
                     
                                                                     maxWidth='lg'
                                                                     open={this.state.openSightSeeing}
                                                                     onClose={this.handleSightSeeingChangeClose}
                                                                     aria-labelledby="responsive-dialog-title"
                                                                     disableEnforceFocus
                                                                 >
                                                                     <DialogTitle id="responsive-dialog-title">
                                                                     <div className=' d-flex justify-content-between'>
                                                                     <div className="d-flex align-items-center">
                                                                     {"Select Sight You Want to Visit"}
                                                                     </div>
                                                                     <div className=" align-top">
                                                                     <DialogActions>
                                                                     <IconButton onClick={this.handleSightSeeingChangeClose} autoFocus>
                                                                     <CloseIcon color='error'/>
                                                                     </IconButton>
                                                                     </DialogActions>
                                                                     </div>
                                                                     </div>
                                                                     </DialogTitle>
                                                                     <DialogContent  className=' dialogscroll'>
    
                                                                     <Box>
                                                                     
                                                                    
                                                                    <div className=' container'>
                                                                        {this.state.sightseeingid===''?
                                                                        <>
                                                                        <div className="row row-cols-1 row-cols-md-3 g-4">
                                                                        {  this.state.sightSeeingData.map(e=>{
                                                                                return(
                                                                                    <div className="col" key={e.sightSeeingId} onClick={()=>this.HandleSightSeeingChangeD(e)}>
                                                                                        <div className="card h-100">
                                                                                        <img loading="lazy" src="https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp" className="card-img-top" alt="Hollywood Sign on The Hill"/>
                                                                                        <div className="card-body">
                                                                                            <h5 className="card-title">{e.sightSeeingName}</h5>
                                                                                            <h6 className="card-text text-primary text-end" style={{color:"#8F0F1C"}}>
                                                                                            ${(e.adultPrice + e.publishedPrice)}
                                                                                            </h6>
                                                                                            <Button style={{backgroundColor:"#8F0F1C"}} size="small" variant='contained' className=' card-footer'>
                                                                                                Details
                                                                                            </Button>
                                                                                        </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    
                                                                                )  
                                                                            }
                                                                            )
                                                                            
                                                                        }
                                                                        </div>
                                                                        
                                                                        </>   
                                                                            :
                                                                        <div className='TabContainerSightSeeing'>
                                                                        <Tabs
                                                                        defaultActiveKey="home"
                                                                        id="justify-tab-example"
                                                                        className="mb-3 text-black"
                                                                        justify
                                                                        >
                                                                        <Tab eventKey="home" title="Tour Details">

                                                                            <div className='row'>
                                                                            <div className='col-lg-4 col-md-12 mb-4 mb-lg-0'>
                                                                                <img loading="lazy"
                                                                                src='https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp'
                                                                                className='w-100 shadow-1-strong rounded mb-4'
                                                                                alt='Boat on Calm Water'
                                                                                />

                                                                                <img loading="lazy"
                                                                                src='https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain1.webp'
                                                                                className='w-100 shadow-1-strong rounded mb-4'
                                                                                alt='Wintry Mountain Landscape'
                                                                                />
                                                                            </div>

                                                                            <div lg={4} className='col-lg-4 col-md-12 mb-4 mb-lg-0'>
                                                                                <img loading="lazy"
                                                                                src='https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain2.webp'
                                                                                className='w-100 shadow-1-strong rounded mb-4'
                                                                                alt='Mountains in the Clouds'
                                                                                />

                                                                                <img loading="lazy"
                                                                                src='https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp'
                                                                                className='w-100 shadow-1-strong rounded mb-4'
                                                                                alt='Boat on Calm Water'
                                                                                />
                                                                            </div>

                                                                            <div lg={4} className='col-lg-4 col-md-12 mb-4 mb-lg-0'>
                                                                                <img loading="lazy"
                                                                                src='https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(18).webp'
                                                                                className='w-100 shadow-1-strong rounded mb-4'
                                                                                alt='Waves at Sea'
                                                                                />

                                                                                <img loading="lazy"
                                                                                src='https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain3.webp'
                                                                                className='w-100 shadow-1-strong rounded mb-4'
                                                                                alt='Yosemite National Park'
                                                                                />
                                                                            </div>
                                                                            </div>

                                                                            <div className='row'>
                                                                                <h4 className=' text-center fw-bold colorOfText'>
                                                                                    Tour Description and Details
                                                                                </h4>
                                                                                <div className='col-12'>
                                                                                        {this.state.sightSeeingDataById.sightSeeingDescription}
                                                                                </div>
                                                                                </div>

                                                                                <div className='row'>
                                                                                <div className='col-6'>
                                                                                    <h4 className=' text-center fw-bold colorOfText'>Inclusions</h4>
                                                                                    <p className=' m-0'> <Interweave content= {this.state.sightSeeingDataById.inclusion} className='Included'/></p>

                                                                                </div>
                                                                                <div className='col-6'>
                                                                                <h4 className=' text-center fw-bold colorOfText'>Exclusions</h4>
                                                                                <p className=' m-0'> <Interweave content= {this.state.sightSeeingDataById.exclusion} className='Excluded'/></p>

                                                                                </div>
                                                                                </div>
                                                                                <div className='row'>
                                                                                <h4 className=' text-center fw-bold colorOfText'>Activities For the Day</h4>

                                                                                    <div className='col-12'>
                                                                                        {this.state.sightSeeingDataById.sightSeeingActivities}
                                                                                    </div>
                                                                                </div>

                                                                        </Tab>
                                                                        <Tab eventKey="profile" title="Select Car" >                                                                   
                                                                        <div className="row row-cols-1 row-cols-md-3 g-4">
                                                                            {  this.state.VehicleData.map(e=>{
                                                                                    return(
                                                                                        <div className="col" key={e.vehicleId} >
                                                                                            <div className={`card h-100 ${this.state.VehicleSightId===e.vehicleId?"cardSelected":""}`}  onClick={()=>this.HandleVehicleChangeOnSightSeeing(e)}>
                                                                                            <img loading="lazy" src={e.vehicleTypeName==="Sedan"?
                                                                                            `https://www.revv.co.in/blogs/wp-content/uploads/2022/03/Sedan-cars-for-road-trips-in-India.jpg`:
                                                                                            e.vehicleTypeName==="SUV"?
                                                                                            `https://imgd.aeplcdn.com/0X0/n/cw/ec/125331/hyundai-creta-right-front-three-quarter0.jpeg?isig=0&wm=1&q=75`:
                                                                                            e.vehicleTypeName==="MUV"?
                                                                                            `https://d2m3nfprmhqjvd.cloudfront.net/blog/20220228132635/Kia-Carnival-1-1160x748.jpg`:
                                                                                            e.vehicleTypeName==="Coupe"?
                                                                                            `https://carwow-uk.imgix.net/prismic/c2de1ad5-b419-4c51-8f10-639e954d3491_39008-E220dCoupe.jpg?auto=format&cs=tinysrgb&fit=clip&ixlib=rb-1.1.0&q=60&w=750`:
                                                                                            ``}
                                                                                            className="card-img-top" alt="Hollywood Sign on The Hill"/>
                                                                                            <div className="card-body">
                                                                                                <h5 className="card-title">{e.vehicleMake}{e.vehicleName}, {e.vehicleTypeName}</h5>
                                                                                                <h6 className="card-text text-end" style={{color:"#8F0F1C"}}>
                                                                                                {e.seatingCapacityMin} - {e.seatingCapacityMax}
                                                                                                </h6>
                                                                                                {/* <Button style={{backgroundColor:"#8F0F1C"}} size="small" variant='contained' className=' card-footer'>
                                                                                                    Book
                                                                                                </Button> */}
                                                                                            </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        
                                                                                    )  
                                                                                }
                                                                                )
                                                                                
                                                                            }
                                                                            </div>
                                                                        </Tab>
                                                                        <Tab eventKey="longer-tab" title="Select Driver/Guide" >
                                                                        <div className="row row-cols-1 row-cols-md-3 g-4">
                                                                            {  this.state.DriverDataByCOuntryId.map(e=>{
                                                                                    return(
                                                                                        <div className="col" key={e.driverId} >
                                                                                            <div className={`card h-100 ${this.state.DriverSightId===e.driverId?"cardSelected":""}`}  onClick={()=>this.HandleDriverChangeOnSightSeeing(e)}>
                                                                                            <img loading="lazy" src={e.gender==="Male"?
                                                                                            `https://cdn2.momjunction.com/wp-content/uploads/2021/02/What-Is-A-Sigma-Male-And-Their-Common-Personality-Trait-910x1024.jpg`:                                                           `https://oliver-uploads-aus.s3.amazonaws.com/thumbs/500x500/82bf8a41-0e48-4b0c-bef4-1fd7add8b5c2.jpeg`}
                                                                                            className="card-img-top" alt="Hollywood Sign on The Hill"/>
                                                                                            <div className="card-body">
                                                                                                <h5 className="card-title">{e.driverName}</h5>
                                                                                                <h6 className="card-text text-end" style={{color:"#8F0F1C"}}>
                                                                                                {e.languagesKnown}
                                                                                                </h6>
                                                                                                {/* <Button style={{backgroundColor:"#8F0F1C"}} size="small" variant='contained' className=' card-footer'>
                                                                                                    Book
                                                                                                </Button> */}
                                                                                            </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        
                                                                                    )  
                                                                                }
                                                                                )
                                                                                
                                                                            }
                                                                            </div>
                                                                        </Tab>
                                                                        
                                                                        </Tabs>
                                                                        </div>
                                                                        
                                                                        }
                                                        
                                                                    
                                                                    </div>
                                                                   
    
                                                                         </Box>
                                                                     </DialogContent>
                                                                     <DialogActions>
                                                                 <Button onClick={this.handleSightSeeingChangeClose}>Cancel</Button>
                                                                 {
                                                                 this.state.DriverSightId!=="" && this.state.VehicleSightId!==""?    
                                                                    <Button onClick={()=>this.handleIncludeSightSelectChange()}>Include</Button>
                                                                    :""
                                                                 }
                                                                 </DialogActions>
                                                                 </Dialog>
                                                                </div>
                                                                :
                                                                <div className="bg-white shadow-sm p-2 border Card mb-2">
                                                            <div className="hotel py-2 px-2 pb-4 ">

                                                            <div className="row"> 
                                                            <div className="col-lg-5">
                                                            <img loading="lazy" src={e.dayDescriptionandDetails.freeSalePackageDayImages[0]?.imageSrc} alt="" className="hotel-img" style={{width: '100%',
                                                            height:'auto',
                                                            objectFit: 'contain'}}/> 
                                                            </div> 
                                                            <div className="col-lg-7"> 
                                                            <div className="d-md-flex align-items-md-center">
                                                            <div className="name">
                                                            <div>
                                                            {e.dayDescriptionandDetails.sightSeeingName}
                                                            </div>
                                                            <span className="city">
                                                            </span>
                                                            </div>
                                                            <div className="ms-auto code text-uppercase">



                                                            <h4 className='mb-0 text-primary fw-bold text-end'>
                                                            ${
                                                            (parseFloat(e.dayDescriptionandDetails.publishedPrice)) + parseFloat(e.dayDescriptionandDetails.adultPrice) + (parseFloat(e.dayDescriptionandDetails.ticketsPrice)) + (parseFloat(e.dayDescriptionandDetails.tourGuidePrice))}
                                                            </h4>
                                                            {
                                                            <small className='SmallCap text-end' >
                                                            Includes all Prices
                                                            </small>
                                                            }



                                                            </div> 
                                                            </div>
                                                            <div >
                                                            <Box sx={{ '& button': { mx: 1,my: 2 } }}>
                                                            <Button size="small" style={{color:"#8F0F1C"}} onClick={()=>this.HandleOpenViewGuide(e.dayDescriptionandDetails.driverId)}>View Guide/Driver</Button>

                                                            <Dialog
                                                                   
                                                                    
                                                                   PaperProps={{
                                                                     sx: {
                                                                      
                                                                       width: "60%",
                                                                        height: "100%",
                                                                        
                                                                     }
                                                                   }}
                 
                                                                 maxWidth='lg'
                                                                 open={this.state.openViewGuide}
                                                                 onClose={this.handleViewGuideClose}
                                                                 aria-labelledby="responsive-dialog-title"
                                                                 disableEnforceFocus
                                                             >
                                                                 <DialogTitle id="responsive-dialog-title">
                                                                 <div className=' d-flex justify-content-between'>
                                                                 <div className="d-flex align-items-center">
                                                                 {"Your Guide"}
                                                                 </div>
                                                                 <div className=" align-top">
                                                                 <DialogActions>
                                                                 <IconButton onClick={this.handleViewGuideClose} autoFocus>
                                                                 <CloseIcon color='error'/>
                                                                 </IconButton>
                                                                 </DialogActions>
                                                                 </div>
                                                                 </div>
                                                                 </DialogTitle>
                                                                 <DialogContent  className=' dialogscroll'>

                                                                 <Box>
                                                                 
                                                                
                                                                        {
                                                                           

                                                                           <section style={{backgroundColor: "#eee"}}>
                                                                <div className="container py-5">

                                                                    <div className="row">
                                                                    <div className="col-lg-4">
                                                                        <div className="card mb-4">
                                                                        <div className="card-body text-center">
                                                                            <img loading="lazy" src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" alt="avatar"
                                                                            className="rounded-circle img-fluid" style={{width: "150px"}}/>
                                                                            <h5 className="my-3">{this.state.ViewGuideData.driverName}</h5>
                                                                            <p className="text-muted mb-1">{this.state.ViewGuideData.gender} {this.state.ViewGuideData.guid===true?", Experienced Guide":''}</p>
                                                                            <p className="text-muted mb-4">{this.state.ViewGuideData.cityName}</p>
                                                                           
                                                                        </div>
                                                                        </div>
                                                                       
                                                                    </div>
                                                                    <div className="col-lg-8">
                                                                        <div className="card mb-4">
                                                                        <div className="card-body">
                                                                            <div className="row">
                                                                            <div className="col-sm-3">
                                                                                <p className="mb-0">Full Name</p>
                                                                            </div>
                                                                            <div className="col-sm-9">
                                                                                <p className="text-muted mb-0">{this.state.ViewGuideData.driverName}</p>
                                                                            </div>
                                                                            </div>
                                                                            <hr/>
                                                                            <div className="row">
                                                                            <div className="col-sm-3">
                                                                                <p className="mb-0">Email</p>
                                                                            </div>
                                                                            <div className="col-sm-9">
                                                                                <p className="text-muted mb-0">{this.state.ViewGuideData.emailAddress}</p>
                                                                            </div>
                                                                            </div>
                                                                            <hr/>
                                                                            <div className="row">
                                                                            <div className="col-sm-3">
                                                                                <p className="mb-0">Phone</p>
                                                                            </div>
                                                                            <div className="col-sm-9">
                                                                                <p className="text-muted mb-0">{this.state.ViewGuideData.phoneNumber}</p>
                                                                            </div>
                                                                            </div>
                                                                            <hr/>
                                                                            <div className="row">
                                                                            <div className="col-sm-3">
                                                                                <p className="mb-0">Drivers License No</p>
                                                                            </div>
                                                                            <div className="col-sm-9">
                                                                                <p className="text-muted mb-0">{this.state.ViewGuideData.driversLicenseNo}</p>
                                                                            </div>
                                                                            </div>
                                                                            <hr/>
                                                                            <div className="row">
                                                                            <div className="col-sm-3">
                                                                                <p className="mb-0">Familier Languages</p>
                                                                            </div>
                                                                            <div className="col-sm-9">
                                                                                <p className="text-muted mb-0">{this.state.ViewGuideData.languagesKnown}</p>
                                                                            </div>
                                                                            </div>
                                                                        </div>
                                                                        </div>
                                                                        
                                                                    </div>
                                                                    </div>
                                                                </div>
                                                                </section>



                                                                        }
                                                                        
                                                               

                                                                     </Box>
                                                                 </DialogContent>
                                                                 <DialogActions>
                                                            
                                                             </DialogActions>
                                                             </Dialog>


                                                             
                                                            <Button variant="contained" size="small" style={{backgroundColor:"#8F0F1C"}} onClick={()=>this.HandleOpenViewCar(e.dayDescriptionandDetails.vehicleId)}>View Car</Button>

                                                            <Dialog
                                                                   
                                                                    
                                                                   PaperProps={{
                                                                     sx: {
                                                                      
                                                                       width: "60%",
                                                                        height: "100%",
                                                                        
                                                                     }
                                                                   }}
                 
                                                                 maxWidth='lg'
                                                                 open={this.state.openViewCar}
                                                                 onClose={this.handleViewCarClose}
                                                                 aria-labelledby="responsive-dialog-title"
                                                                 disableEnforceFocus
                                                             >
                                                                 <DialogTitle id="responsive-dialog-title">
                                                                 <div className=' d-flex justify-content-between'>
                                                                 <div className="d-flex align-items-center">
                                                                 {"Your Car"}
                                                                 </div>
                                                                 <div className=" align-top">
                                                                 <DialogActions>
                                                                 <IconButton onClick={this.handleViewCarClose} autoFocus>
                                                                 <CloseIcon color='error'/>
                                                                 </IconButton>
                                                                 </DialogActions>
                                                                 </div>
                                                                 </div>
                                                                 </DialogTitle>
                                                                 <DialogContent  className=' dialogscroll'>

                                                                 <Box>
                                                                 
                                                                
                                                                        {
                                                                           

                                                                           <section style={{backgroundColor: "#eee"}}>
                                                                <div className="container py-5">

                                                                    <div className="row">
                                                                    <div className="col-lg-4">
                                                                        <div className="card mb-4">
                                                                        <div className="card-body text-center">
                                                                            <img loading="lazy" src="https://imgd.aeplcdn.com/1056x594/n/cw/ec/51435/innova-crysta-exterior-right-front-three-quarter-3.jpeg?q=75&wm=1" alt="avatar"
                                                                            className="rounded-circle img-fluid" style={{width: "150px"}}/>
                                                                            <h5 className="my-3">{this.state.ViewCarDayData.vehicleName}</h5>
                                                                            <p className="text-muted mb-1">{this.state.ViewCarDayData.vehicleMake} {this.state.ViewGuideData.guid===true?", Experienced Guide":''}</p>
                                                                            <p className="text-muted mb-4">{moment(this.state.ViewCarDayData.vehicleModel).format('YYYY')} Model</p>
                                                                           
                                                                        </div>
                                                                        </div>
                                                                       
                                                                    </div>
                                                                    <div className="col-lg-8">
                                                                        <div className="card mb-4">
                                                                        <div className="card-body">
                                                                            <div className="row">
                                                                            <div className="col-sm-3">
                                                                                <p className="mb-0">Vehicle Type</p>
                                                                            </div>
                                                                            <div className="col-sm-9">
                                                                                <p className="text-muted mb-0">{this.state.ViewCarDayData.vehicleTypeName}</p>
                                                                            </div>
                                                                            </div>
                                                                            <hr/>
                                                                            <div className="row">
                                                                            <div className="col-sm-3">
                                                                                <p className="mb-0">Vehicle Fuel Type</p>
                                                                            </div>
                                                                            <div className="col-sm-9">
                                                                                <p className="text-muted mb-0">{this.state.ViewCarDayData.vehicleFuelName}</p>
                                                                            </div>
                                                                            </div>
                                                                            <hr/>
                                                                            <div className="row">
                                                                            <div className="col-sm-3">
                                                                                <p className="mb-0">seating Capacity</p>
                                                                            </div>
                                                                            <div className="col-sm-9">
                                                                                <p className="text-muted mb-0">{this.state.ViewCarDayData.seatingCapacityMin} - {this.state.ViewCarDayData.seatingCapacityMax}</p>
                                                                            </div>
                                                                            </div>
                                                                            <hr/>
                                                                            <div className="row">
                                                                            <div className="col-sm-3">
                                                                                <p className="mb-0">luggage Diminsion</p>
                                                                            </div>
                                                                            <div className="col-sm-9">
                                                                                <p className="text-muted mb-0">{this.state.ViewCarDayData.luggageDiminsion}</p>
                                                                            </div>
                                                                            </div>
                                                                            <hr/>
                                                                            <div className="row">
                                                                            <div className="col-sm-3">
                                                                                <p className="mb-0">vehicle Wheel Drive</p>
                                                                            </div>
                                                                            <div className="col-sm-9">
                                                                                <p className="text-muted mb-0">{this.state.ViewCarDayData.vehicleWheelName}</p>
                                                                            </div>
                                                                            </div>
                                                                        </div>
                                                                        </div>
                                                                        
                                                                    </div>
                                                                    </div>
                                                                </div>
                                                                </section>



                                                                        }
                                                                        
                                                               

                                                                     </Box>
                                                                 </DialogContent>
                                                                 <DialogActions>
                                                             
                                                             </DialogActions>
                                                             </Dialog>

                                                            </Box>
                                                            </div>
                                                            </div> 
                                                            </div> 
                                                            <div className="d-flex justify-content-end mt-1">
                                                            <Button className="btn enquiry text-uppercase mx-2" style={{color:"#8F0F1C"}} size="small" onClick={()=>this.handleSightSeeingDetailsById(e.dayDescriptionandDetails.sightSeeingId)}>Details</Button>



                                                            <Dialog
                                                                   
                                                                    
                                                                   PaperProps={{
                                                                     sx: {
                                                                      
                                                                       width: "60%",
                                                                        height: "100%",
                                                                        
                                                                     }
                                                                   }}
                 
                                                                 maxWidth='lg'
                                                                 open={this.state.openViewSightSeeingDetailsById}
                                                                 onClose={this.handleSightSeeingDetailsClose}
                                                                 aria-labelledby="responsive-dialog-title"
                                                                 disableEnforceFocus
                                                             >
                                                                 <DialogTitle id="responsive-dialog-title">
                                                                 <div className=' d-flex justify-content-between'>
                                                                 <div className="d-flex align-items-center">
                                                                 {"Your Car"}
                                                                 </div>
                                                                 <div className=" align-top">
                                                                 <DialogActions>
                                                                 <IconButton onClick={this.handleSightSeeingDetailsClose} autoFocus>
                                                                 <CloseIcon color='error'/>
                                                                 </IconButton>
                                                                 </DialogActions>
                                                                 </div>
                                                                 </div>
                                                                 </DialogTitle>
                                                                 <DialogContent  className=' dialogscroll'>

                                                                 <Box>
                                                                 
                                                                
                                                                        {
                                                                           

                                                                           <section style={{backgroundColor: "#eee"}}>
                                                                <div className="container py-5">

                                                                <div className='row'>
                                                                <div className='col-lg-4 col-md-12 mb-4 mb-lg-0'>
                                                                    <img loading="lazy"
                                                                    src='https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp'
                                                                    className='w-100 shadow-1-strong rounded mb-4'
                                                                    alt='Boat on Calm Water'
                                                                    />

                                                                    <img loading="lazy"
                                                                    src='https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain1.webp'
                                                                    className='w-100 shadow-1-strong rounded mb-4'
                                                                    alt='Wintry Mountain Landscape'
                                                                    />
                                                                </div>

                                                                <div lg={4} className='col-lg-4 col-md-12 mb-4 mb-lg-0'>
                                                                    <img loading="lazy"
                                                                    src='https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain2.webp'
                                                                    className='w-100 shadow-1-strong rounded mb-4'
                                                                    alt='Mountains in the Clouds'
                                                                    />

                                                                    <img loading="lazy"
                                                                    src='https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp'
                                                                    className='w-100 shadow-1-strong rounded mb-4'
                                                                    alt='Boat on Calm Water'
                                                                    />
                                                                </div>

                                                                <div lg={4} className='col-lg-4 col-md-12 mb-4 mb-lg-0'>
                                                                    <img loading="lazy"
                                                                    src='https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(18).webp'
                                                                    className='w-100 shadow-1-strong rounded mb-4'
                                                                    alt='Waves at Sea'
                                                                    />

                                                                    <img loading="lazy"
                                                                    src='https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain3.webp'
                                                                    className='w-100 shadow-1-strong rounded mb-4'
                                                                    alt='Yosemite National Park'
                                                                    />
                                                                </div>
                                                                </div>

                                                                <div className='row'>
                                                                    <h4 className=' text-center fw-bold colorOfText'>
                                                                        Tour Description and Details
                                                                    </h4>
                                                                    <div className='col-12'>
                                                                            {this.state.SightSeeingDataDetailsById?.sightSeeingDescription}
                                                                    </div>
                                                                    </div>

                                                                    <div className='row'>
                                                                    <div className='col-6'>
                                                                        <h4 className=' text-center fw-bold colorOfText'>Inclusions</h4>
                                                                        <p className=' m-0'> <Interweave content= {this.state.SightSeeingDataDetailsById?.inclusion} className='Included'/></p>

                                                                    </div>
                                                                    <div className='col-6'>
                                                                    <h4 className=' text-center fw-bold colorOfText'>Exclusions</h4>
                                                                    <p className=' m-0'> <Interweave content= {this.state.SightSeeingDataDetailsById?.exclusion} className='Excluded'/></p>

                                                                    </div>
                                                                    </div>
                                                                    <div className='row'>
                                                                    <h4 className=' text-center fw-bold colorOfText'>Activities For the Day</h4>

                                                                        <div className='col-12'>
                                                                            {this.state.SightSeeingDataDetailsById?.sightSeeingActivities}
                                                                        </div>
                                                                    </div>
                                                                   
                                                                </div>
                                                                </section>



                                                                        }
                                                                        
                                                               

                                                                     </Box>
                                                                 </DialogContent>
                                                                 <DialogActions>
                                                                 <Button onClick={this.handleSightSeeingDetailsClose}>Cancel</Button>
                                                             </DialogActions>
                                                             </Dialog>



                                                            <Button variant='outlined' color="error" className="text-uppercase mx-1" style={{color:"#8F0F1C"}} onClick={()=>this.handleRemoveSightSeeing(e.dayDescriptionandDetails)}>Remove </Button> 
                                                            <Button 
                                                            className="btn my-bgcolour text-uppercase text-white"
                                                            onClick={()=>this.HandleSightSeeingChange(this.state.CountryId,e.dayDescriptionandDetails.freeSaleArrivalDayId)} 
                                                            >Change </Button> 

                                                            <Dialog
                                                                   
                                                                    
                                                                   PaperProps={{
                                                                     sx: {
                                                                      
                                                                       width: "60%",
                                                                        height: "100%",
                                                                        
                                                                     }
                                                                   }}
                 
                                                                 maxWidth='lg'
                                                                 open={this.state.openSightSeeing}
                                                                 onClose={this.handleSightSeeingChangeClose}
                                                                 aria-labelledby="responsive-dialog-title"
                                                                 disableEnforceFocus
                                                             >
                                                                 <DialogTitle id="responsive-dialog-title">
                                                                 <div className=' d-flex justify-content-between'>
                                                                 <div className="d-flex align-items-center">
                                                                 {"Select Sight You Want to Visit"}
                                                                 </div>
                                                                 <div className=" align-top">
                                                                 <DialogActions>
                                                                 <IconButton onClick={this.handleSightSeeingChangeClose} autoFocus>
                                                                 <CloseIcon color='error'/>
                                                                 </IconButton>
                                                                 </DialogActions>
                                                                 </div>
                                                                 </div>
                                                                 </DialogTitle>
                                                                 <DialogContent  className=' dialogscroll'>

                                                                 <Box>
                                                                 
                                                                
                                                                                  <div className=' container'>
                                                                                        {this.state.sightseeingid===''?
                                                                                        <>
                                                                                      <div className="row row-cols-1 row-cols-md-3 g-4">
                                                                                        {  this.state.sightSeeingData.map(e=>{
                                                                                                return(
                                                                                                    <div className="col" key={e.sightSeeingId} onClick={()=>this.HandleSightSeeingChangeD(e)}>
                                                                                                        <div className="card h-100">
                                                                                                        <img loading="lazy" src="https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp" className="card-img-top" alt="Hollywood Sign on The Hill"/>
                                                                                                        <div className="card-body">
                                                                                                            <h5 className="card-title">{e.sightSeeingName}</h5>
                                                                                                            <h6 className="card-text text-primary text-end" style={{color:"#8F0F1C"}}>
                                                                                                            ${e.adultPrice}
                                                                                                            </h6>
                                                                                                            <Button style={{backgroundColor:"#8F0F1C"}} size="small" variant='contained' className=' card-footer'>
                                                                                                                Details
                                                                                                            </Button>
                                                                                                        </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                    
                                                                                                )  
                                                                                            }
                                                                                            )
                                                                                            
                                                                                        }
                                                                                        </div>
                                                                                        
                                                                                        </>   
                                                                                            :
                                                                                        <div className='TabContainerSightSeeing'>
                                                                                        <Tabs
                                                                                        defaultActiveKey="home"
                                                                                        id="justify-tab-example"
                                                                                        className="mb-3 text-black"
                                                                                        justify
                                                                                        >
                                                                                        <Tab eventKey="home" title="Tour Details">

                                                                                            <div className='row'>
                                                                                            <div className='col-lg-4 col-md-12 mb-4 mb-lg-0'>
                                                                                                <img loading="lazy"
                                                                                                src='https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp'
                                                                                                className='w-100 shadow-1-strong rounded mb-4'
                                                                                                alt='Boat on Calm Water'
                                                                                                />

                                                                                                <img loading="lazy"
                                                                                                src='https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain1.webp'
                                                                                                className='w-100 shadow-1-strong rounded mb-4'
                                                                                                alt='Wintry Mountain Landscape'
                                                                                                />
                                                                                            </div>

                                                                                            <div lg={4} className='col-lg-4 col-md-12 mb-4 mb-lg-0'>
                                                                                                <img loading="lazy"
                                                                                                src='https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain2.webp'
                                                                                                className='w-100 shadow-1-strong rounded mb-4'
                                                                                                alt='Mountains in the Clouds'
                                                                                                />

                                                                                                <img loading="lazy"
                                                                                                src='https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp'
                                                                                                className='w-100 shadow-1-strong rounded mb-4'
                                                                                                alt='Boat on Calm Water'
                                                                                                />
                                                                                            </div>

                                                                                            <div lg={4} className='col-lg-4 col-md-12 mb-4 mb-lg-0'>
                                                                                                <img loading="lazy"
                                                                                                src='https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(18).webp'
                                                                                                className='w-100 shadow-1-strong rounded mb-4'
                                                                                                alt='Waves at Sea'
                                                                                                />

                                                                                                <img loading="lazy"
                                                                                                src='https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain3.webp'
                                                                                                className='w-100 shadow-1-strong rounded mb-4'
                                                                                                alt='Yosemite National Park'
                                                                                                />
                                                                                            </div>
                                                                                            </div>

                                                                                            <div className='row'>
                                                                                                <h4 className=' text-center fw-bold colorOfText'>
                                                                                                    Tour Description and Details
                                                                                                </h4>
                                                                                                <div className='col-12'>
                                                                                                        {this.state.sightSeeingDataById.sightSeeingDescription}
                                                                                                </div>
                                                                                                </div>

                                                                                                <div className='row'>
                                                                                                <div className='col-6'>
                                                                                                    <h4 className=' text-center fw-bold colorOfText'>Inclusions</h4>
                                                                                                    <p className=' m-0'> <Interweave content= {this.state.sightSeeingDataById.inclusion} className='Included'/></p>

                                                                                                </div>
                                                                                                <div className='col-6'>
                                                                                                <h4 className=' text-center fw-bold colorOfText'>Exclusions</h4>
                                                                                                <p className=' m-0'> <Interweave content= {this.state.sightSeeingDataById.exclusion} className='Excluded'/></p>

                                                                                                </div>
                                                                                                </div>
                                                                                                <div className='row'>
                                                                                                <h4 className=' text-center fw-bold colorOfText'>Activities For the Day</h4>

                                                                                                    <div className='col-12'>
                                                                                                        {this.state.sightSeeingDataById.sightSeeingActivities}
                                                                                                    </div>
                                                                                                </div>
    
                                                                                        </Tab>
                                                                                        <Tab eventKey="profile" title="Select Car" >                                                                   
                                                                                        <div className="row row-cols-1 row-cols-md-3 g-4">
                                                                                            {  this.state.VehicleData.map(e=>{
                                                                                                    return(
                                                                                                        <div className="col" key={e.vehicleId} >
                                                                                                            <div className={`card h-100 ${this.state.VehicleSightId===e.vehicleId?"cardSelected":""}`} onClick={()=>this.HandleVehicleChangeOnSightSeeing(e)}>
                                                                                                            <img loading="lazy" src={e.vehicleTypeName==="Sedan"?
                                                                                                            `https://www.revv.co.in/blogs/wp-content/uploads/2022/03/Sedan-cars-for-road-trips-in-India.jpg`:
                                                                                                            e.vehicleTypeName==="SUV"?
                                                                                                            `https://imgd.aeplcdn.com/0X0/n/cw/ec/125331/hyundai-creta-right-front-three-quarter0.jpeg?isig=0&wm=1&q=75`:
                                                                                                            e.vehicleTypeName==="MUV"?
                                                                                                            `https://d2m3nfprmhqjvd.cloudfront.net/blog/20220228132635/Kia-Carnival-1-1160x748.jpg`:
                                                                                                            e.vehicleTypeName==="Coupe"?
                                                                                                            `https://carwow-uk.imgix.net/prismic/c2de1ad5-b419-4c51-8f10-639e954d3491_39008-E220dCoupe.jpg?auto=format&cs=tinysrgb&fit=clip&ixlib=rb-1.1.0&q=60&w=750`:
                                                                                                            ``}
                                                                                                            className="card-img-top" alt="Hollywood Sign on The Hill"/>
                                                                                                            <div className="card-body">
                                                                                                                <h5 className="card-title">{e.vehicleMake}{e.vehicleName}, {e.vehicleTypeName}</h5>
                                                                                                                <h6 className="card-text text-end" style={{color:"#8F0F1C"}}>
                                                                                                                {e.seatingCapacityMin} - {e.seatingCapacityMax}
                                                                                                                </h6>
                                                                                                                {/* <Button style={{backgroundColor:"#8F0F1C"}} size="small" variant='contained' className=' card-footer' >
                                                                                                                    Book
                                                                                                                </Button> */}
                                                                                                            </div>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                        
                                                                                                    )  
                                                                                                }
                                                                                                )
                                                                                                
                                                                                            }
                                                                                            </div>
                                                                                        </Tab>
                                                                                        <Tab eventKey="longer-tab" title="Select Driver/Guide" >
                                                                                        <div className="row row-cols-1 row-cols-md-3 g-4">
                                                                                            {  this.state.DriverDataByCOuntryId.map(e=>{
                                                                                                    return(
                                                                                                        <div className="col" key={e.driverId} >
                                                                                                            <div className={`card h-100 ${this.state.DriverSightId===e.driverId?"cardSelected":""}`} onClick={()=>this.HandleDriverChangeOnSightSeeing(e)}>
                                                                                                            <img loading="lazy" src={e.gender==="Male"?
                                                                                                            `https://cdn2.momjunction.com/wp-content/uploads/2021/02/What-Is-A-Sigma-Male-And-Their-Common-Personality-Trait-910x1024.jpg`:                                                           `https://oliver-uploads-aus.s3.amazonaws.com/thumbs/500x500/82bf8a41-0e48-4b0c-bef4-1fd7add8b5c2.jpeg`}
                                                                                                            className="card-img-top" alt="Hollywood Sign on The Hill"/>
                                                                                                            <div className="card-body">
                                                                                                                <h5 className="card-title">{e.driverName}</h5>
                                                                                                                <h6 className="card-text text-end" style={{color:"#8F0F1C"}}>
                                                                                                                {e.languagesKnown}
                                                                                                                </h6>
                                                                                                                {/* <Button style={{backgroundColor:"#8F0F1C"}} size="small" variant='contained' className=' card-footer' >
                                                                                                                    Book
                                                                                                                </Button> */}
                                                                                                            </div>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                        
                                                                                                    )  
                                                                                                }
                                                                                                )
                                                                                                
                                                                                            }
                                                                                            </div>
                                                                                        </Tab>
                                                                                        
                                                                                        </Tabs>
                                                                                        </div>
                                                                                        
                                                                                        }
                                                                        
                                                                                  
                                                                                  </div>
                                                               

                                                                     </Box>
                                                                 </DialogContent>
                                                                 <DialogActions>
                                                             <Button onClick={this.handleSightSeeingChangeClose}>Cancel</Button>
                                                             {
                                                                 this.state.DriverSightId!=="" && this.state.VehicleSightId!==""?    
                                                                    <Button onClick={()=>this.handleIncludeSightSelectChange()}>Include</Button>
                                                                    :""
                                                                 }
                                                             </DialogActions>
                                                             </Dialog>

                                                            </div> 
                                                            </div> 
                                                                </div>
                                                             } 
                                                             </>
                                                            :<div className='cardSkeliton' >
                                                            </div>
                                                            }



{/* ################### Departure Day ##############################  */}


                                                            { i===this.state.Days.length-1?
                                                            
                                                            this.state.TransferADData?    
                                                            <>
                                                            {e.freeSalePackageDepartureModel.transferId===""?
                                                            <div>
                                                                 <Button 
                                                            className="btn my-bgcolour text-uppercase text-white"
                                                            onClick={()=>this.HandleTransferChangeOnDeparture(e.freeSalePackageDepartureModel,i)} 
                                                            > Add Departure Travel </Button> 
                                                            <Dialog
                                                                       
                                                                        
                                                                       PaperProps={{
                                                                         sx: {
                                                                          
                                                                           width: "60%",
                                                                            height: "100%",
                                                                            
                                                                         }
                                                                       }}
                     
                                                                     maxWidth='lg'
                                                                     open={this.state.openViewTransferDeparture}
                                                                     onClose={this.handleTransferDepartureClose}
                                                                     aria-labelledby="responsive-dialog-title"
                                                                     disableEnforceFocus
                                                                 >
                                                                     <DialogTitle id="responsive-dialog-title">
                                                                     <div className=' d-flex justify-content-between'>
                                                                     <div className="d-flex align-items-center">
                                                                     {"Select Vehicle of your Choice"}
                                                                     </div>
                                                                     <div className=" align-top">
                                                                     <DialogActions>
                                                                     <IconButton onClick={this.handleTransferDepartureClose} autoFocus>
                                                                     <CloseIcon color='error'/>
                                                                     </IconButton>
                                                                     </DialogActions>
                                                                     </div>
                                                                     </div>
                                                                     </DialogTitle>
                                                                     <DialogContent  className=' dialogscroll'>
    
                                                                     <Box>
                                                                     
                                                                     <div className="container">
                                                                        <section className="mx-auto my-5 row" >
                                                                            {
                                                                                this.state.TransferDepartureDataChange&&this.state.TransferDepartureDataChange.map((e,i)=>{
                                                                                    return(
                                                                            <div className='col-4 mb-2' 
                                                                            key={i} 
                                                                            onClick={()=>this.HandleDepartureVehicleChangesById(e)}>
                                                                            <div className={`card ${this.state.SelectedDepartureVehicle.transferId===e.transferId?"cardSelected":""}`}>
                                                                            <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                                                                                <img loading="lazy" src={e.vehicleTypeName==="Sedan"?
                                                                                `https://www.revv.co.in/blogs/wp-content/uploads/2022/03/Sedan-cars-for-road-trips-in-India.jpg`:
                                                                                e.vehicleTypeName==="SUV"?
                                                                                `https://imgd.aeplcdn.com/0X0/n/cw/ec/125331/hyundai-creta-right-front-three-quarter0.jpeg?isig=0&wm=1&q=75`:
                                                                                e.vehicleTypeName==="MUV"?
                                                                                `https://d2m3nfprmhqjvd.cloudfront.net/blog/20220228132635/Kia-Carnival-1-1160x748.jpg`:
                                                                                e.vehicleTypeName==="Coupe"?
                                                                                `https://carwow-uk.imgix.net/prismic/c2de1ad5-b419-4c51-8f10-639e954d3491_39008-E220dCoupe.jpg?auto=format&cs=tinysrgb&fit=clip&ixlib=rb-1.1.0&q=60&w=750`:
                                                                                ``} alt='car' className="img-fluid" style={{height:"180px",width:"100%"}}/>
                                                                                <a href="#!">
                                                                                <div className="mask" style={{backgroundColor: "rgba(251, 251, 251, 0.15)"}}></div>
                                                                                </a>
                                                                            </div>
                                                                            <div className="card-body">
    
                                                                                <h5 className='mb-0 text-primary fw-bold text-end'>
                                                                                       {e.vehicleMake}, {e.vehicleName}
                                                                                </h5>
                                                                                <div className="card-heading">
                                                                                    {e.seatingCapacityMin}-{e.seatingCapacityMax} seatingCapacity
                                                                                </div>
                                                                                <div className="card-text">
                                                                                   {e.driverName} will be your Driver
                                                                                   he knows Languages Like {e.languagesKnown}
                                                                                </div>
                                                                                <div className="card-text">
                                                                                   luggageDiminsion:{e.luggageDiminsion}
                                                                                </div>
                                                                                <div className="card-text text-primary">
                                                                                    ${e.publishedPrice}
                                                                                </div>
    
                                                                                <p className="lead"><strong>Tonight's availability</strong></p>
                                                                                <ul className="list-unstyled list-inline d-flex justify-content-between">
                                                                                <li className="list-inline-item me-0">
                                                                                    <div className="chip me-0">5:30PM</div>
                                                                                </li>
                                                                               
                                                                               
                                                                                </ul>
                                                                                
                                                                            </div>
                                                                            </div>
                                                                            </div>
                                                                                    )
                                                                                })
                                                                            }
                                                                            
                                                                        </section>
                                                                        </div>
    
                                                                         </Box>
                                                                     </DialogContent>
                                                                     <DialogActions>
                                                                 <Button onClick={this.handleTransferDepartureClose}>Cancel</Button>
                                                                 <Button onClick={()=>this.handleDepartureTransferChangeSelect()}>Select Transfer</Button>
                                                                 </DialogActions>
                                                                 </Dialog>
                                                            </div>
                                                            :
                                                            <div className="bg-white shadow-sm p-2 border Card mb-2">
                                                            <div className="hotel py-2 px-2 pb-4 border-bottom">
    
                                                            <div className="row"> 
                                                            <div className="col-lg-5">
                                                            <img loading="lazy" src={this.state.TransferADData.find(h=>h.transferId===e.freeSalePackageDepartureModel.transferId)?.vehicleTypeName==="Sedan"?
                                                            `https://www.revv.co.in/blogs/wp-content/uploads/2022/03/Sedan-cars-for-road-trips-in-India.jpg`:
                                                            this.state.TransferADData.find(h=>h.transferId===e.freeSalePackageDepartureModel.transferId)?.vehicleTypeName==="SUV"?
                                                            `https://imgd.aeplcdn.com/0X0/n/cw/ec/125331/hyundai-creta-right-front-three-quarter0.jpeg?isig=0&wm=1&q=75`:
                                                            this.state.TransferADData.find(h=>h.transferId===e.freeSalePackageDepartureModel.transferId)?.vehicleTypeName==="MUV"?
                                                            `https://d2m3nfprmhqjvd.cloudfront.net/blog/20220228132635/Kia-Carnival-1-1160x748.jpg`:
                                                            this.state.TransferADData.find(h=>h.transferId===e.freeSalePackageDepartureModel.transferId)?.vehicleTypeName==="Coupe"?
                                                            `https://carwow-uk.imgix.net/prismic/c2de1ad5-b419-4c51-8f10-639e954d3491_39008-E220dCoupe.jpg?auto=format&cs=tinysrgb&fit=clip&ixlib=rb-1.1.0&q=60&w=750`:
                                                            ``}
                                                                alt="" className="hotel-img" style={{width: '100%',
                                                            height:'auto',
                                                            objectFit: 'contain'}}/> 
                                                            </div> 
                                                            <div className="col-lg-7"> 
                                                            <div className="d-md-flex align-items-md-center justify-content-evenly">
                                                            <div className="name">
                                                            <div>
                                                           
                                                            {this.state.TransferADData.find(h=>h.transferId===e.freeSalePackageDepartureModel.transferId)?.routeName}
                                                           
                                                              
                                                            </div>
                                                            <span className="city">
                                                            {this.state.TransferADData.find(h=>h.transferId===e.freeSalePackageDepartureModel.transferId)?.vehicleMake},
                                                            {this.state.TransferADData.find(h=>h.transferId===e.freeSalePackageDepartureModel.transferId)?.vehicleName}
                                                            </span>
                                                            </div>
                                                            <div className="ms-auto code text-uppercase">
    
    
    
                                                            <h4 className='mb-0 text-primary fw-bold text-end'>
                                                            ${this.state.TransferADData.find(h=>h.transferId===e.freeSalePackageDepartureModel.transferId)?.publishedPrice}
                                                            </h4>
                                                      
                                                            <small className='SmallCap text-end'>
                                                            Including all Taxes and fees
                                                            </small>
                                                            
    
    
                                                            </div> 
                                                            </div>
                                                            <div className="rating">
                                                           
                                                            </div> 
                                                            <div className="d-flex flex-column tags pt-1">
                                                                    <div>
                                                                        <span className="fas fa-comment-dollar"></span> 
                                                                        {this.state.TransferADData.find(h=>h.transferId===e.freeSalePackageDepartureModel.transferId)?.travelCp}
                                                                    </div> 
                                                                    {/* <div>
                                                                        <span className="fas fa-concierge-bell"></span> 
                                                                        Concierge
                                                                    </div> */}
                                                                   
                                                                    <div>
                                                                  
                                                                    
                                                                    </div> 
                                                                
                                                                
                                                            
                                                            
                                                              
    
                                                                    </div> 
                                                            </div> 
                                                            </div> 
                                                            <div className="d-flex justify-content-end mt-1">
                                                            <Button className="btn enquiry text-uppercase mx-2" style={{color:"#8F0F1C"}} size="small" onClick={()=>this.handleTransferDepartureDetailsById(e.freeSalePackageDepartureModel)}>Details</Button>


                                                            <Dialog
                                                                   
                                                                    
                                                                   PaperProps={{
                                                                     sx: {
                                                                      
                                                                       width: "60%",
                                                                        height: "100%",
                                                                        
                                                                     }
                                                                   }}
                 
                                                                 maxWidth='lg'
                                                                 open={this.state.openViewTransferDepartureDetailsById}
                                                                 onClose={this.handleTransferDepartureDetailsClose}
                                                                 aria-labelledby="responsive-dialog-title"
                                                                 disableEnforceFocus
                                                             >
                                                                 <DialogTitle id="responsive-dialog-title">
                                                                 <div className=' d-flex justify-content-between'>
                                                                 <div className="d-flex align-items-center">
                                                                 {"Your Vehicle of the Day"}
                                                                 </div>
                                                                 <div className=" align-top">
                                                                 <DialogActions>
                                                                 <IconButton onClick={this.handleTransferDepartureDetailsClose} autoFocus>
                                                                 <CloseIcon color='error'/>
                                                                 </IconButton>
                                                                 </DialogActions>
                                                                 </div>
                                                                 </div>
                                                                 </DialogTitle>
                                                                 <DialogContent  className=' dialogscroll'>

                                                                 <Box>
                                                                 
                                                                 <div className="container">
                                                                    <section className="mx-auto my-5 row" >
                                                                        
                                                                           
                                                                        <div className='col-12 mb-2' 
                                                                       >
                                                                        <div className={`card`}>
                                                                        <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                                                                            <img loading="lazy" src={this.state.TransferDepartureData.addVehicleM?.vehicleTypeName==="Sedan"?
                                                                            `https://www.revv.co.in/blogs/wp-content/uploads/2022/03/Sedan-cars-for-road-trips-in-India.jpg`:
                                                                            this.state.TransferDepartureData.addVehicleM?.vehicleTypeName==="SUV"?
                                                                            `https://imgd.aeplcdn.com/0X0/n/cw/ec/125331/hyundai-creta-right-front-three-quarter0.jpeg?isig=0&wm=1&q=75`:
                                                                            this.state.TransferDepartureData.addVehicleM?.vehicleTypeName==="MUV"?
                                                                            `https://d2m3nfprmhqjvd.cloudfront.net/blog/20220228132635/Kia-Carnival-1-1160x748.jpg`:
                                                                            this.state.TransferDepartureData.addVehicleM?.vehicleTypeName==="Coupe"?
                                                                            `https://carwow-uk.imgix.net/prismic/c2de1ad5-b419-4c51-8f10-639e954d3491_39008-E220dCoupe.jpg?auto=format&cs=tinysrgb&fit=clip&ixlib=rb-1.1.0&q=60&w=750`:
                                                                            ``} alt='car' className="img-fluid" style={{height:"350px",width:"100%"}}/>
                                                                            <a href="#!">
                                                                            <div className="mask" style={{backgroundColor: "rgba(251, 251, 251, 0.15)"}}></div>
                                                                            </a>
                                                                        </div>
                                                                        <div className="card-body">

                                                                            <h5 className='mb-0 text-primary fw-bold text-end'>
                                                                                   {this.state.TransferDepartureData.addVehicleM?.vehicleMake}, {this.state.TransferDepartureData.addVehicleM?.vehicleName}
                                                                            </h5>
                                                                                <h5 className='mb-0 text-primary fw-bold text-end'>
                                                                                ${this.state.TransferDepartureData.publishedPrice}
                                                                                </h5>
                                                                            <div className="card-heading">
                                                                                {this.state.TransferDepartureData.addVehicleM?.seatingCapacityMin}-{this.state.TransferDepartureData.addVehicleM?.seatingCapacityMax} seatingCapacity
                                                                            </div>
                                                                            <div className="card-text">
                                                                               {this.state.TransferDepartureData.addVehicleM?.driverName} will be your Driver
                                                                               he knows Languages Like {this.state.TransferDepartureData.masterDriverM?.languagesKnown}
                                                                            </div>
                                                                            <div className="card-text">
                                                                               luggageDiminsion:{this.state.TransferDepartureData.addVehicleM?.luggageDiminsion}
                                                                            </div>
                                                                            <div className="card-text">
                                                                                
                                                                            </div>

                                                                            <p className="lead"><strong>Tonight's availability</strong></p>
                                                                            <ul className="list-unstyled list-inline d-flex justify-content-between">
                                                                            <li className="list-inline-item me-0">
                                                                                <div className="chip me-0">5:30PM</div>
                                                                            </li>
                                                                           
                                                                           
                                                                            </ul>
                                                                            
                                                                        </div>
                                                                        </div>
                                                                        </div>
                                                                               
                                                                        
                                                                    </section>
                                                                    </div>

                                                                     </Box>
                                                                 </DialogContent>
                                                                 <DialogActions>
                                                             <Button onClick={this.handleTransferDepartureDetailsClose}>Cancel</Button>
                                                            
                                                             </DialogActions>
                                                             </Dialog>


                                                                <Button variant='outlined' color="error" className="text-uppercase mx-1" style={{color:"#8F0F1C"}} onClick={()=>this.handleRemoveDepartureTransfer(e.freeSalePackageDepartureModel,i)}>Remove </Button> 
    
                                                            <Button 
                                                            className="btn my-bgcolour text-uppercase text-white"
                                                            onClick={()=>this.HandleTransferChangeOnDeparture(e.freeSalePackageDepartureModel,i)} 
                                                            >Change </Button> 
                                                            <Dialog
                                                                       
                                                                        
                                                                       PaperProps={{
                                                                         sx: {
                                                                          
                                                                           width: "60%",
                                                                            height: "100%",
                                                                            
                                                                         }
                                                                       }}
                     
                                                                     maxWidth='lg'
                                                                     open={this.state.openViewTransferDeparture}
                                                                     onClose={this.handleTransferDepartureClose}
                                                                     aria-labelledby="responsive-dialog-title"
                                                                     disableEnforceFocus
                                                                 >
                                                                     <DialogTitle id="responsive-dialog-title">
                                                                     <div className=' d-flex justify-content-between'>
                                                                     <div className="d-flex align-items-center">
                                                                     {"Select Vehicle of your Choice"}
                                                                     </div>
                                                                     <div className=" align-top">
                                                                     <DialogActions>
                                                                     <IconButton onClick={this.handleTransferDepartureClose} autoFocus>
                                                                     <CloseIcon color='error'/>
                                                                     </IconButton>
                                                                     </DialogActions>
                                                                     </div>
                                                                     </div>
                                                                     </DialogTitle>
                                                                     <DialogContent  className=' dialogscroll'>
    
                                                                     <Box>
                                                                     
                                                                     <div className="container">
                                                                        <section className="mx-auto my-5 row" >
                                                                            {
                                                                                this.state.TransferDepartureDataChange&&this.state.TransferDepartureDataChange.map((e,i)=>{
                                                                                    return(
                                                                            <div className='col-4 mb-2' 
                                                                            key={i} 
                                                                            onClick={()=>this.HandleDepartureVehicleChangesById(e)}>
                                                                            <div className={`card ${this.state.SelectedDepartureVehicle.transferId===e.transferId?"cardSelected":""}`}>
                                                                            <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                                                                                <img loading="lazy" src={e.vehicleTypeName==="Sedan"?
                                                                                `https://www.revv.co.in/blogs/wp-content/uploads/2022/03/Sedan-cars-for-road-trips-in-India.jpg`:
                                                                                e.vehicleTypeName==="SUV"?
                                                                                `https://imgd.aeplcdn.com/0X0/n/cw/ec/125331/hyundai-creta-right-front-three-quarter0.jpeg?isig=0&wm=1&q=75`:
                                                                                e.vehicleTypeName==="MUV"?
                                                                                `https://d2m3nfprmhqjvd.cloudfront.net/blog/20220228132635/Kia-Carnival-1-1160x748.jpg`:
                                                                                e.vehicleTypeName==="Coupe"?
                                                                                `https://carwow-uk.imgix.net/prismic/c2de1ad5-b419-4c51-8f10-639e954d3491_39008-E220dCoupe.jpg?auto=format&cs=tinysrgb&fit=clip&ixlib=rb-1.1.0&q=60&w=750`:
                                                                                ``} alt='car' className="img-fluid" style={{height:"180px",width:"100%"}}/>
                                                                                <a href="#!">
                                                                                <div className="mask" style={{backgroundColor: "rgba(251, 251, 251, 0.15)"}}></div>
                                                                                </a>
                                                                            </div>
                                                                            <div className="card-body">
    
                                                                                <h5 className='mb-0 text-primary fw-bold text-end'>
                                                                                       {e.vehicleMake}, {e.vehicleName}
                                                                                </h5>
                                                                                <div className="card-heading">
                                                                                    {e.seatingCapacityMin}-{e.seatingCapacityMax} seatingCapacity
                                                                                </div>
                                                                                <div className="card-text">
                                                                                   {e.driverName} will be your Driver
                                                                                   he knows Languages Like {e.languagesKnown}
                                                                                </div>
                                                                                <div className="card-text">
                                                                                   luggageDiminsion:{e.luggageDiminsion}
                                                                                </div>
                                                                                <div className="card-text text-primary">
                                                                                    ${e.publishedPrice}
                                                                                </div>
    
                                                                                <p className="lead"><strong>Tonight's availability</strong></p>
                                                                                <ul className="list-unstyled list-inline d-flex justify-content-between">
                                                                                <li className="list-inline-item me-0">
                                                                                    <div className="chip me-0">5:30PM</div>
                                                                                </li>
                                                                               
                                                                               
                                                                                </ul>
                                                                                
                                                                            </div>
                                                                            </div>
                                                                            </div>
                                                                                    )
                                                                                })
                                                                            }
                                                                            
                                                                        </section>
                                                                        </div>
    
                                                                         </Box>
                                                                     </DialogContent>
                                                                     <DialogActions>
                                                                 <Button onClick={this.handleTransferDepartureClose}>Cancel</Button>
                                                                 <Button onClick={()=>this.handleDepartureTransferChangeSelect()}>Select Transfer</Button>
                                                                 </DialogActions>
                                                                 </Dialog>
                                                            </div> 
                                                            </div> 
                                                            </div>
                                                            } 
                                                            </>   
                                                            :<div className='cardSkeliton' >
                                                            </div>
                                                            
                                                            :
                                                            ""}
  
                                                    </div>
                                                </div>
                                        
                                            </div>
                                    </>
                                    )}


                                    {/* ############# */}
                                    
                            </div>
                            <div className="col-md-1 my-bgcolour2"></div>
                             </div>
                                </div>
                          </>
                                
                              :'' }

                            {this.state.bgcolour === 2 ?
                                <div className='p-4'>
                                    <div className="row">
                                        <div className="col-5"><h5>What is Included ??</h5></div>
                                        
                                                <div className="col-7 m-0 p-0">
                                            <p className=' m-0'> <Interweave content= {this.state.Included} className='Included'/></p>
                                          
                                        </div>
                                        
                                       
                                    </div>
                                    <div className="row pt-3">
                                        <div className="col-5"><h5>What is Excluded ??</h5></div>
                                      
                                                <div className="col-7 m-0 p-0">
                                            <p className=' m-0'><Interweave content= {this.state.Excluded} className='Excluded'/> </p>
                                         
                                            
                                        </div>
                                            
                                       
                                    </div>
                                </div>
                                :''}


                            {this.state.bgcolour === 3 ?
                                <div>
                                    <div className="px-5 py-3">
                                        <div className="card my-border-none">
                                            <div className="card-body">
                                                <h5 className="card-title">
                                                    <span className="fs-2">Overview Of The City</span>
                                                </h5>
                                                <Interweave content= {this.state.Overview} />
                                                
                                                {/* {
                                            this.state.history.map(e =>
                                            <>
                                                <p className="card-text text-secondary my-3">
                                               {e.history1}
                                               {e.history2}
                                               {e.history3}
                                                </p>
                                                <p className="card-text text-secondary my-3">
                                                {e.history4}
                                                {e.history5}
                                                {e.history6}
                                                </p>
                                            </>
                                            )
                                                } */}
                                            </div>
                                        </div>
                                        <div className=' my-4'>
                                            {/* <LocationMaps/> */}
                                            <iframe
                                                width="100%"
                                                height="410"
                                                style={{ border: "0" }}
                                                allowfullscreen=""
                                                loading="lazy"
                                                title='gmp'
                                                src={`https://www.google.com/maps/embed/v1/place?q=${parseFloat(this.state.Latitude)},${parseFloat(this.state.Longitude)}&key=AIzaSyAH5P0VXp3xIekM6K3FedhnOQ2qY1de8VQ &zoom=6`}
                                               
                                            ></iframe>
                                        </div>
                                        <h5 className="card-title align-items-center"><span className="fs-2  my-colour-1 text-center">Make Your Own Memories</span></h5>
                                        <div className="row row-cols-1 row-cols-md-4 g-0">
                                        {this.state.ImageGallery.map((e,i )=>
                                            <div className="col p-2" key={i}>
                                            {i<8 && (
                                                <div className="card">
                                                    <img loading="lazy" src={e.imageSrc} className="card-img-top" alt="..." />
                                                </div>
                                            )
                                            }
                                            </div>
                                        )}
                                        </div>
                                    </div>
                                </div>
                                : ''
                            }

                            {this.state.bgcolour === 4 ?
                                <div className=' m-5'>
                                
                                        <table className="table p-5"Name>
                                            <thead>
                                                <tr>
                                                <th scope="col">Strat Date</th>
                                                <th scope="col">End Date</th>
                                                <th scope="col">Seats Left</th>
                                                <th scope="col">Price From</th>
                                                <th scope="col">Availability</th>
                                                <th scope="col">Reserve</th>
                                                </tr>
                                            </thead>
                                            {
                                                this.state.rows.map(e=>
                                                    <tbody>
                                                <tr>
                                                <th scope="row">{e.startDate}</th>
                                                <td>{e.endDate}</td>
                                                <td>{e.seatLeft}</td>
                                                <td>{e.PriceFrom}</td>
                                                <td>{e.availability}</td>
                                                <td>{e.reserves}</td>
                                                </tr>
                                               
                                            </tbody>
                                                )
                                            }
                                           
                                            </table>
                                </div>
                                :''}

                            {this.state.bgcolour === 5 ?
                                <div className="px-5">
                                    <h3 className="py-4">Tour Review Scores And Score Breakdown</h3>
                                    <p className="py-2"> Thanks to Singh holidays team, for giving us best experience to explore Georgia. It was our memorable tour specially Gadauri, Tblisi. One of the best Tour operators to explore georgia with. Hope to visit again and explore with your guys.</p>
                                    <div className="row g-0 my-border-bottom-dashes">
                                        <div className="col-md-4 g-0 my-bgcolour2 justify-content-center align-item-center my-auto">
                                            <h1 className="my-colour-1 fw-bold fs-1">7.8</h1>
                                            {/* <span><i className="fa fa-smile"></i></span> */}
                                        </div>
                                        <div className="col-md-8 g-0 my-bgcolour2">
                                            <div>
                                                <div className="card-body">
                                                    <div className="d-flex justify-content-between">
                                                        <h4 className="mr-auto">Over All</h4>
                                                        <h4>85%</h4>
                                                    </div>
                                                    <div className="progress mb-4" style={{ height: "5px" }}>
                                                        <div className="progress-bar" role="progressbar" style={{ width: '85%', backgroundColor: 'rgb(143,15,28)' }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                    <div className="d-flex justify-content-between">
                                                        <h4 className="mr-auto">Accomodation</h4>
                                                        <h4>68%</h4>
                                                    </div>
                                                    <div className="progress mb-4" style={{ height: "5px" }}>
                                                        <div className="progress-bar" role="progressbar" style={{ width: '68%', backgroundColor: 'rgb(143,15,28)' }} aria-valuenow="68" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                    <div className="d-flex justify-content-between">
                                                        <h4 className="mr-auto">Destination</h4>
                                                        <h4>88%</h4>
                                                    </div>
                                                    <div className="progress mb-4" style={{ height: "5px" }}>
                                                        <div className="progress-bar" role="progressbar" style={{ width: '88%', backgroundColor: 'rgb(143,15,28)' }} aria-valuenow="88" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                    <div className="d-flex justify-content-between">
                                                        <h4 className="mr-auto">Meals</h4>
                                                        <h4>87%</h4>
                                                    </div>
                                                    <div className="progress mb-4" style={{ height: "5px" }}>
                                                        <div className="progress-bar" role="progressbar" style={{ width: '87%', backgroundColor: 'rgb(143,15,28)' }} aria-valuenow="87" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                    <div className="d-flex justify-content-between">
                                                        <h4 className="mr-auto">Transport</h4>
                                                        <h4>92%</h4>
                                                    </div>
                                                    <div className="progress mb-4" style={{ height: "5px" }}>
                                                        <div className="progress-bar" role="progressbar" style={{ width: '92%', backgroundColor: 'rgb(143,15,28)' }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                    <div className="d-flex justify-content-between">
                                                        <h4 className="mr-auto">Value For Money</h4>
                                                        <h4>85%</h4>
                                                    </div>
                                                    <div className="progress mb-4" style={{ height: "5px" }}>
                                                        <div className="progress-bar" role="progressbar" style={{ width: '85%', backgroundColor: 'rgb(143,15,28)' }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row g-0 my-border-bottom-dashes my-2" >
                                        <div className="col-md-2 g-0 my-bgcolour2 justify-content-center m-auto">
                                            <img loading="lazy" src={reviewimg1} alt="..." />
                                        </div>
                                        <div className="col-md-10 g-0 bg-white my-3">
                                            <div className="card my-border-none">
                                                <div className="card-body my-colour-1">
                                                    <h4 className="card-title text-dark">Brenda Ward</h4>
                                                    <span className="card-title fst-italic">September 5, 2017 at 7:53 am</span>
                                                    <p className="card-text text-secondary my-3">
                                                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis Theme natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                                                    </p>
                                                    <Table>
                                                        <TableBody>
                                                            <TableRow>
                                                                <TableCell className="fs-6 text-secondary">Overall</TableCell>
                                                                <TableCell className="my-colour-1"><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="far fa-star" /></TableCell>
                                                            </TableRow>
                                                            <TableRow>
                                                                <TableCell className="fs-6 text-secondary">Accomodation</TableCell>
                                                                <TableCell className="my-colour-1"><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="far fa-star" /></TableCell>
                                                            </TableRow>
                                                            <TableRow>
                                                                <TableCell className="fs-6 text-secondary">Destination</TableCell>
                                                                <TableCell className="my-colour-1"><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /></TableCell>
                                                            </TableRow>
                                                            <TableRow>
                                                                <TableCell className="fs-6 text-secondary">Meals</TableCell>
                                                                <TableCell className="my-colour-1"><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="far fa-star" /><i className="far fa-star" /></TableCell>
                                                            </TableRow>
                                                            <TableRow>
                                                                <TableCell className="fs-6 text-secondary">Transport</TableCell>
                                                                <TableCell className="my-colour-1"><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="far fa-star" /></TableCell>
                                                            </TableRow>
                                                            <TableRow>
                                                                <TableCell className="fs-6 text-secondary">Value for Money</TableCell>
                                                                <TableCell className="my-colour-1"><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="far fa-star" /></TableCell>
                                                            </TableRow>
                                                        </TableBody>
                                                    </Table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row g-0 my-border-bottom-dashes my-2">
                                        <div className="col-md-2 g-0 my-bgcolour2 justify-content-center m-auto">
                                            <img loading="lazy" src={reviewimg2} alt="..." />
                                        </div>
                                        <div className="col-md-10 g-0 bg-white my-3">
                                            <div className="card my-border-none ">
                                                <div className="card-body my-colour-1">
                                                    <h4 className="card-title text-dark">Sharon Ray</h4>
                                                    <span className="card-title fst-italic">September 5, 2017 at 7:53 am</span>
                                                    <p className="card-text text-secondary my-3">
                                                        Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.
                                                    </p>
                                                    <Table>
                                                        <TableBody>
                                                            <TableRow>
                                                                <TableCell className="fs-6 text-secondary">Overall</TableCell>
                                                                <TableCell className="my-colour-1"><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="far fa-star" /></TableCell>
                                                            </TableRow>
                                                            <TableRow>
                                                                <TableCell className="fs-6 text-secondary">Accomodation</TableCell>
                                                                <TableCell className="my-colour-1"><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="far fa-star" /></TableCell>
                                                            </TableRow>
                                                            <TableRow>
                                                                <TableCell className="fs-6 text-secondary">Destination</TableCell>
                                                                <TableCell className="my-colour-1"><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /></TableCell>
                                                            </TableRow>
                                                            <TableRow>
                                                                <TableCell className="fs-6 text-secondary">Meals</TableCell>
                                                                <TableCell className="my-colour-1"><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="far fa-star" /><i className="far fa-star" /></TableCell>
                                                            </TableRow>
                                                            <TableRow>
                                                                <TableCell className="fs-6 text-secondary">Transport</TableCell>
                                                                <TableCell className="my-colour-1"><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="far fa-star" /></TableCell>
                                                            </TableRow>
                                                            <TableRow>
                                                                <TableCell className="fs-6 text-secondary">Value for Money</TableCell>
                                                                <TableCell className="my-colour-1"><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="far fa-star" /></TableCell>
                                                            </TableRow>
                                                        </TableBody>
                                                    </Table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                : ''
                            }
                        </div>

                        {/* <div className="col-md-1 my-bgcolour2"></div> */}
                        <div className="col-md-3 my-bgcolour2 align-item-center booking-form">
                            <div className="card bg-white p-3 ">
                                <h3 className="pt-3 pb-1">Book This Tour</h3>
                                <span className="text-end fw-bolder colorOfText fs-4 my-1">
                                  <span className='fs-6 text-black-50'>Total Package Price</span> $ {this.state.TotalPrice}
                                    </span>
                                    {/* <span className="text-end text-black-50 fw-bold mb-4">
                                        <small>
                                        Includes travelling and accommodations
                                        </small>
                                    </span> */}
                                    <span className="text-end text-black-50 fw-bold ">
                                        <small>
                                        Airport Transfers  :
                                        </small>
                                        <small>
                                        ${( parseFloat(this.state.ArrivalPrice) +  parseFloat(this.state.DeparturePrice))}
                                        </small>
                                    </span>
                                    <span className="text-end text-black-50 fw-bold ">
                                        <small>
                                        Hotel Price Including Tax  :
                                        </small>
                                        <small>
                                        ${ parseFloat(this.state.HotelPrice)}
                                        </small>
                                    </span>
                                    <span className="text-end text-black-50 fw-bold mb-4">
                                        <small>
                                        Sight Seeing Price Including Tax  :
                                        </small>
                                        <small>
                                        ${
                                            this.state.Days?.reduce((a,b)=>(
                                                a=a+
                                                (
                                                    parseFloat(b.dayDescriptionandDetails?.publishedPrice)+
                                                  
                                                    
                                                    parseFloat(b.dayDescriptionandDetails?.tourGuidePrice)
                                                    ) 
                                                    ) ,0)
                                        }
                                        </small>
                                    </span>

                                     {/* <div className="row "> */}
                                    <div className="row py-2 mb-3" style={{ fontSize: '18px' }}>
                                        <div className='col-4'>
                                        <span className=''>Adults</span>
                                        </div>

                                        <div className='col-3'>
                                        ${(this.state.Days?.reduce((a,b)=>(
                                        a=a+
                                        (
                                            parseFloat(b.dayDescriptionandDetails?.adultPrice)+
                                            parseFloat(b.dayDescriptionandDetails?.ticketsPrice)
                                        )
                                        *
                                        (this.state.adultCount)
                                        
                                            )
                                            ,0)
                                           
                                            ).toFixed(0)
                                    }
                                        </div>

                                        <div className='col-4'>
                                        <Box sx={{ minWidth: 70 }}>
                                        <FormControl fullWidth size="small">
                                        <InputLabel id="demo-select-small">Adults</InputLabel>

                                            <Select
                                            IconComponent = {ArrowDownwardIcon}
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={this.state.adultCount}
                                            label="Adults"
                                            onChange={this.handleAdultsCountChange}
                                            >
                                            <MenuItem value={0}>0</MenuItem>
                                            <MenuItem value={1}>1</MenuItem>
                                            <MenuItem value={2}>2</MenuItem>
                                            <MenuItem value={3}>3</MenuItem>
                                            <MenuItem value={4}>4</MenuItem>
                                            <MenuItem value={5}>5</MenuItem>
                                            <MenuItem value={6}>6</MenuItem>
                                            <MenuItem value={7}>7</MenuItem>
                                            <MenuItem value={8}>8</MenuItem>
                                            </Select>
                                        </FormControl>
                                        </Box>
                                        </div>
                                        
                                       
                                    </div>
                                    <div className="row py-2 mb-3" style={{ fontSize: '18px' }}>
                                        <div className='col-4'>
                                        <span className=''>Child</span>
                                        </div>

                                        <div className='col-3'>
                                        ${(this.state.Days?.reduce((a,b)=>(
                                        a=a+
                                        (
                                            parseFloat(b.dayDescriptionandDetails?.childPrice)+
                                            parseFloat(b.dayDescriptionandDetails?.ticketsPrice)
                                        )
                                        *
                                        (this.state.childCount)
                                        
                                            )
                                            ,0)
                                           
                                            ).toFixed(0)
                                    }

                                        </div>

                                        <div className='col-4'>
                                        <Box sx={{ minWidth: 70 }}>
                                        <FormControl fullWidth size="small">
                                        <InputLabel id="demo-select-small">Children</InputLabel>

                                            <Select
                                            IconComponent = {ArrowDownwardIcon}
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={this.state.childCount}
                                            label="Children"
                                            onChange={this.handleChildsCountChange}
                                            >
                                            <MenuItem value={0}>0</MenuItem>
                                            <MenuItem value={1}>1</MenuItem>
                                            <MenuItem value={2}>2</MenuItem>
                                            {/* <MenuItem value={3}>3</MenuItem>
                                            <MenuItem value={4}>4</MenuItem>
                                            <MenuItem value={5}>5</MenuItem>
                                            <MenuItem value={6}>6</MenuItem>
                                            <MenuItem value={7}>7</MenuItem>
                                            <MenuItem value={8}>8</MenuItem> */}
                                            </Select>
                                        </FormControl>
                                        </Box>
                                        </div>
                                        
                                        {/* <div className="col-5 d-flex">
                                        
                                         <IconButton className='IconHoverRemove' onClick={this.Dechilds}>
                                        <RemoveIcon  sx={{ color: red[700] }}/>
                                      </IconButton>
                                    <label className=' text-center px-3 text-center d-flex justify-content-center align-items-center'>{this.state.childCount}</label>
                                    <IconButton className='IconHoverAdd' onClick={this.Inchilds}>
                                        <AddIcon color="success"/>
                                         parseFloat(this.state.ArrivalPrice)
                    + parseFloat(this.state.DeparturePrice)
                    + parseFloat(this.state.HotelPrice)
                                      </IconButton>  
                                        </div> */}
                                    </div>
                                    
                                {/* </div> */}




                                {/* <div className="row py-2 mb-3" style={{ fontSize: '18px' }}>
                                <div className="row">
                                <div className="col-sm-4">
                                    <div className="form-group">
                                        <span className="form-label">Rooms</span>
                                        <select className="form-control">
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                        </select>
                                        <span className="select-arrow"></span>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="form-group">
                                        <span className="form-label">Adults</span>
                                        <select className="form-control">
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                        </select>
                                        <span className="select-arrow"></span>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="form-group">
                                        <span className="form-label">Children</span>
                                        <select className="form-control">
                                            <option>0</option>
                                            <option>1</option>
                                            <option>2</option>
                                        </select>
                                        <span className="select-arrow"></span>
                                    </div>
                                </div>
                            </div>
                                    </div> */}
                                    
                                




                                {/* <div className="inputContainer py-2" style={{ fontSize: '18px' }}>
                                    <i className="fa fa-user fs-5 fw-normal my-colour-1"></i>
                                    <input className="my-border-none w-100 pb-1 my-border-bottom text-black" type="text" placeholder="Name" name="name" style={{ paddingLeft: '40px' }} />
                                </div>

                                <div className="inputContainer py-2" style={{ fontSize: '18px' }}>
                                    <i className="fas fa-envelope fs-5 fw-normal my-colour-1"> </i>
                                    <input className="my-border-none w-100 pb-1 my-border-bottom text-black" type="text" placeholder="Email" name="mail" style={{ paddingLeft: '40px' }} />
                                </div>
                                <div className="inputContainer py-2" style={{ fontSize: '18px' }}>
                                    <i className="fas fa-envelope fs-5 fw-normal my-colour-1"> </i>
                                    <input className="my-border-none w-100 pb-1 my-border-bottom text-black" type="text" placeholder="Confirm Email" name="confirmmail" style={{ paddingLeft: '40px' }} />
                                </div>
                                <div className="inputContainer py-2" style={{ fontSize: '18px' }}>
                                    <i className="fas fa-phone fs-5 fw-normal my-colour-1"> </i>
                                    <input className="my-border-none w-100 pb-1 my-border-bottom text-black" type="text" placeholder="Phone" name="phone" style={{ paddingLeft: '40px' }} />
                                </div>
                                <div className="inputContainer py-2" style={{ fontSize: '18px' }}>
                                    <i className="fas fa-calendar fs-5 fw-normal my-colour-1"> </i>
                                    <input className="my-border-none w-100 pb-1 my-border-bottom text-black" type="calander" placeholder="Date" name="date" style={{ paddingLeft: '40px' }} />
                                </div>
                               
                                <div className="inputContainer py-2" style={{ fontSize: '18px' }}>
                                    <textarea className="py-3 w-100" type="calander" placeholder="Message" name="message" style={{ paddingLeft: '40px' }} />
                                </div> */}
                                <div>
                                    <button className="btn w-100 text-white my-bgcolour" 
                                    // to={{pathname:"/bookingdetails",
                                    // data:this.state.Days,
                                    // Image:this.state.Image,
                                    // Name:this.state.name,
                                    // startDate:this.state.PackageStartDate,
                                    // EndDate:this.state.PackageEndDate,
                                    // TotalPrice:this.state.TotalPrice,
                                    // PaxCountA:this.state.adultCount,
                                    // PaxCountC:this.state.childCount
                                    // }}
                                    onClick={()=>this.handleBooking()}
                                    >Book Now</button>
                                </div>
                            </div>

                            {/* <div className="card CBG">
                            <div className="card-body">
                                <h5 className="card-title">Special title treatment</h5>
                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                               
                            </div>
                            </div> */}
                        </div>
                        <div className="col-md-1 my-bgcolour2"></div>

                        {/* <div className="row g-0">
                            <div className="col-md-1 my-bgcolour2"></div>
                            <div className="col-md-10 my-bgcolour2 py-4">
                                <div className="accordion  my-bgcolour2" id="accordionExample">
                                    <h5 className="fw-bold my-colour-1">Our Policies</h5>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingOne">
                                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                Accordion Item #1
                                            </button>
                                        </h2>
                                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingTwo">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                Accordion Item #2
                                            </button>
                                        </h2>
                                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingThree">
                                            <span className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                Accordion Item #3
                                            </span>
                                        </h2>
                                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-1 my-bgcolour2"></div>
                        </div> */}
                    </div>
                    <Footer />
                </div>
            </div>
        )
    }
}

export default ToursDetails
