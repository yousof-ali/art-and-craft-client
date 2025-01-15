import React from 'react';
import Lottie from 'lottie-react';
import erroranimation from './errorAnimation'
import { Link } from 'react-router-dom';
import PrimaryButton from '../../Component/PrimaryButton'

const Errorpage = () => {
    return (
        <div className=' max-w-screen-lg mx-auto'>
            <Lottie animationData={erroranimation}></Lottie>
            <div className=' ml-8'>
            <Link to={'/'}><PrimaryButton text={"Back to Home"}></PrimaryButton></Link>
            </div>
        </div>
    );
};

export default Errorpage;