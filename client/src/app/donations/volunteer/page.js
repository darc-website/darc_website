'use client'
import Navigation from "../../../../components/navigation";
import styles from "./volunteer.module.css"
import Link from "next/link";


export default function Program1() {

    return (
        <div className={styles['main-container']}>
            <main className={styles.main}>
                <Navigation />
                <div className={styles.content}>
                    <div className={styles.header}>
                        <div className={styles.title}>
                            <h1>Volunteer Work.</h1>
                        </div>
                        <div className={styles.link}>
                            <Link href="/donations/volunteer">Donations</Link>
                            <p>&gt;</p>
                            <Link href="/donations/volunteer"><h4>자원 봉사</h4></Link>
                        </div>
                    </div>
                    <div className={styles.contentBox}>
                        <h3>
                            지금, 다르크와 함께 <br />
                            마약으로 고통받고 있는 <br />
                            중독자들에게 큰 힘이 되어주세요.
                        </h3>
                        <div className={styles.picture1}>
                            <img src="/picture.png" alt="" />
                        </div>
                        <div className={styles.reviews}>
                            <div className={styles.oneCard}>
                                <div className={styles.theme}>
                                    <img src="/theme.png" alt="" />
                                </div>
                                <div className={styles.ppl}>
                                    <img src="/ppl1.png" alt="" />
                                </div>
                                <div className={styles.review}>
                                    <h3>자원봉사자 명(소속)</h3>
                                    <p>봉사 후기: 너무 좋았고 다르크 사람들이 진심으로 회복하기를 기원합니다. 앞으로등등 열심히 다르크사람들이 돌아와 복기형 도ㅓㄹ아오하 성호혀형 보고싶어.. .육지 동제… 항상 건강하자 사랑하ㅓㄴ다 다들/..// 또르륵
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.reviews}>
                            <div className={styles.oneCard}>
                                <div className={styles.theme}>
                                    <img src="/theme.png" alt="" />
                                </div>
                                <div className={styles.ppl}>
                                    <img src="/ppl2.png" alt="" />
                                </div>
                                <div className={styles.review}>
                                    <h3>자원봉사자 명</h3>
                                    <p>봉사 후기: 너무 좋았고 다르크 사람들이 진심으로 회복하기를 기원합니다. 앞으로등등 킬러 홍홍ㅎ 지;ㄴ영이형 담배사주세요 돈이 업	ㅅ어요 조ㅠ신한 용구형 끼룩끼룩끼루우우웅욱흥앻ㅅ

                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.margin}>
                        </div>
                        <div className={styles.application}>
                            <Link href="/donations/volunteer/application"><button>Application Form</button></Link>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

