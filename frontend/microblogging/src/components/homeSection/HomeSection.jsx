import { Avatar, Button } from '@mui/material'
import { useFormik } from 'formik'
import React, { useEffect, useState } from 'react'
import * as Yup from 'yup'
import ImageIcon from '@mui/icons-material/Image';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import TagFacesIcon from '@mui/icons-material/TagFaces';
import ChirpCard from './ChirpCard';
import { useDispatch, useSelector } from 'react-redux';
import { createChirp, getAllChirps } from '../../store/Chirp/Action';
import { uploadToCloudinary } from '../../Utils/uploadToCloudinary';

const validationSchema = Yup.object().shape({
    content: Yup.string().required("Text required")
})

const HomeSection = () => {
    const { auth } = useSelector(store => store)

    const [uploadingImage, setUploadingImage] = useState(false);
    const [selectImage, setSelectedImage] = useState("");
    const dispatch = useDispatch();
    const { chirp } = useSelector(store => store);
    console.log("Chirp", chirp)

    const handleSubmit = (values, actions) => {
        dispatch(createChirp(values))
        actions.resetForm()
        console.log("values ", values);
        setSelectedImage("")
    };

    useEffect(() => {
        dispatch(getAllChirps())
    }, [chirp.like, chirp.rechirp])

    const formik = useFormik({
        initialValues: {
            content: "",
            image: "",
            isChirp: true
        },
        onSubmit: handleSubmit,
        validationSchema
    });

    const handleSelectImage = async (event) => {
        setUploadingImage(true);
        const imgUrl = await uploadToCloudinary(event.target.files[0])
        formik.setFieldValue("image", imgUrl);
        setSelectedImage(imgUrl);
        setUploadingImage(false);
    }

    return (
        <div className='space-y-5'>
            <section>
                <h1 className='py-5 text-xl fond-bold opacity-90'>Home</h1>
            </section>
            <section className={`pb-10`}>
                <div className='flex space-x-5'>
                    <Avatar alt="username"
                        src={auth.user?.image} />
                    <div className='w-full'>
                        <form onSubmit={formik.handleSubmit}>
                            <div>
                                {/*<input type="text" name='content' placeholder='What is on your mind?'
                                    className={`border-none outline-none text-xl bg-transparent w-full p-2`}
                                    {...formik.getFieldProps("content")} />

                                {formik.errors.content && formik.touched.content && (
                                    <span className='text-red-500'>{formik.errors.content}</span>
                                )}*/}

                                <input
                                    type="text"
                                    name="content"
                                    placeholder="What is on your mind?"
                                    className=
                                    {`border-none outline-none text-xl bg-transparent 
                                    whitespace-normal break-normal w-full p-2 
                                    ${formik.errors.content && formik.touched.content ? 'border-red-500' : ''
                                        }`}
                                    {...formik.getFieldProps("content")}
                                />

                                {formik.errors.content && formik.touched.content && (
                                    <span className='text-red-500 block mt-1'>{formik.errors.content}</span>
                                )}
                            </div>

                            {/* <div>
                            <img src="" alt=""/>
                            </div> */}

                            <div className='flex justify-between items-center mt-5'>
                                <div className='flex space-x-5 items-center'>
                                    <label className='flex items-center space-x-2 rounded-md cursor-pointer'>
                                        <ImageIcon className='text-[#1d9bf0]' />
                                        <input type="file" name='imageFile' className='hidden' onChange={handleSelectImage} />
                                    </label>

                                    <FmdGoodIcon className='text-[#1d9bf0]' />
                                    <TagFacesIcon className='text-[#1d9bf0]' />

                                </div>

                                <div>
                                    <Button sx={{ width: "100%", borderRadius: "20px", paddingX: "20px", paddingY: "8px", bgcolor: '#1e88e5' }}
                                        variant="contained"
                                        type="submit">
                                        Chirp
                                    </Button>
                                </div>

                            </div>

                        </form>

                        <div className='pb-6'>
                            {selectImage && <img src={selectImage} alt="" />}
                        </div>
                    </div>
                </div>


            </section>
            <section>
                {chirp.chirps.map((item) => <ChirpCard item={item} />)}
            </section>
        </div>
    )
}

export default HomeSection