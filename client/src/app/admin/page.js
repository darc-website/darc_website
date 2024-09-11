'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation'; // Correct import for useRouter in App Router
import { Password } from 'primereact/password';
import { FloatLabel } from 'primereact/floatlabel';
import { FaArrowLeft } from 'react-icons/fa6';
import 'primereact/resources/themes/lara-light-cyan/theme.css';
import styles from './admin.module.css'; // Assuming your CSS module is named this
import ScrollToTop from '../../../components/ScrollToTop';

export default function About() {
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null); // State for error message
    const [message, setMessage] = useState(''); // State for success message
    const [timeLeft, setTimeLeft] = useState(null); // State for countdown timer
    const router = useRouter(); // Initialize router for redirection using next/navigation

    // Function to handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent form default behavior

        try {
            const response = await fetch('/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ password }), // Send the password to the backend
            });

            const data = await response.json();

            if (response.ok) {
                // Set the authToken cookie on successful login (replace with actual token handling logic)
                document.cookie = `authToken=valid; path=/`; // Setting a simple token

                // Redirect to the dashboard on successful login
                router.push(data.redirectUrl);
            } else {
                // Show error message if login fails
                setError(data.error);
            }
        } catch (err) {
            // Handle error if something goes wrong
            setError('Something went wrong. Please try again.');
        }
    };

    // Function to handle password reset request
    const handlePasswordReset = async () => {
        try {
            const response = await fetch('/api/request-password-reset', {
                method: 'POST',
            });

            const data = await response.json();
            if (response.ok) {
                setMessage('비밀번호 재설정 링크가 이메일로 전송되었습니다.');
                setError(null);
                setTimeLeft(15 * 60); // Start 15-minute countdown (15 minutes in seconds)
            } else {
                setError(data.error);
            }
        } catch (err) {
            setError('오류가 발생했습니다. 다시 시도해주세요.');
        }
    };

    // Countdown timer logic
    useEffect(() => {
        if (timeLeft === 0) {
            // Reset the message when the timer runs out
            setMessage('');
        }
        if (timeLeft > 0) {
            const timer = setInterval(() => {
                setTimeLeft((prevTime) => prevTime - 1);
            }, 1000);
            return () => clearInterval(timer); // Cleanup interval on unmount
        }
    }, [timeLeft]);

    // Format time into minutes and seconds
    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    };

    return (
        <div className={styles['main-container']}>
            <main className={styles.main}>
                <ScrollToTop />
                <Link href="/">
                    <button className={styles.backButton}>
                        <FaArrowLeft /> &nbsp; 돌아가기
                    </button>
                </Link>

                <div className={styles.content}>
                    <img src="/logo2.png" alt="logo" className={styles.logo} />
                    <h1>관리자 페이지</h1>

                    {/* Display error message if exists */}
                    <form onSubmit={handleSubmit}>
                        <div className={styles.form}>
                            <FloatLabel>
                                <div className={styles.passwordWrapper}>
                                    <Password
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)} // Update password state
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
                            {error && <div className={styles.error}>{error}</div>}
                            <button type="submit">Submit</button>
                        </div>
                    </form>

                    {/* 비밀번호 찾기 (Find Password) button */}
                    <div className={styles.forgotPassword}>
                        <button onClick={handlePasswordReset} className={styles.forgotPasswordLink}>
                            비밀번호 찾기
                        </button>
                    </div>

                    {/* Display message and timer */}
                    {message && (
                        <div className={styles.message}>
                            {message} {timeLeft > 0 && <span>({formatTime(timeLeft)})</span>}
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
}