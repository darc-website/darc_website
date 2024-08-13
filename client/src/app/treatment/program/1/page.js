'use client'
import Navigation from "../../../../../components/navigation";
import EmblaCarousel from "../../../../../components/EmblaCarousel2";
import styles from "./program1.module.css"
import Link from "next/link";
import '../../../../../components/embla2.css'


export default function Program1() {
    const OPTIONS = { containScroll: false }
    const SLIDES = [
        {
            type: 'text',
            content: {
                h4: '연극 프로그램.',
                p: '연극속의 역할에 몰입해 타인의 심리, 행동 이해 능력 향상 시킬 수 있습니다.'
            },
            // image: '/Picture1.jpg'
        },
        {
            type: 'text',
            content: {
                h4: '독서 프로그램.',
                p: '다양한 지식을 책으로 배우고 토론을 통해 타인의 관점을 배워 넓은 시야를 가질 수 있습니다.'
            },
            // image: '/Picture2.jpg'
        },
        {
            type: 'text',
            content: {
                h4: '미술 프로그램.',
                p: '심리 상태를 다양한 형태로 표현하며 올바른 가치관을 형성 시킵니다.'
            },
            // image: '/Picture2.jpg'
        },
        // Add more slides as needed
    ];
    return (
        <div className={styles['main-container']}>
            <main className={styles.main}>
                <Navigation />
                <div className={styles.content}>
                    <div className={styles.header}>
                        <div className={styles.title}>
                            <h1>Program.</h1>
                        </div>
                        <div className={styles.link}>
                            <Link href="/treatment/rehabilitation/1">Treatment</Link>
                            <p>&gt;</p>
                            <Link href="/treatment/program/1"><h4>프로그램</h4></Link>
                        </div>
                    </div>
                    <div className={styles.contentBox}>
                        <div className={styles.medicine}>
                            <EmblaCarousel slides={SLIDES} options={OPTIONS} />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

