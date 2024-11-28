"use client";

import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-teal-600 text-cyan-50 border-t py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <p className="text-sm text-center md:text-left mb-4 md:mb-0">
                        &copy; 2024 Mustafa BAGCI. All Rights Reserved.
                    </p>

                    <div className="flex space-x-4 mb-4 md:mb-0">
                        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="text-cyan-100 hover:text-white transition-colors">
                            <FaFacebookF size={20} />
                        </a>
                        <a href="https://youtube.com/" target="_blank" rel="noopener noreferrer" className="text-cyan-100 hover:text-white transition-colors">
                            <FaYoutube size={20} />
                        </a>
                        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="text-cyan-100 hover:text-white transition-colors">
                            <FaInstagram size={20} />
                        </a>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-center md:justify-between mt-6">
                    <div className="flex flex-wrap justify-center md:justify-start space-x-4 md:space-x-6">
                        <Link href="/" className="text-cyan-100 hover:text-white transition-colors">Home</Link>
                        <Link href="/articles" className="text-cyan-100 hover:text-white transition-colors">Articles</Link>
                        <Link href="/categories" className="text-cyan-100 hover:text-white transition-colors">Categories</Link>
                        <Link href="/about" className="text-cyan-100 hover:text-white transition-colors">About Us</Link>
                        <Link href="/contact" className="text-cyan-100 hover:text-white transition-colors">Contact Us</Link>
                        <Link href="/faq" className="text-cyan-100 hover:text-white transition-colors">FAQ</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;