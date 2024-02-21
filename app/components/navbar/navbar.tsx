"use client";
import { useState, useEffect } from 'react';
import styles from "./navbar.module.css";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavBar() {
    const [NavVisible, setNavVisible] = useState(false);
    useEffect(() => {
        const handleResize = () => setNavVisible(window.innerWidth > 768);
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const pathname = usePathname();
    const isActive = (path: string) => pathname === path ? styles.activePath : '';

    return(
        <div className={styles.NavBar}>
            <div className={styles.LogoDesk}>
                <img src="/oaze.svg" alt="logo" />
            </div>
            <ul className={styles.NavList} style={{ opacity: NavVisible ? '1' : '0', visibility: NavVisible ? 'visible' : 'hidden', transition: 'opacity 0.1s linear, visibility 0.1s linear 0.2s' }}>
                <div className={styles.LogoMob}>
                <img src="/oaze.svg" alt="logo" />
                    <div className={styles.BurgerOff} onClick={() => setNavVisible(false)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M18 6L6 18" stroke="#0E0E0E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M6 6L18 18" stroke="#0E0E0E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    </div>
                </div>
                <Link href="/" className={isActive('/')}>
                    <li>NAUJA KOLEKCIJA</li>
                    <p>&rarr;</p>
                </Link>
                <a href="">
                    <li>PROGOMS</li>
                    <p>&rarr;</p>
                </a>
                <a href="">
                    <li>KASDIENAI</li>
                    <p>&rarr;</p>
                </a>
                <a href="">
                    <li>APIE MUS</li>
                    <p>&rarr;</p>
                </a>
                <a href="">
                    <li>KONTAKTAI</li>
                    <p>&rarr;</p>
                </a>
                <div className={styles.LoginButton}>
                    <a href="#">Login</a>
                </div>
            </ul>
            <ul className={styles.NavIcons}>
                <a href="">
                <li>
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.97 19.19C6.43 19.19 2.75 15.51 2.75 10.97C2.75 6.43 6.43 2.75 10.97 2.75C15.51 2.75 19.19 6.43 19.19 10.97C19.19 15.51 15.51 19.19 10.97 19.19Z" stroke="#0E0E0E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M21.2496 21.2499L17.1396 17.1399" stroke="#0E0E0E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </li>
                </a>
                <a href="">
                <li>
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.1111 3C19.6333 3 22 6.3525 22 9.48C22 15.8138 12.1778 21 12 21C11.8222 21 2 15.8138 2 9.48C2 6.3525 4.36667 3 7.88889 3C9.91111 3 11.2333 4.02375 12 4.92375C12.7667 4.02375 14.0889 3 16.1111 3Z" stroke="#0E0E0E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </li>
                </a>
                <a href="">
                <li>
                    <svg width="22" height="24" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.1596 5.88989H3.8296C2.7596 5.88989 1.87961 6.69989 1.77961 7.76989L0.969614 17.0199C0.859614 18.2199 1.8096 19.2599 3.0196 19.2599H14.9796C16.1896 19.2599 17.1296 18.2299 17.0296 17.0199L16.2196 7.76989C16.1196 6.69989 15.2296 5.88989 14.1596 5.88989Z" stroke="#0E0E0E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M13.1096 8.97V4.86C13.1096 2.59 11.2696 0.75 8.99963 0.75C6.72963 0.75 4.88965 2.59 4.88965 4.86V8.97" stroke="#0E0E0E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M6.42969 13.0801L8.13971 14.8001L11.5697 11.3701" stroke="#0E0E0E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </li>
                </a>
                <a href="" className={styles.LoginIcon}>
                <li>
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 21C20 19.6044 20 18.9067 19.8278 18.3389C19.44 17.0605 18.4395 16.06 17.1611 15.6722C16.5933 15.5 15.8956 15.5 14.5 15.5H9.5C8.10444 15.5 7.40665 15.5 6.83886 15.6722C5.56045 16.06 4.56004 17.0605 4.17224 18.3389C4 18.9067 4 19.6044 4 21M16.5 7.5C16.5 9.98528 14.4853 12 12 12C9.51472 12 7.5 9.98528 7.5 7.5C7.5 5.01472 9.51472 3 12 3C14.4853 3 16.5 5.01472 16.5 7.5Z" stroke="#0E0E0E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </li>
                </a>
                <div className={styles.BurgerOn} onClick={() => setNavVisible(true)}>
                    <svg width="28" height="28" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.5 5.83325H17.5" stroke="#0E0E0E" strokeWidth="1.25" stroke-linecap="round"/>
                        <path d="M2.5 10H17.5" stroke="#0E0E0E" strokeWidth="1.25" stroke-linecap="round"/>
                        <path d="M2.5 14.1667H17.5" stroke="#0E0E0E" strokeWidth="1.25" stroke-linecap="round"/>
                    </svg>
                </div>
            </ul>
        </div>
    );
}
