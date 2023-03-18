import axios  from "axios";
import { AuthPort, Auth_porto, Domain } from '../constants/Consts.jsx'

export let getTopPackages = async ()=>{
    return await axios.get(`${Auth_porto}${Domain}${AuthPort}/api/FreeSalePackage/GetFreeSalePackageTop`)
}

export let GetFreeSalePackageById = async (id)=>{
    return await fetch(`${Auth_porto}${Domain}${AuthPort}/api/FreeSalePackage/GetFreeSalePackageModelbyid?id=${id}`, {
        mode: 'cors',
        headers: {
            'Content-Type':'application/json',
            'Access-Control-Allow-Origin':'*',
            'Access-Control-Allow-Methods':'GET,POST,PATCH,OPTIONS',
            'crossorigin':'true'
        }
      })
}
// export let GetFreeSalePackageById = async (id)=>{
//     return await axios.get(`${Auth_porto}${Domain}${AuthPort}/api/FreeSalePackage/GetFreeSalePackageModelbyid?id=${id}`)
// }

export let getFinalHotelApi = async (id) =>{
    return await axios.get(`${Auth_porto}${Domain}${AuthPort}/api/Hotel/GetAllHotelModelS?ids=${id}`)
}
export let getHotelsChangeApi = async (id) =>{
    return await axios.get(`${Auth_porto}${Domain}${AuthPort}/api/Hotel/GetAllHotelModelSByCityId?id=${id}`)
}
export let getSightSeeingById = async (id) =>{
    return await axios.get(`${Auth_porto}${Domain}${AuthPort}/api/SightSeeing/GetSightSeeingModelById?id=${id}`)
}

export let GetHotelContractRatesByHotelId = async (id) =>{
    return await axios.get(`${Auth_porto}${Domain}${AuthPort}/api/HotelContractRates/GetHotelContractRatesByHotelId?id=${id}`) 
}

export let getMasterDriverById = async (id)=>{
    return await axios.get(`${Auth_porto}${Domain}${AuthPort}/api/MasterDriver/GetMasterDriverModelById?id=${id}`)
}

export let getTransferAddVehicleById = async (id)=>{
    return await axios.get(`${Auth_porto}${Domain}${AuthPort}/api/TransferAddVehicle/GetAddVehicleModelById?id=${id}`)
}

export let getTransferAddVehicle = async (id)=>{
    return await axios.get(`${Auth_porto}${Domain}${AuthPort}/api/TransferAddVehicle/GetAddVehicleModel`)
}

export let GetSightSeeingModelByCountryId = async (id)=>{
    return await axios.get(`${Auth_porto}${Domain}${AuthPort}/api/SightSeeing/GetSightSeeingModelByCountryId?id=${id}`)
}

export let GetMasterDriverModelByCountryId = async (id)=>{
    return await axios.get(`${Auth_porto}${Domain}${AuthPort}/api/MasterDriver/GetMasterDriverModelByCountryId?id=${id}`)
}

export let GetAddTransfersModelByTransferIdS = async (id)=>{
    return await axios.get(`${Auth_porto}${Domain}${AuthPort}/api/AddTransfer/GetAddTransfersModelByTransferIdS?ids=${id}`)
}

export let GetTransferTravellsBYRouteId = async (id)=>{
    return await axios.get(`${Auth_porto}${Domain}${AuthPort}/api/AddTransfer/GetTransferTravellsBYRouteId?id=${id}`)
}

export let GetAddTransfersModelByPickupAndDropoff = async (id,CityName,DropOffROute)=>{
    return await axios.get(`${Auth_porto}${Domain}${AuthPort}/api/AddTransfer/GetAddTransfersModelByPickupAndDropoff?hotelid=${id}&CityName=${CityName}&DropUpRoute=${DropOffROute}`)
}

export let GetAddTransfersModelByPickup = async (id,CityName,PickUpROute)=>{
    return await axios.get(`${Auth_porto}${Domain}${AuthPort}/api/AddTransfer/GetAddTransfersModelByPickup?hotelid=${id}&CityName=${CityName}&PickUpRoute=${PickUpROute}`)
}

// export let GetAddTransfersModelByIdDetails = async (id,CityName,PickUpROute)=>{
//     return await axios.get(`${Auth_porto}${Domain}${AuthPort}/api/AddTransfer/GetAddTransfersModelById?Id=${id}&CityName=${CityName}&PickUpRoute=${PickUpROute}`)
// }
export let GetAddTransfersModelById = async (id)=>{
    return await axios.get(`${Auth_porto}${Domain}${AuthPort}/api/AddTransfer/GetAddTransfersModelById?Id=${id}`)
}

export let GetHotelModelbyid = async (id)=>{
    return await axios.get(`${Auth_porto}${Domain}${AuthPort}/api/Hotel/GetHotelModelbyid?id=${id}`)
}

export let GetSightSeeingDetailsModelbyid = async (id)=>{
    return await axios.get(`${Auth_porto}${Domain}${AuthPort}/api/SightSeeing/GetSightSeeingModelById?Id=${id}`)
}
export let GetPkgBookingModelById = async (id)=>{
    return await axios.get(`${Auth_porto}${Domain}${AuthPort}/api/PkgBooking/getPkgBookingModelById?Id=${id}`)
}
export let GetPkgBookingPaymentId = async (id)=>{
    return await axios.post(`${Auth_porto}${Domain}${AuthPort}/api/PkgBooking/UpdatePkgBookingModel?paymentId=${id}`,{
        headers: {
            // 'Accept': 'application/json',
          "Content-Type": "string",
          "enctype":"multipart/form-data; "
          
        }
    })
}

export let AddPkgBookingModel = async (formData)=>{
    return await axios.post(`${Auth_porto}${Domain}${AuthPort}/api/PkgBooking/AddPkgBookingModel`,formData)
}


