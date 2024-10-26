import React, { useEffect, useState } from 'react';
import "../style/Navbar.css";
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {

    const [navSticky, setNavSticky] = useState(false);
    const path = useLocation().pathname;

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
            <div className='nav-items'>
                <ul>
                    <li><Link to='/'>Books</Link></li>
                    <li><Link to='/addbook' className={path.includes('/addbook') ? 'cyan' : ''}>Add Book</Link> </li>
                </ul>
            </div>
            <div>
                <p>Login</p>
                <button>Login</button>
            </div>
        </section>
    )
}

export default Navbar;