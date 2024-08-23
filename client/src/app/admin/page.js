'use client';
import React, { useState } from 'react';
import Navigation from '../../../components/navigation';
import styles from './admin.module.css';
import Link from 'next/link';
import { Password } from 'primereact/password';
import { FloatLabel } from 'primereact/floatlabel';
import { FaArrowLeft } from 'react-icons/fa6';
import { FaTimes } from 'react-icons/fa'; // Import the X icon
import 'primereact/resources/themes/lara-light-cyan/theme.css';

export default function About() {
    const [value, setValue] = useState('');

    const handleClearPassword = () => {
        setValue(''); // Clear the password input
    };

    return (
        <div className={styles['main-container']}>
            <main className={styles.main}>
                <Link href="/">
                    <button className={styles.backButton}>
                        <FaArrowLeft /> &nbsp; 돌아가기
                    </button>
                </Link>

                <div className={styles.content}>
                    <img src="/logo2.png" alt="logo" className={styles.logo} />
                    <h1>관리자 페이지</h1>

                    <div className={styles.form}>
                        <FloatLabel>
                            <div className={styles.passwordWrapper}>
                                <Password
                                    value={value}
                                    onChange={(e) => setValue(e.target.value)}
                                    toggleMask
                                    feedback={false}
                                    inputId="password"
                                    className={styles.passwordInput}
                                />
                            </div>
                            <label htmlFor="password">Password</label>
                        </FloatLabel>
                    </div>
                    <div className={styles.submit}>
                        <button>Submit</button>
                    </div>
                </div>
            </main>
        </div>
    );
}