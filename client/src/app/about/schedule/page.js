'use client'
import Navigation from "../../../../components/navigation";
import styles from "./schedule.module.css";
import Link from "next/link";
import Footer from "../../../../components/footer";
import ScrollToTop from "../../../../components/ScrollToTop";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

export default function Schedule() {
    return (
        <div className={styles['main-container']}>
            <main className={styles.main}>
                <ScrollToTop />
                <Navigation />
                <div className={styles.content}>
                    <div className={styles.header}>
                        <div className={styles.title}>
                            <h1>Schedule.</h1>
                            <h3>다르크에서의 생활</h3>
                        </div>

                        <div className={styles.link}>
                            <Link href="/">Home</Link>
                            <p>&gt;</p>
                            <Link href="/about/schedule"><h4>Schedule</h4></Link>
                        </div>
                    </div>

                    <div className={styles.scheduler}>
                        {/* Add the TransformWrapper and TransformComponent for zoom functionality */}
                        <TransformWrapper
                            initialScale={1}
                            minScale={0.5}
                            maxScale={4}
                            centerZoomedOut={true}
                            centerOnInit={true}
                        >
                            {({ zoomIn, zoomOut, resetTransform }) => (
                                <>
                                    <div className={styles.controls} style={{ marginBottom: "10px" }}>
                                        <button onClick={() => zoomIn()}>+</button>
                                        <button onClick={() => zoomOut()}>-</button>
                                        <button onClick={() => resetTransform()}>Reset</button>
                                    </div>
                                    <TransformComponent>
                                        <img src="/schedule.png" alt="Schedule" />
                                    </TransformComponent>
                                </>
                            )}
                        </TransformWrapper>
                    </div>

                    <div className={styles.bottom}>
                        <p>
                            *노란색 표시 된 프로그램은 외부 전문가 초청을 통해 진행하는 프로그램으로
                            상황에 따라 변경가능성 있음 <br />
                            *초록색 표시 된 모임은 항상 같은 시간에 있는 자조모임 <br />
                            *파란색 표시 된 치료 프로그램은 다르크에서 진행하는 독자적인 치료 프로그램
                        </p>
                    </div>
                </div>
                <Footer />
            </main>
        </div>
    );
}