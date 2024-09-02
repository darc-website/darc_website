'use client';
import React from 'react';
import Link from 'next/link';
import { FaYoutube, FaInstagram } from 'react-icons/fa'; // Importing only YouTube and Instagram icons
import styles from './footer.module.css'; // Assuming you will have a corresponding CSS file

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContainer}>
                <div className={styles.footerLinks}>
                    <Link href="/about">About Us</Link>
                    <Link href="/services">Services</Link>
                    <Link href="/contact">Contact Us</Link>
                </div>

                <div className={styles.footerSocials}>
                    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                        <FaYoutube className={styles.icon} />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className={styles.icon} />
                    </a>
                </div>

                <button className={styles.homeButton}>Home</button>

                <div className={styles.footerInfo2}>
                    <p>등록 번호: 216-82-69731</p>
                    <p>다르크 협회 이사장: 최진묵</p>
                    <p>TEL: +82 70-4046-1445</p>
                </div>

                <div className={styles.footerInfo}>
                    <p>© 2024 Korea DARC Association. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;