
export let packagedata
export let packagedateS
export let packagedateE

class States {

    setPackageData(data){      
        packagedata = data
    }

    setpackageDateS(date){
        packagedateS = date
        console.log(packagedateS)
    }

    setpackageDateE(date){
        packagedateE = date
    }

}

export default new States()