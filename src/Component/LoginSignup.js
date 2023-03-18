import { Box, Modal, TextField, Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'white',
    // border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    zindex: 2000,
};

const LoginSignup = ({openM,Modals,OnClose}) => {
    const [modalstatus,setModalstatus] = useState(1);
    const [open, setOpen] = useState( false);
    // const handleOpen = (value) => {
    //     setOpen(true)
    //     setModalstatus(value)
    //     // setSOpen(false)
    // }
    const handleClose = (value) => {
        setOpen(!open)
        OnClose && OnClose(!open)
        // setSOpen(false)
    }
    useEffect(() => {
        console.log(openM,Modals)
        setOpen(openM)
        setModalstatus(Modals)
    }, [openM,Modals])
    

  return (
    <>
    <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    {modalstatus === 1?<>
                    <Typography id="modal-modal-title" variant="h6" component="h1" className="text-center">
                        Login
                    </Typography>
                    <Typography id="modal-modal-description" className="justify-content-center" sx={{ mt: 2 }}>
                        <form className="form-row">
                            <div className="m-2">
                                <TextField className="col-md-12" type="text" label="UserName" name="username" required/>
                            </div>
                            <div className="m-2">
                            <TextField className="col-md-12" type="password" label="Password" name="password" required/>
                            </div>
                            
                            <div  className="col-md-12 my-4">
                            <button type="submit" className="btn w-100 my-bgcolour text-white">Submit</button>
                            </div>
                            <div  className="col-md-12 text-center m-1">Do you have an account?</div>
                            <div className="col-md-12 text-center m-1"><Link as="button" className="my-colour-1"  onClick={()=>setModalstatus(0)}> Create an account?</Link></div>
                        </form>
                    </Typography>
                    </>
                    :
                    <>
                     <Typography id="modal-modal-title" variant="h6" component="h1" className="text-center">
                        SignUp
                    </Typography>
                    <Typography id="modal-modal-description" className="justify-content-center" sx={{ mt: 2 }}>
                        <form className="form-row">
                            <div className="col-md-12 m-2 ">
                                <TextField className="w-100" type="text" label="UserName" name="username" required/>
                            </div>
                            <div className="col-md-12 m-2">
                            <TextField className="w-100" type="password" label="Password" name="password" required/>
                            </div>
                            <div className="col-md-12 m-2">
                            <TextField className="w-100" type="password" label="Confirm Password" name="confirmpassword" required/>
                            </div>

                            <div className="col-md-12 m-2">
                            <TextField className="w-100" type="text" label="First Name" name="fname" required/>
                            </div>
                            <div className="col-md-12 m-2">
                            <TextField className="w-100" type="text" label="Last Name" name="lname" required/>
                            </div>
                            <div className="col-md-12 m-2">
                            <TextField className="w-100" type="email" label="email" name="Email" required/>
                            </div>
                            <div className="col-md-12 m-2">
                            <TextField className="w-100" type="number" label="Phone" name="phone" required/>
                            </div>
                            <div className="col-md-12 m-2">
                            <TextField className="w-100" type="text" label="Country" name="country" required/>
                            </div>
                            
                            <div  className="col-md-12 my-4">
                            <button type="submit" className="btn w-100 my-bgcolour text-white">Submit</button>
                            </div>
                            <div  className="col-md-12 text-center m-1">Already have an account?</div>
                            <div className="col-md-12 text-center m-1"><Link as="button" className="my-colour-1" onClick={()=>setModalstatus(1)}> Login?</Link></div>
                        </form>
                    </Typography>
                    </>
                        }
                </Box>
            </Modal>
    </>
  )
}

export default LoginSignup