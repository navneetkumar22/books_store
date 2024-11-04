import React, { useEffect, useState } from 'react';
import "../style/Navbar.css";
import searchIcon from '../assets/search.png';
import accountImage from '../assets/account.png';
import cartImage from '../assets/cartImage.png';
import wishlistImage from '../assets/wishList.png';

const Navbar = () => {
    const [navSticky, setNavSticky] = useState(false);

    useEffect(() => {
        const navScroll = () => {
            const top = window.scrollY;
            if (top > 0 && !navSticky) {
                setNavSticky(true);
            } else if (top === 0 && navSticky) {
                setNavSticky(false);
            }
        }

        window.addEventListener('scroll', navScroll);

        return () => {
            window.removeEventListener('scroll', navScroll)
        };
    }, [navSticky])


    return (
        <section className={`navbar ${navSticky ? "sticky" : ""}`}>
            <div className='top'>
                <div>
                    <h2>BookStore</h2>
                </div>
                <div className='search'>
                    <img src={searchIcon} alt='search' />
                    <input placeholder='Search' />
                </div>
                <div className='icons'>
                    <img src={accountImage} alt='account' />
                    <img src={cartImage} alt='cart' />
                    <img src={wishlistImage} alt='wishlist' />
                </div>
            </div>

            <div className='bottom'>
                <ul>
                    <li>Christmas</li>
                    <li>Books</li>
                    <li>Fiction</li>
                    <li>Non-Fiction</li>
                    <li>Teen & YA</li>
                    <li>Gift Cards</li>
                    <li>Sale</li>
                </ul>
            </div>
        </section>
    )
}

export default Navbar;