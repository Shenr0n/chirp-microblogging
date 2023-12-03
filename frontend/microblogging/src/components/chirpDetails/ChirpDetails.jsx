import React, { useEffect } from 'react'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { useNavigate, useParams } from 'react-router-dom';
import ChirpCard from '../homeSection/ChirpCard';
import { Divider } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { findChirpsById } from '../../store/Chirp/Action';

const ChirpDetails = () => {
    const navigate = useNavigate();
    const handleBack = () => navigate(-1);
    const dispatch = useDispatch();
    const { id } = useParams()
    const { chirp } = useSelector(store => store)

    useEffect(() => {
        if (id) {
            dispatch(findChirpsById(id))
        }
    }, [id, dispatch])

    if (!chirp.chirp) {
        //Loading state
        return <div>Loading...</div>
    }

    return (
        <React.Fragment>
            <section className={'bg-white z-50 flex items-center sticky top-0 bg-opacity-95'}>

                <KeyboardBackspaceIcon className='cursor-pointer' onClick={handleBack} />
                <h1 className='py-5 text-xl font-bold opacity-90 ml-5'>Chirp</h1>
            </section>

            <section>
                <ChirpCard item={chirp.chirp} />
                <Divider sx={{ margin: "2rem 0rem", }} />
            </section>

            {/*} <section>
                {chirp.chirp.replyChirps.map((item)=><ChirpCard item={item}/>)}
    </section>*/}

            <section>
                {chirp.chirp?.replyChirps && chirp.chirp.replyChirps.map((item) => <ChirpCard item={item} />)}
            </section>
        </React.Fragment>
    );
};

export default ChirpDetails