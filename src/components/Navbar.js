import React, { useEffect, useState } from 'react';
import "../style/Navbar.css";

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
            <div>
                <h2>Book Store</h2>
            </div>
        </section>
    )
}

export default Navbar;