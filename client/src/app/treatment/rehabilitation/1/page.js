'use client'
import EmblaCarousel from "../../../../../components/EmblaCarousel2";
import Navigation from "../../../../../components/navigation";
import styles from "./rehabilitation1.module.css"
import Link from "next/link";
import '../../../../../components/embla2.css'


export default function Rehabilitation1() {
    const OPTIONS = { containScroll: false }
    const SLIDES = [
        {
            type: 'text',
            content: {
                h4: '개인치료.',
                h2: '상담',
                p: '개인의 문제를 명확히 이해할 수 있도록 상담합니다.'
            },
            // image: '/Picture1.jpg'
        },
        {
            type: 'text',
            content: {
                h4: '개인치료.',
                h2: '교육',
                p: '중독을 유발시킨 부적응적/비관적 심리구조를 밝혀 적응/긍정으로 대치합니다.'
            },
            // image: '/Picture2.jpg'
        },
        {
            type: 'text',
            content: {
                h4: '집단치료.',
                h2: '상담',
                p: '전문적으로 훈련된 상담자의 지도와 동료들과의 교류를 통해 집단 내 자신을 성숙한 사람으로 향상시킵니다.'
            },
            // image: '/Picture2.jpg'
        },
        {
            type: 'text',
            content: {
                h4: '집단치료.',
                h2: '교육',
                p: '약물 인식 교육 및 전염병 교육을 실시해 약물이 타인에게 미치는 문제를 교육합니다.'
            },
            // image: '/Picture2.jpg'
        },
        {
            type: 'text',
            content: {
                h4: '가족치료.',
                h2: '상담',
                p: '자신이 가족에게 미친 영향을 제대로 알 수 있도록 상담합니다.'
            },
            // image: '/Picture2.jpg'
        },
        {
            type: 'text',
            content: {
                h4: '개인치료.',
                h2: '교육',
                p: '가족 구성원 전체가 하나로 융합될 수 있도록 돕습니다.'
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

