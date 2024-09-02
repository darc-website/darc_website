'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation'; // Correct import for useRouter in App Router
import { Password } from 'primereact/password';
import { FloatLabel } from 'primereact/floatlabel';
import { FaArrowLeft } from 'react-icons/fa6';
import 'primereact/resources/themes/lara-light-cyan/theme.css';
import styles from './admin.module.css'; // Assuming your CSS module is named this

export default function About() {
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null); // State for error message
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

                    {/* Display error message if exists */}
                    <form onSubmit={handleSubmit}> {/* Add form with onSubmit handler */}
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
                            <button type="submit">Submit</button> {/* Submit button */}
                        </div>
                    </form>
                </div>
            </main>
        </div>
    );
}