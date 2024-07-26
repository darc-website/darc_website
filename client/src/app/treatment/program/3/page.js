'use client'
import Navigation from "../../../../../components/navigation";
import styles from "./program3.module.css"
import Link from "next/link";


export default function Program1() {

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
                    <div className={styles.anotherLink}>
                        <Link href="/treatment/program/1" className={styles.other}><p>연극</p></Link>
                        <p>|</p>
                        <Link href="/treatment/program/2" className={styles.other}><p>독서</p></Link>
                        <p>|</p>
                        <Link href="/treatment/program/3" className={styles.rightnow}><p>미술</p></Link>
                    </div>
                    <div className={styles.contentBox}>
                        <div className={styles.medicine}>

                            <div className={styles.left}>
                                <div className={styles.box}>
                                    <h2>미술 프로그램.</h2>
                                    <div className={styles.textBox}>
                                        <p>심리 상태를 다양한 형태로 표현하며 올바른 가치관을 형성 시킵니다.

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

