import React from 'react';
import { IoPulseOutline } from 'react-icons/io5'
import { TbBrandIntercom } from 'react-icons/tb'
import { FcWiFiLogo } from 'react-icons/fc'

const Product = () => {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">

                    Our Product
                </h2>

            </div>
            <div className="grid gap-8 row-gap-8 lg:grid-cols-3">
                <div className="sm:text-center">
                    <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 sm:mx-auto sm:w-24 sm:h-24">
                        <IoPulseOutline className=' w-10 h-10'></IoPulseOutline>
                    </div>
                    <h6 className="mb-2 font-semibold leading-5">SEO</h6>
                    <p className="max-w-md mb-3 text-sm text-gray-900 sm:mx-auto">
                        Cheese on toast airedale the big cheese. Danish fontina cheesy grin
                        airedale danish
                    </p>
                    <a
                        href="/"
                        aria-label=""
                        className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                    >
                        Learn more
                    </a>
                </div>
                <div className="sm:text-center">
                    <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 sm:mx-auto sm:w-24 sm:h-24">
                        <TbBrandIntercom className=' w-10 h-10'></TbBrandIntercom>
                    </div>
                    <h6 className="mb-2 font-semibold leading-5">Branding</h6>
                    <p className="max-w-md mb-3 text-sm text-gray-900 sm:mx-auto">
                        Satoshi Nakamoto launched lots of decentralisation when Litecoin
                        required
                    </p>
                    <a
                        href="/"
                        aria-label=""
                        className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                    >
                        Learn more
                    </a>
                </div>
                <div className="sm:text-center">

                    <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 sm:mx-auto sm:w-24 sm:h-24">
                        <FcWiFiLogo className=' w-10 h-10'></FcWiFiLogo>
                    </div>
                    <h6 className="mb-2 font-semibold leading-5">LOGO</h6>
                    <p className="max-w-md mb-3 text-sm text-gray-900 sm:mx-auto">
                        Bavaria ipsum dolor sit amet Radler Schneid vui huift vui ognudelt i
                        mechad
                    </p>
                    <a
                        href="/"
                        aria-label=""
                        className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                    >
                        Learn more
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Product;