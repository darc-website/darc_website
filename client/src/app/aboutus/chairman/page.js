'use client'
import { Signika } from "next/font/google";
import Navigation from "../../../../components/navigation";
import styles from "./chairman.module.css"
import Link from "next/link";


export default function Chairman() {

    return (
        <div className={styles['main-container']}>
            <main className={styles.main}>
                <Navigation />
                <div className={styles.content}>
                    <div className={styles.header}>
                        <div className={styles.title}>
                            <h1>Director's Remarks.</h1>
                        </div>
                        <div className={styles.link}>
                            <Link href="/aboutus/chairman">About us</Link>
                            <p>&gt;</p>
                            <Link href="/aboutus/chairman"><h4>이사장님 말씀</h4></Link>
                        </div>
                    </div>
                    <div className={styles.contentBox}>
                        <div className={styles.left}>
                            <div className={styles.letter}>
                                <p>
                                    안녕하세요, <br />
                                    다르크 협회 이사장 최진묵입니다. <br />
                                    <br />
                                    23년 마약 중독에서 벗어나 상담사가 된 저는 마약중독을 극복한 경험으로 현재 현장에서 마약중독자들의 치료와 재활을 직접 도우며 힘쓰고 있습니다. <br />
                                    <br />
                                    대다수의 마약 중독자들은 자신이 마약을 하는 행위가 질병인지 모른 체, 평생을 고통 속에서 살아가고 있습니다. 설사 안다고 해도 법전인 문제가 야기될까 치료진의 도움을 요청 할 수 없습니다. <br />
                                    <br />
                                    마약 중독은 초기에 치료를 합니다. 치료를 하기 위해선 음지가 아닌 양지에서 중독의 문제시작해야를 다뤄야만 합니다. 마약의 문제를 무겁게 만 다루어 쉬쉬하는 사회적 분위기가 마약 중독치료 및 재활에 도움이 되지 않는 다는 것을 깨달았습니다. 말기 중독자의 모습을 교육함으로서 초기 마약 사용자에게는 자신은 중독이 아니라고 생각하게 만드는 역효과를 가져오고 있습니다. <br />

                                </p>
                            </div>

                            <div className={styles.sign}>
                                <p>
                                    감사합니다. <br />
                                    센터장 최진묵 올림
                                </p>
                                <img src="/sign.png" alt="sign" />
                            </div>
                        </div>
                        <div className={styles.right}>
                            <img src="/chairman.png" alt="no photo" />
                        </div>

                    </div>
                </div>
            </main>
        </div>
    );
}

