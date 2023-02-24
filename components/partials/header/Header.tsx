import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Header = () => {

    return (
        <header className="pt-8 header">
            <div className="container flex items-center justify-center mx-auto max-w-7xl">
                <div className="flex header-left">
                    <Link href="/" className="logo">
                        <img
                            src="assets/images/logo.png"
                            alt=" Logo"
                            width={35}
                            height={30}
                        />
                    </Link>
                    <span className="text-white block text-[28px] font-semibold ml-3.5">Portfolio</span>
                </div>
                <div className="flex ml-auto text-2xl header-right">
                    <Link href="#" className="hover:text-primary">
                        Home
                    </Link>
                    <Link href="#" className="hover:text-primary ml-14">
                        Projects
                    </Link>
                    <Link href="#" className="hover:text-primary ml-14">
                        Resume
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;
