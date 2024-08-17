'use client'
import React, { useState } from 'react';
import Navigation from "../../../../components/navigation";
import styles from "./chart.module.css";
import Link from "next/link";
import { GoX } from "react-icons/go";

export default function Mission() {


    return (
        <div className={styles['main-container']}>
            <main className={styles.main}>
                <Navigation />
                <div className={styles.content}>
                    <div className={styles.header}>
                        <div className={styles.title}>
                            <h1>조직도.</h1>
                        </div>
                        <div className={styles.link}>
                            <Link href="/aboutus/chart">About us</Link>
                            <p>&gt;</p>
                            <Link href="/aboutus/chart"><h4>조직도</h4></Link>
                        </div>
                    </div>




                    <div className={styles.contentBox}>
                        <div className={styles.photobox}>
                            <img src="/pplchart.png" alt="Organization Chart" />
                        </div>
                        <div className={styles.watermark}>
                            <img src="/watermark.svg" alt="" />
                        </div>
                    </div>


                </div>
            </main>
        </div>
    );
}