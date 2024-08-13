'use client'
import React, { useState } from 'react';
import Navigation from "../../../../components/navigation";
import styles from "./mission.module.css";
import Link from "next/link";

export default function Mission() {
    const [hoveredCircle, setHoveredCircle] = useState(null);

    const handleMouseEnter = (circle) => {
        setHoveredCircle(circle);
    };

    const handleMouseLeave = () => {
        setHoveredCircle(null);
    };

    return (
        <div className={styles['main-container']}>
            <main className={styles.main}>
                <Navigation />
                <div className={styles.content}>
                    <div className={styles.header}>
                        <div className={styles.title}>
                            <h1>Mission.</h1>
                        </div>
                        <div className={styles.link}>
                            <Link href="/aboutus/mission">About us</Link>
                            <p>&gt;</p>
                            <Link href="/aboutus/mission"><h4>mission</h4></Link>
                        </div>
                    </div>
                    <div className={styles.container}>
                        <div className={styles.left}>
                            <div
                                className={`${styles.circle} ${styles.circle1}`}
                                onMouseEnter={() => handleMouseEnter('circle1')}
                                onMouseLeave={handleMouseLeave}
                            >
                                <h3>Society</h3>
                            </div>
                            <div
                                className={`${styles.circle} ${styles.circle2}`}
                                onMouseEnter={() => handleMouseEnter('circle2')}
                                onMouseLeave={handleMouseLeave}
                            >
                                <h3>DARC</h3>
                            </div>
                            <div
                                className={`${styles.circle} ${styles.circle3}`}
                                onMouseEnter={() => handleMouseEnter('circle3')}
                                onMouseLeave={handleMouseLeave}
                            >
                                <h3>Individual</h3>
                            </div>
                        </div>
                        <div className={styles.right}>
                            {hoveredCircle === 'circle1' && (
                                <div className={styles.box}>
                                    <h2>Society.</h2>
                                    <h3>개인의 회복부터 <br />지역사회에 다시 환원되기까지...</h3>
                                    <p>마약류 중독은 질병입니다. 마약류 중독자들이 자신의 질병을 명확히 인지하고 치료받아 사회에 환원될 수 있도록 기여하겠습니다.
                                    </p>
                                </div>
                            )}
                            {hoveredCircle === 'circle2' && (
                                <div className={styles.box}>
                                    <h2>DARC.</h2>
                                    <h3>개인의 회복부터 <br />지역사회에 다시 환원되기까지...</h3>
                                    <p>공동체 생활을 통해 자기 중심적 사고를 버리고 이타적인 사람이 될 수 있도록 교육을 실시합니다.타인을 배려하는 방법을 익히고, 공동체에서 느끼는 정서적 안정감을 기반으로 행동변화를 이룰 수 있도록 <br />다르크 가족은 오늘도 노력하겠습니다.
                                    </p>
                                </div>
                            )}
                            {hoveredCircle === 'circle3' && (
                                <div className={styles.box}>
                                    <h2>Individual.</h2>
                                    <h3>개인의 회복부터 <br />지역사회에 다시 환원되기까지...</h3>
                                    <p>사회 내 한 개인으로서 책임을 질 만한 능력이 없었던 우리는 지속적으로 자신의 문제를 만들어 내고 있었습니다. 다르크는 중독 인식 교육, 직업재활 등 다양한 교육을 통해 사회 내 건강한 구성원으로써 첫 발을 내디딜 수 있도록 최선을 다하겠습니다.
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}