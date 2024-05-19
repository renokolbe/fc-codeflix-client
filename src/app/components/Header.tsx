'use client';
import React from "react";
import { UserProfile } from "../hooks/UserProfile";
import { Logo } from "./Logo";
import { NavLinks } from "./NavLinks";
import { useScroll } from "./useScroll";

export default function Header() {
    const isScrolled = useScroll();

    return (
        <header className={`
                            ${isScrolled && 'bg-black'}
                            fixed top-0 z-50 flex w-full items-center justify-between transition-all px-4 py-4 lg:px-10 lg:py-4
                         `}>
            <div className='flex items-center space-x-2 md:space-x-8'>
                <Logo />
                <NavLinks />
            </div>
            <UserProfile />

        </header>
    );
}