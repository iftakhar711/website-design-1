import React from 'react';
import { CiTwitter, CiLinkedin, CiFacebook } from 'react-icons/ci'

const Footer = () => {
    return (
        <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
            <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
                <div className="sm:col-span-2">
                    <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                        About Company
                    </span>
                    <div className="mt-6 lg:max-w-sm">
                        <p className="text-sm text-gray-800">
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                            accusantium doloremque laudantium, totam rem aperiam.
                        </p>
                        <p className="mt-4 text-sm text-gray-800">
                            Eaque ipsa quae ab illo inventore veritatis et quasi architecto
                            beatae vitae dicta sunt explicabo.
                        </p>
                    </div>
                </div>
                <div className="space-y-2 text-sm">
                    <p className="text-base font-bold tracking-wide text-gray-900">
                        Contacts
                    </p>
                    <div className="flex">
                        <p className="mr-1 text-gray-800">Phone:</p>
                        <a
                            href="tel:01880389549"
                            aria-label="Our phone"
                            title="Our phone"
                            className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
                        >
                            01880389549
                        </a>
                    </div>
                    <div className="flex">
                        <p className="mr-1 text-gray-800">Email:</p>
                        <a
                            href="mailto:iftakharuddin80@gmail.com"
                            aria-label="Our email"
                            title="Our email"
                            className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
                        >
                            iftakharuddin80@gmail.com
                        </a>
                    </div>
                    <div className="flex">
                        <p className="mr-1 text-gray-800">Address:</p>
                        <a
                            href="https://www.google.com/maps"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Our address"
                            title="Our address"
                            className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
                        >
                            Feni,chattragram,Bangladesh
                        </a>
                    </div>
                </div>

                <div>
                    <span className="text-base font-bold tracking-wide text-gray-900">
                        Social
                    </span>
                    <div className="flex items-center mt-1 space-x-3">
                        <a
                            href="/"
                            className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
                        >
                            <CiTwitter></CiTwitter>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/muhammad-iftakhar-uddin-bhuyan/"
                            className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
                        >
                            <CiLinkedin></CiLinkedin>
                        </a>
                        <a
                            href="https://www.facebook.com/muhammadiftakhar.uddinbhuiyan.9/"
                            className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
                        >
                            <CiFacebook></CiFacebook>
                        </a>
                    </div>
                    <p className="mt-4 text-sm text-gray-500">
                        Bacon ipsum dolor amet short ribs pig sausage prosciutto chicken
                        spare ribs salami.
                    </p>
                </div>
            </div>
            <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
                <p className="text-sm text-gray-600">
                    © Copyright 2023 Lorem Inc. All rights reserved.
                </p>
                <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
                    <li>
                        <a
                            href="/"
                            className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                        >
                            F.A.Q
                        </a>
                    </li>
                    <li>
                        <a
                            href="/"
                            className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                        >
                            Privacy Policy
                        </a>
                    </li>
                    <li>
                        <a
                            href="/"
                            className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                        >
                            Terms &amp; Conditions
                        </a>
                    </li>
                </ul>
            </div>

        </div>
    );
};

export default Footer;