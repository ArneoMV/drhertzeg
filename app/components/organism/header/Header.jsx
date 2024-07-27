"use client"
import Link from 'next/link';
import Image from 'next/image';
import './_header.scss';
import { Logos, Wawe, Icons, TeasImages, CosmeticsImages, SocialImages, BlogImages } from "../../../utilities/images.js";

import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header>
      <div className="navBar">
        <Link href="/" className="logo">
          <Image 
            src={Logos.logo}
            alt='logo'
            width={52}
            quality={100}
          />
          Dr Hertzeg
        </Link>
        <nav>
          <div className="nav-links">
            <a href="/cajevi" id="header-home">Čajevi</a>
            <a href="/kozmetika" id="header-references">Kozmetika</a>
            <a href="/blog" id="header-partners">Blog</a>
            <a href="/kontakt" id="header-about">Kontakt</a>
          </div>
        </nav>
      </div>

      <div id="burger" className={`burger ${isNavOpen ? 'toggle' : ''}`} onClick={toggleNav}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
      <div className={`nav-mobile ${isNavOpen ? 'is-active' : ''}`}>
        <div className="nav-links">
          <a href="/">Početna</a>
          <a href="/cajevi">Čajevi</a>
          <a href="/kozmetika">Kozmetika</a>
          <a href="/blog">Blog</a>
          <a href="/kontakt">Kontakt</a>
        </div>
      </div>
    </header>
  );
};

export default Header;