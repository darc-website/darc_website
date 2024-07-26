'use client'
import Navigation from "../../../../../components/navigation";
import styles from "./rehabilitation2.module.css"
import Link from "next/link";


export default function Rehabilitation2() {

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
                    <div className={styles.anotherLink}>
                        <Link href="/treatment/rehabilitation/1" className={styles.other}><p>집단 치료</p></Link>
                        <p>|</p>
                        <Link href="/treatment/rehabilitation/2" className={styles.rightnow}><p>개인 치료</p></Link>
                        <p>|</p>
                        <Link href="/treatment/rehabilitation/3" className={styles.other}><p>가족 치료</p></Link>
                    </div>
                    <div className={styles.contentBox}>
                        <div className={styles.medicine}>

                            <div className={styles.left}>
                                <div className={styles.box}>
                                    <h2>상담</h2>
                                    <div className={styles.textBox}>
                                        <p>개인의 문제를 명확히 이해할 수 있도록 상담합니다.
                                        </p>
                                    </div>

                                </div>

                            </div>
                            {/* <div className={styles.divider}></div> */}
                            <div className={styles.right}>
                                <div className={styles.box}>
                                    <h2>교육</h2>
                                    <div className={styles.textBox}>
                                        <p>중독을 유발시킨 부적응적/비관적 심리구조를 밝혀 적응/긍정으로 대치합니다
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

