import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#3659D8] text-white">
        <section className="max-w-7xl m-auto py-32">
            <div class="flex flex-row items-center ">
                <div class="flex flex-row items-start gap-20">
                    <div class="flex flex-col gap-4">
                        <h2 class="text-6xl font-bold text-white-700">Right Trails</h2>
                        <ul>
                            <li>
                                <p>Your bridge to boundless education.</p>
                            </li>

                            <div className='flex flex-row items-center gap-4 py-4'>
                           
                                <li>
                                    <a href="facebook.com">
                                    <FaFacebook /> 
                                    </a>
                                </li>
                                <li>
                                    <a href="twitter.com">
                                    <FaTwitter /> 
                                    </a>
                                </li>
                                <li>
                                    <a href="instagram.com">
                                    <FaInstagram /> 
                                    </a>
                                </li>
                                
                            

                            </div>
                            
                        </ul>
                    </div>

                    <div class="flex flex-col items-start gap-8">
                        <h2 class="font-bold text-3xl">About</h2>
                        <ul>
                            <li>
                                <a href="#" title="Company">Company</a>
                            </li>
                            <li>
                                <a href="#" title="Careers">Careers</a>
                            </li>
                            <li>
                                <a href="#" title="Contact Us">Contact Us</a>
                            </li>
                            <li>
                                <a href="#" title="Terms & Conditions">Terms & Conditions</a>
                            </li>
                            <li>
                                <a href="#" title="Disclaimer">Disclaimer</a>
                            </li>
                            <li>
                                <a href="#" title="Privacy Policy">Privacy Policy</a>
                            </li>
                        </ul>
                    </div>

                    <div class="flex flex-col items-start gap-8">
                        <h2 class="font-bold text-3xl">Services</h2>
                        <ul>
                            <li>
                                <a href="#" title="Students">Students</a>
                            </li>
                            <li>
                                <a href="#" title="Counselors">Counselors</a>
                            </li>
                            <li>
                                <a href="#" title="Institutions">Institutions</a>
                            </li>
                        </ul>
                    </div>

                    <div class="flex flex-col items-start gap-8">
                        <h2 class="font-bold text-3xl">Resources</h2>
                        <ul>
                            <li>
                                <a href="#" title="Blog">Blog</a>
                            </li>
                            <li>
                                <a href="#" title="Help">Help</a>
                            </li>
                            <li>
                                <a href="#" title="FAQs">FAQs</a>
                            </li>
                            
                        </ul>
                    </div>

                    <div class="flex flex-col items-start gap-8">
                        <h2 class="font-bold text-3xl">Get In Touch</h2>
                        <ul>
                            <li>
                                <a href="#" title="contact">+123456</a>
                            </li>
                            <li>
                                <a href="#" title="gmail">123@gmail.com</a>
                            </li>
                            <li>
                                <a href="#" title="Location">Location</a>
                            </li>
                        </ul>
                    </div>
                
                </div>
            </div>
        {/* .container */}
        </section>
</footer>
  );
}

export default Footer;
