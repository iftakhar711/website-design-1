import React from 'react';
import { CiTwitter, CiLinkedin, CiFacebook, CiInstagram } from 'react-icons/ci'
import img from '../../../img/pexels-fauxels-3184465.jpg'

const Aboutus = () => {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="grid gap-10 lg:grid-cols-2">
                <div className="lg:pr-10">

                    <h5 className="mb-4 text-4xl font-extrabold leading-none">
                        About Us
                    </h5>
                    <p className="mb-6 text-gray-900">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                        quae explicabo. Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem totam rem aperiam, eaque ipsa quae explicabo.
                    </p>
                    <hr className="mb-5 border-gray-300" />
                    <div className="flex items-center space-x-4">
                        <CiTwitter></CiTwitter>
                        <CiLinkedin></CiLinkedin>
                        <CiFacebook></CiFacebook>
                        <CiInstagram></CiInstagram>
                    </div>
                </div>
                <div>
                    <img
                        className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
                        src={img}
                        alt=""
                    />
                </div>
            </div>
        </div>
    );
};

export default Aboutus;