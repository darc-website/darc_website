'use client'
import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Import usePathname
import styles from "./navigation.module.css";
import 'primereact/resources/themes/lara-light-cyan/theme.css';  // theme
import 'primereact/resources/primereact.min.css';               // core css
import 'primeicons/primeicons.css';

export default function Navigation() {
    const [scrollPosition, setScrollPosition] = useState(0);
    const pathname = usePathname(); // Initialize usePathname
    const dropdownRefs = useRef({}); // Initialize refs for each dropdown

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        Object.values(dropdownRefs.current).forEach(dropdown => {
            if (dropdown) {
                dropdown.style.display = "none";
            }
        });
    }, [pathname]);

    const handleLinkClick = (e, href) => {
        if (pathname === href) {
            e.preventDefault();
            window.location.reload();
        }
    };

    const handleMouseEnter = (key) => {
        if (dropdownRefs.current[key]) {
            dropdownRefs.current[key].style.display = "block";
        }
    };

    const handleMouseLeave = (key) => {
        if (dropdownRefs.current[key]) {
            dropdownRefs.current[key].style.display = "none";
        }
    };

    return (
        <nav className={`${styles.nav} ${scrollPosition > 0 ? styles.scrolled : ""}`}>
            <div className={styles.top}>
                <Link href="/">
                    <div className={styles.logo}>
                        <img src="/logo2.png" alt="" />
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
                    <li
                        onMouseEnter={() => handleMouseEnter("home")}
                        onMouseLeave={() => handleMouseLeave("home")}
                    >
                        <Link href="/" onClick={(e) => handleLinkClick(e, "/")}>Home</Link>
                        <div className={styles.dropdown} ref={el => dropdownRefs.current.home = el}>
                            <div className={styles.linkbox}>
                                <div className={styles.column}>
                                    <Link href="/about" onClick={(e) => handleLinkClick(e, "/about")}><h4>다르크란?</h4></Link>
                                    <Link href="/about/schedule" onClick={(e) => handleLinkClick(e, "/about/schedule")}>Schedule</Link>
                                </div>
                                <div className={styles.column}>
                                    <Link href="/review" onClick={(e) => handleLinkClick(e, "/review")}><h4>회복수기</h4></Link>
                                    <Link href="/review/recommend" onClick={(e) => handleLinkClick(e, "/review/recommend")}>추천서</Link>
                                </div>
                                <div className={styles.column}>
                                    <Link href="/living" onClick={(e) => handleLinkClick(e, "/living")}><h4>Living</h4></Link>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li
                        onMouseEnter={() => handleMouseEnter("addictions")}
                        onMouseLeave={() => handleMouseLeave("addictions")}
                    >
                        <Link href="/addictions" onClick={(e) => handleLinkClick(e, "/addictions")}>Addictions</Link>
                        <div className={styles.dropdown} ref={el => dropdownRefs.current.addictions = el}>
                            <div className={styles.linkbox}>
                                <div className={styles.column}>
                                    <Link href="/addictions/medicine" onClick={(e) => handleLinkClick(e, "/addictions/medicine")}><h4>치료 약물</h4></Link>
                                    <Link href="/addictions/medicine/1" onClick={(e) => handleLinkClick(e, "/addictions/medicine/1")}>각성제</Link>
                                    <Link href="/addictions/medicine/2" onClick={(e) => handleLinkClick(e, "/addictions/medicine/2")}>진정, 마취제</Link>
                                    <Link href="/addictions/medicine/3" onClick={(e) => handleLinkClick(e, "/addictions/medicine/3")}>환각제</Link>
                                    <Link href="/addictions/medicine/4" onClick={(e) => handleLinkClick(e, "/addictions/medicine/4")}>기타 약물</Link>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li
                        onMouseEnter={() => handleMouseEnter("treatment")}
                        onMouseLeave={() => handleMouseLeave("treatment")}
                    >
                        <Link href="/treatment" onClick={(e) => handleLinkClick(e, "/treatment")}>Treatment</Link>
                        <div className={styles.dropdown} ref={el => dropdownRefs.current.treatment = el}>
                            <div className={styles.linkbox}>
                                <div className={styles.column}>
                                    <Link href="/treatment/rehabilitation" onClick={(e) => handleLinkClick(e, "/treatment/rehabilitation")}><h4>중독 재활 치료</h4></Link>
                                </div>
                                <div className={styles.column}>
                                    <Link href="/treatment/program" onClick={(e) => handleLinkClick(e, "/treatment/program")}><h4>프로그램</h4></Link>
                                </div>
                                <div className={styles.column}>
                                    <Link href="/treatment/law" onClick={(e) => handleLinkClick(e, "/treatment/law")}><h4>사법지원</h4></Link>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li
                        onMouseEnter={() => handleMouseEnter("donations")}
                        onMouseLeave={() => handleMouseLeave("donations")}
                    >
                        <Link href="/donations" onClick={(e) => handleLinkClick(e, "/donations")}>Donations</Link>
                        <div className={styles.dropdown} ref={el => dropdownRefs.current.donations = el}>
                            <div className={styles.linkbox}>
                                <div className={styles.column}>
                                    <Link href="/donations/volunteer" onClick={(e) => handleLinkClick(e, "/donations/volunteer")}><h4>자원봉사</h4></Link>
                                </div>
                                <div className={styles.column}>
                                    <Link href="/donations/support" onClick={(e) => handleLinkClick(e, "/donations/support")}><h4>기부</h4></Link>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li
                        onMouseEnter={() => handleMouseEnter("aboutus")}
                        onMouseLeave={() => handleMouseLeave("aboutus")}
                    >
                        <Link href="/aboutus" onClick={(e) => handleLinkClick(e, "/aboutus")}>About us</Link>
                        <div className={styles.dropdown} ref={el => dropdownRefs.current.aboutus = el}>
                            <div className={styles.linkbox}>
                                <div className={styles.column}>
                                    <Link href="/aboutus/chairman" onClick={(e) => handleLinkClick(e, "/aboutus/chairman")}><h4>이사장님 말씀</h4></Link>
                                </div>
                                <div className={styles.column}>
                                    <Link href="/aboutus/mission" onClick={(e) => handleLinkClick(e, "/aboutus/mission")}><h4>미션</h4></Link>
                                </div>
                                <div className={styles.column}>
                                    <Link href="/aboutus/his" onClick={(e) => handleLinkClick(e, "/aboutus/his")}><h4>역사</h4></Link>
                                    <Link href="/aboutus/his/korea" onClick={(e) => handleLinkClick(e, "/aboutus/his/korea")}>Korea</Link>
                                    <Link href="/aboutus/his/japan" onClick={(e) => handleLinkClick(e, "/aboutus/his/japan")}>Japan</Link>
                                </div>
                                <div className={styles.column}>
                                    <Link href="/aboutus/chart" onClick={(e) => handleLinkClick(e, "/aboutus/chart")}><h4>조직도</h4></Link>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li
                        onMouseEnter={() => handleMouseEnter("contact")}
                        onMouseLeave={() => handleMouseLeave("contact")}
                    >
                        <Link href="/contact" onClick={(e) => handleLinkClick(e, "/contact")}>Contact</Link>
                        <div className={styles.dropdown} ref={el => dropdownRefs.current.contact = el}>
                            <div className={styles.linkbox}>
                                <div className={styles.column}>
                                    <Link href="/contact/contactus" onClick={(e) => handleLinkClick(e, "/contact/contactus")}><h4>Contact us</h4></Link>
                                </div>
                                <div className={styles.column}>
                                    <Link href="/review" onClick={(e) => handleLinkClick(e, "/review")}><h4>Resources</h4></Link>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    );
}