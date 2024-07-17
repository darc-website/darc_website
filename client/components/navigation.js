import React from "react";
import Link from "next/link";
import styles from "./navigation.module.css"
import 'primereact/resources/themes/lara-light-cyan/theme.css';  // theme
import 'primereact/resources/primereact.min.css';               // core css
import 'primeicons/primeicons.css';


export default function Navigation() {
    return (
        <nav className={styles.nav}>
            <div className={styles.top}>
                <Link href="/">
                    <div className={styles.logo}>
                    </div>
                </Link>

                <div className={styles.link}>
                    <a href="https://www.youtube.com/channel/UCgBJ6HVUV81VvwsWh4kVhSw">Youtube</a>
                    <p> | </p>
                    <a href="https://www.instagram.com/mass9bro/">Instagram</a>
                    <div className={styles.search}>
                        <input
                            type="text"
                            name="searchWord"
                            className="keyword"
                            title="키워드"
                            defaultValue=""
                            placeholder="통합검색"
                        />
                        <button type="submit" className="btnSubmit">
                            <i className="pi pi-search" style={{ fontSize: '18px' }}></i>
                        </button>
                    </div>
                </div>

            </div>
            <div className={styles.bottom}>
                <ul>
                    <li>
                        <Link href="/">Home</Link>
                        <div className={styles.dropdown}>
                            <div className={styles.linkbox}>
                                <div className={styles.column}>
                                    <Link href="/darklan"><h4>다르크란?</h4></Link>
                                    <Link href="/schedule">Schedule</Link>
                                </div>
                                <div className={styles.column}>
                                    <Link href="/review"><h4>Review</h4></Link>
                                    <Link href="/experience">경험담</Link>
                                    <Link href="/recommendation">추천서</Link>
                                </div>
                                <div className={styles.column}>
                                    <Link href="/living"><h4>Living</h4></Link>
                                    <Link href="/facility">시설안내</Link>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <Link href="/treatment">Treatment</Link>
                        <div className={styles.dropdown}>
                            <div className={styles.linkbox}>
                                <div className={styles.column}>
                                    <Link href="/darklan"><h4>12단계 치료</h4></Link>
                                    <Link href="/schedule">치료 내용</Link>
                                </div>
                                <div className={styles.column}>
                                    <Link href="/review"><h4>외부 활동</h4></Link>
                                    <Link href="/experience">연극 치유</Link>
                                    <Link href="/recommendation">미술 치료</Link>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <Link href="/addictions">Addictions</Link>
                        <div className={styles.dropdown}>
                            <div className={styles.linkbox}>
                                <div className={styles.column}>
                                    <Link href="/darklan"><h4>치료약물</h4></Link>
                                    <Link href="/schedule">각성제</Link>
                                    <Link href="/schedule">진정, 마취제</Link>
                                    <Link href="/schedule">환각제</Link>
                                    <Link href="/schedule">기타 약물</Link>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <Link href="/donation">Donation</Link>
                        <div className={styles.dropdown}>
                            <div className={styles.linkbox}>
                                <div className={styles.column}>
                                    <Link href="/darklan"><h4>자원봉사</h4></Link>
                                </div>
                                <div className={styles.column}>
                                    <Link href="/review"><h4>기부</h4></Link>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <Link href="/about">About us</Link>
                        <div className={styles.dropdown}>
                            <div className={styles.linkbox}>
                                <div className={styles.column}>
                                    <Link href="/darklan"><h4>이사장님 말씀</h4></Link>
                                </div>
                                <div className={styles.column}>
                                    <Link href="/review"><h4>미션</h4></Link>
                                </div>
                                <div className={styles.column}>
                                    <Link href="/living"><h4>역사</h4></Link>
                                    <Link href="/facility">Korea</Link>
                                    <Link href="/facility">Japan</Link>
                                </div>
                                <div className={styles.column}>
                                    <Link href="/living"><h4>조직도</h4></Link>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <Link href="/contact">Contact</Link>
                        <div className={styles.dropdown}>
                            <div className={styles.linkbox}>
                                <div className={styles.column}>
                                    <Link href="/darklan"><h4>Contact us</h4></Link>
                                </div>
                                <div className={styles.column}>
                                    <Link href="/review"><h4>Resources</h4></Link>
                                    <a href="https://www.youtube.com/channel/UCgBJ6HVUV81VvwsWh4kVhSw">Youtube</a>
                                    <a href="https://www.instagram.com/mass9bro/">Instagram</a>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    )
}


