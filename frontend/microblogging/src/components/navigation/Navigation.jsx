import React from 'react'
import Diversity1Icon from '@mui/icons-material/Diversity1';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

import { navigationMenu } from './NavigationMenu';
import { useNavigate } from 'react-router-dom';
import { Avatar, Button, Menu, MenuItem } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../store/auth/Action';

const Navigation = () => {
    const {auth}=useSelector(store=>store)

    const [anchorEl, setAnchorEl] = React.useState(null);
    const dispatch=useDispatch()

    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    const navigate=useNavigate();
    const handleLogout = ()=>{
        console.log("logout")
        handleClose()
        dispatch(logout())
    }
  return (
    <div className='h-screen sticky top-0'>
        <div>
            <div className='py-5'>
            <Diversity1Icon fontSize='large'/>
            </div>

            <div className='space-y-6'>

                {navigationMenu.map((item)=> <div className='cursor-pointer flex space-x-3 
                item-center' onClick={()=>item.title==="Profile"?navigate(`/profile/${auth.user?.id}`)
                :navigate(item.path)}>
                    {item.icon}
                    <p className='text-xl'>{item.title}</p>
                </div>)}
            </div>

            {/*<div className='py-10'>
                <Button sx={{width:"100%",borderRadius:"30px",py:"15px",bgcolor:'#1e88e5'}}
                variant='contained'> 
                Chirp 
                </Button>
            </div>*/}

        </div>

        <div className='flex pt-10 items-center justify-between'>
            <div className='flex items-center space-x-3'>
                <Avatar
                    className='cursor-pointer'
                    onClick={() => navigate(`/profile/${auth.user.id}`)} 
                    alt="username"
                    src= {auth.user?.image} />

                <div className='cursor-pointer'
                onClick={() => navigate(`/profile/${auth.user.id}`)} >
                    <p>{auth.user?.fullName}</p>
                    <span className='opacity-70'>{auth.user?.fullName.split(" ").join("_").toLowerCase()}</span>
                </div>
                
                <Button
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                >
                    <MoreHorizIcon/>
                </Button>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                    'aria-labelledby': 'basic-button',
                    }}
                >
                    <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </Menu>

            </div>

        </div>
        
    </div>
  )
}

export default Navigation