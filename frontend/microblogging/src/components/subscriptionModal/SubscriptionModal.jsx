import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { array } from 'yup';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  border: 'none',
  boxShadow: 24,
  p: 4,
  borderRadius: 4
};
const features = ["Prioritized rankings in conversations and search",
"Upload longer chirps and videos in 1080p.",
"Special personalized analytics for your account",
"Edit your Chirps, Bookmark Folders and a lot more features",
"Formatting options for your text in Chirps"]

export default function SubscriptionModal({handleClose,open}) {
//  const [open, setOpen] = React.useState(false);
//  const handleClose = () => setOpen(false);

  const [plan, setPlan] = React.useState("Annually")

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className='flex items-center space-x-3'>
            <IconButton onClick={handleClose} aria-label="delete">
              <CloseIcon />
            </IconButton>
          </div>
          <div className='flex justify-center py-10'>
            <div className='w-[80%] space-y-10'>
              <div className='p-5 rounded-md flex items-center justify-between bg-slate-100 shadow-lg'>
                <h1 className='text-xl pr-5'>Subscribers with a verifed phone number will get a Blue Checkmark once approved.</h1>
                <img className='w-24 h-24'
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Twitter_Verified_Badge.svg/512px-Twitter_Verified_Badge.png"
                  alt="" />
              </div>
              <div className='flex justify-between border rounded-full px-5 py-3 border border-gray'>
                <div>
                  <span onClick={() => setPlan("Annually")} className={`${plan === "annually" ? "text-black" : "text-gray-400"}
                cursor-pointer`}>Annually</span>
                  <span className='text-green-600 text-sm ml-5'>SAVE 25%</span>
                </div>
                <p onClick={() => setPlan("Monthly")} className={`${plan === "monthly" ? "text-black" : "text-gray-400"}
                cursor-pointer`}>
                  Monthly
                </p>
              </div>

              <div className='space-y-3'>
                { features.map((item)=><div className='flex items-center space-x-5'>
                  <FiberManualRecordIcon sx={{ width: "7px", height: "7px" }} />
                  <p className='text-xs'>{item}</p>
                </div>)}
              </div>
              <div className='cursor-pointer flex justify-center bg-gray-700 
              text-white rounded-full px-5 py-3'>
                <span className='line-through italic'>$119.99/year</span>
                <span className='px-5'>$89.99/year</span>
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}