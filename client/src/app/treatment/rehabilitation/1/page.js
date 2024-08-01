'use client'
import EmblaCarousel from "../../../../../components/EmblaCarousel2";
import Navigation from "../../../../../components/navigation";
import styles from "./rehabilitation1.module.css"
import Link from "next/link";
import '../../../../../components/embla.css'


export default function Rehabilitation1() {
    const OPTIONS = {};
    const SLIDES = [
        { type: 'text', content: '1' },
        { type: 'text', content: '2' },
        { type: 'text', content: '3' },
        { type: 'text', content: '4' },
        { type: 'text', content: '5' },
        { type: 'text', content: '6' },
    ];


    return (
        <div className={styles['main-container']}>
            <main className={styles.main}>
                <Navigation />
                <div className={styles.content}>
                    <div className={styles.header}>
                        <div className={styles.title}>
                            <h1>Treatment.</h1>
                        </div>
                        <div className={styles.link}>
                            <Link href="/treatment/rehabilitation/1">Treatment</Link>
                            <p>&gt;</p>
                            <Link href="/treatment/rehabilitation/1"><h4>중독 재활 치료</h4></Link>
                        </div>

                    </div>
                    <div className={styles.carousel}>
                        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
                    </div>

                </div>
            </main>
        </div>
    );
}

