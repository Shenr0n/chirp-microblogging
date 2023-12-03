import React, { useState } from 'react'
import RepeatIcon from '@mui/icons-material/Repeat';
import VerifiedIcon from '@mui/icons-material/Verified';
import { Avatar, Button, Menu, MenuItem } from '@mui/material';
import { Navigate, useNavigate } from 'react-router-dom';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import BarChartIcon from '@mui/icons-material/BarChart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { FavoriteOutlined } from '@mui/icons-material';
import ReplyModal from './ReplyModal';
import { useDispatch, useSelector } from 'react-redux';
import { createReChirp, deleteChirp, likeChirp } from '../../store/Chirp/Action';

const ChirpCard = ({ item }) => {
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const [openReplyModal, setOpenReplyModal] = useState(false);
    const handleOpenReplyModal = () => setOpenReplyModal(true);
    const handleCloseReplyModal = () => setOpenReplyModal(false);
    const dispatch = useDispatch();


    const { auth } = useSelector(store => store)

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    /*    const handleDeleteChirp = () => {
            console.log("delete chirp");
            handleClose();
        };*/
    const handleDeleteChirp = () => {
        dispatch(deleteChirp(item?.id))
        console.log("delete chirp");
        handleClose();
    };


    const handleCreateRechirp = () => {
        dispatch(createReChirp(item?.id))
        console.log("handle create rechirp");
    };

    const handleLikechirp = () => {
        dispatch(likeChirp(item?.id))
        console.log("handle like rechirp");
    };
    return (
        <React.Fragment>
            {/*<div className='flex items-center font-semibold text-gray-700 py-2'>
            <RepeatIcon/>
            <p>You ReChirp</p>

  </div> */}

            <div className='flex space-x-5'>
                <Avatar
                    onClick={() => navigate(`/profile/${item?.user.id}`)}
                    className='cursor-pointer'
                    alt='username'
                    src={item?.user?.image}
                />

                <div className="w-full">
                    <div className='flex justify-between items-center'>
                        <div className='flex cursor-pointer items-center space-x-2'
                            onClick={() => navigate(`/profile/${item?.user.id}`)}>
                            <span className='font-semibold'>{item?.user?.fullName}</span>
                            <span className='text-gray-600'>@{item?.user?.fullName.split(" ").join("_").toLowerCase()}</span>
                            {/*<img className='m1-2 w-5 h-5' src="https://cdn-icons-png.flaticon.com/512/7641/7641727.png" alt=""/>*/}
                            <VerifiedIcon className='text-[#1d9bf0]' fontSize='small' />

                        </div>
                        <div>
                            <Button
                                id="basic-button"
                                aria-controls={open ? 'basic-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                onClick={handleClick}
                            >
                                <MoreHorizIcon />
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
                                <MenuItem
                                    onClick={handleDeleteChirp}>Delete
                                </MenuItem>
                            </Menu>
                        </div>

                    </div>

                    <div className='mt-2'>
                        <div onClick={() => navigate(`/chirp/${item?.id}`)} className='cursor-pointer'>
                            <p className='mb-2 p-0'>
                                {item?.content}
                            </p>
                            <img className='w-[28rem] border-gray-400 p-2 round-md'
                                src={item?.image} alt="" />
                        </div>

                        <div className='py-5 flex flex-wrap justify-between items-center'>
                            <div className='space-x-3 flex items-center text-gray-600'>
                                <ChatBubbleOutlineIcon className='cursor-pointer'
                                    onClick={handleOpenReplyModal} />
                                <p>{item?.totalReplies}</p>

                            </div>
                            <div className={`${item?.rechirp ? "text-pink-600" : "text-gray-600"} space-x-3 flex items-center`}>
                                <RepeatIcon
                                    onClick={handleCreateRechirp}
                                    className='cursor-pointer' />
                                <p>{item?.totalRechirps}</p>
                            </div>
                            <div className={`${item?.liked ? "text-pink-600" : "text-gray-600"} space-x-3 flex items-center`}>
                                {item?.liked ? (
                                    <FavoriteIcon
                                        onClick={handleLikechirp}
                                        className='cursor-pointer' />) : (
                                    <FavoriteOutlined
                                        onClick={handleLikechirp}
                                        className='cursor-pointer' />)}
                                <p>{item?.totalLikes}</p>
                            </div>
                            <div className='space-x-3 flex items-center text-gray-600'>
                                <BarChartIcon className='cursor-pointer' onClick={handleOpenReplyModal} />
                                <p>420</p>

                            </div>
                            <div className='space-x-3 flex items-center text-gray-600'>
                                <FileUploadIcon className='cursor-pointer' onClick={handleOpenReplyModal} />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section>
                <ReplyModal item={item} open={openReplyModal} handleClose={handleCloseReplyModal} />
            </section>
        </React.Fragment>
    )
}

export default ChirpCard