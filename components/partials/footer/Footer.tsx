import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import Link from 'next/link';

const footer = () => {

    return (
        <footer className="pt-8 footer">
            <div className="container items-center justify-center mx-auto max-w-7xl">
                <div className="footer-top">
                    <span className="text-white block text-[28px] font-semibold mb-4">Portfolio</span>
                    <div className="container items-center justify-center max-w-5xl mx-auto">
                        <div className="grid grid-cols-4">
                            <div className="mx-auto">
                                <Link href="#" className="hover:font-semibold hover:text-opacity-100 font-['Roboto'] text-white text-opacity-60 text-lg block mb-2">Company</Link>
                                <Link href="#" className="hover:font-semibold hover:text-opacity-100 font-['Roboto'] text-white text-opacity-60 text-lg block mb-2">About Us</Link>
                                <Link href="#" className="hover:font-semibold hover:text-opacity-100 font-['Roboto'] text-white text-opacity-60 text-lg block mb-2">Why Choose me</Link>
                                <Link href="#" className="hover:font-semibold hover:text-opacity-100 font-['Roboto'] text-white text-opacity-60 text-lg block mb-2">Pricing</Link>
                                <Link href="#" className="hover:font-semibold hover:text-opacity-100 font-['Roboto'] text-white text-opacity-60 text-lg block mb-2">Testimonial</Link>
                            </div>
                            <div className="mx-auto">
                                <Link href="#" className="hover:font-semibold hover:text-opacity-100 font-['Roboto'] text-white text-opacity-60 text-lg block mb-2">Resources</Link>
                                <Link href="#" className="hover:font-semibold hover:text-opacity-100 font-['Roboto'] text-white text-opacity-60 text-lg block mb-2">Privacy Policy</Link>
                                <Link href="#" className="hover:font-semibold hover:text-opacity-100 font-['Roboto'] text-white text-opacity-60 text-lg block mb-2">Terms and Condition</Link>
                                <Link href="#" className="hover:font-semibold hover:text-opacity-100 font-['Roboto'] text-white text-opacity-60 text-lg block mb-2">Blog</Link>
                                <Link href="#" className="hover:font-semibold hover:text-opacity-100 font-['Roboto'] text-white text-opacity-60 text-lg block mb-2">Contact Us</Link>
                            </div>
                            <div className="col-span-2 mx-auto">
                                <span className="font-semibold font-['Roboto'] text-lg block mb-2">Subscribe to our Newsletter</span>
                                <div className="">
                                    <input type="email" placeholder="Enter your Email" className="px-8 py-4 rounded-md bg-[#2B2E3C]" />
                                    <button className="p-3 -ml-20 rounded-md bg-primary">Subscribe</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pt-6 pb-6 footer-bottom">
                    <div className="container flex items-center justify-center max-w-5xl mx-auto d-flex">
                        <div className="flex border-2 footer-left w-72 border-cs_footer_border_color">
                        </div>
                        <div className="flex ml-auto mr-auto text-2xl footer-right">
                            <p className="text-primary font-['Inter'] text-xl mr-8">Copylight@2023</p>
                            <div className="flex items-center justify-center">
                                <FaFacebook size="25" className="mr-6 text-primary hover:text-white" />
                                <FaTwitter size="25" className="mr-6 text-primary hover:text-white" />
                                <FaInstagram size="25" className="mr-6 text-primary hover:text-white" />
                                <FaLinkedin size="25" className="text-primary hover:text-white" />
                            </div>
                        </div>
                        <div className="flex border-2 footer-left w-72 border-cs_footer_border_color">
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default footer;
