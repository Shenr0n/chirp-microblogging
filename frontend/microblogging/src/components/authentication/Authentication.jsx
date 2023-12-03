import { Button, Grid } from '@mui/material'
import { GoogleLogin } from '@react-oauth/google';
import AuthModal from "./AuthModel"
import React, { useEffect, useState } from "react";

const Authentication = () => {
  const [openAuthModel, setOpenAuthModel] = useState(false)
  const handleOpenAuthModel=()=>setOpenAuthModel(true);
  const handleCloseAuthModel=()=>setOpenAuthModel(false);
  return (
    <div>
      <Grid className='overflow-y-hidden' container>
        <Grid className='hidden lg:block' item lg={7}>
          <img className = 'w-full h-screen object-cover' 
          src='https://images.pexels.com/photos/6146931/pexels-photo-6146931.jpeg' 
          alt=''/>
          {/*<div className='absolute top-[26%] left-[19%]'>

  </div>*/}

        </Grid>

        <Grid className='px-10 justify-center' lg={5} xs={12}>
          <h1 className='mt-10 font-bold text-7xl'>Microblogging, Max Impact</h1>
          <h1 className='font-bold text-3xl py-16'>Join Us Today</h1>

          <div className='w-[60%]'>
            <div className='w-full'>
              <GoogleLogin width={350}/>
              <p className='py-5 text-center'>OR</p>

              <Button onClick={handleOpenAuthModel} fullWidth variant='contained' size='large' sx ={{
                borderRadius:"30px",
                py:"10px"
              }}>Create Account</Button>
              <p className='text-sm mt-2'>By Signing Up, you agree to the Terms of 
                Service and Privacy Policy, including use of Cookies.</p>

            </div>
            <div className='mt-10'>
            <h1 className='font-bold text-center text-xl mb-5'>Already have an Account?</h1>

            <Button onClick={handleOpenAuthModel} fullWidth variant='outlined' size='large' sx ={{
                borderRadius:"29px",
                py:"7px"
              }}>Login</Button>
            </div>
          </div>
        </Grid>
      </Grid>

      <AuthModal open ={openAuthModel} handleClose={handleCloseAuthModel}/>
    </div>
  );
};

export default Authentication;