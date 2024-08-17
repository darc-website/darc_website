'use client'
import React from 'react';
import Navigation from "../../../../components/navigation";
import styles from "./resources.module.css";
import Link from "next/link";

export default function Mission() {
    return (
        <div className={styles['main-container']}>
            <main className={styles.main}>
                <Navigation />
                <div className={styles.content}>
                    <div className={styles.header}>
                        <div className={styles.title}>
                            <h1>Resources.</h1>
                        </div>
                        <div className={styles.link}>
                            <Link href="/contact/resources">Contact</Link>
                            <p>&gt;</p>
                            <Link href="/contact/resources"><h4>Resources.</h4></Link>
                        </div>
                    </div>

                    <div className={styles.textbox}>
                        <h2>SNS 우리의 이야기를 들어보세요.</h2>
                    </div>

                    <div className={styles.divbox}>
                        <div
                            className={styles.leftLink}
                            onClick={() => window.open("https://instagram.com/mass9bro/", "_blank")}
                        >
                            <h2>Instagram</h2>
                        </div>
                        <div
                            className={styles.rightLink}
                            onClick={() => window.open("https://www.youtube.com/channel/UCgBJ6HVUV81VvwsWh4kVhSw", "_blank")}
                        >
                            <h2>Youtube</h2>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}