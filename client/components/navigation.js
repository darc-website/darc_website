'use client';
import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./navigation.module.css";
import 'primereact/resources/themes/lara-light-cyan/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function Navigation({ activeIndex }) {
    const [scrollPosition, setScrollPosition] = useState(0);
    const pathname = usePathname();
    const dropdownRefs = useRef({});

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

    const isScrolled = scrollPosition > 0 || activeIndex > 0;

    return (
        <nav className={`${styles.nav} ${isScrolled ? styles.scrolled : ""}`}>
            <div className={styles.top}>
                <Link href="/">
                    <div className={styles.logo}>
                        <img src="/logo2.png" alt="Logo" />
                    </div>
                </Link>
                <div className={styles.link}>
                    <a href="https://www.youtube.com/channel/UCgBJ6HVUV81VvwsWh4kVhSw"><FaYoutube /></a>
                    <p> | </p>
                    <a href="https://www.instagram.com/mass9bro/"><FaInstagram /></a>
                    <div className={styles.search}>
                        <input
                            type="text"
                            name="searchWord"
                            className="keyword"
                            title="Search"
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
                        <span>Home</span>
                        <div className={styles.dropdown} ref={el => dropdownRefs.current.home = el}>
                            <div className={styles.linkbox}>
                                <div className={styles.column}>
                                    <Link href="/about"><h4>다르크란?</h4></Link>
                                    <Link href="/about/schedule">Schedule</Link>
                                </div>
                                <div className={styles.column}>
                                    <Link href="/review"><h4>회복수기</h4></Link>
                                    <Link href="/review/recommend">추천서</Link>
                                </div>
                                <div className={styles.column}>
                                    <Link href="/living"><h4>Living</h4></Link>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li
                        onMouseEnter={() => handleMouseEnter("addictions")}
                        onMouseLeave={() => handleMouseLeave("addictions")}
                    >
                        <span>Addictions</span>
                        <div className={styles.dropdown} ref={el => dropdownRefs.current.addictions = el}>
                            <div className={styles.linkbox}>
                                <div className={styles.column}>
                                    <Link href="/addictions"><h4>치료 약물</h4></Link>
                                    <Link href="/addictions/medicine/1">각성제</Link>
                                    <Link href="/addictions/medicine/2">진정, 마취제</Link>
                                    <Link href="/addictions/medicine/3">환각제</Link>
                                    <Link href="/addictions/medicine/4">기타 약물</Link>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li
                        onMouseEnter={() => handleMouseEnter("treatment")}
                        onMouseLeave={() => handleMouseLeave("treatment")}
                    >
                        <span>Treatment</span>
                        <div className={styles.dropdown} ref={el => dropdownRefs.current.treatment = el}>
                            <div className={styles.linkbox}>
                                <div className={styles.column}>
                                    <Link href="/treatment/rehabilitation/1"><h4>중독 재활</h4></Link>
                                    <Link href="/treatment/rehabilitation/1">치료</Link>
                                    <Link href="/treatment/program/1">프로그램</Link>
                                    <Link href="/treatment/law">사법지원</Link>
                                </div>

                            </div>
                        </div>
                    </li>
                    <li
                        onMouseEnter={() => handleMouseEnter("donations")}
                        onMouseLeave={() => handleMouseLeave("donations")}
                    >
                        <span>Donations</span>
                        <div className={styles.dropdown} ref={el => dropdownRefs.current.donations = el}>
                            <div className={styles.linkbox}>
                                <div className={styles.column}>
                                    <Link href="/donations/volunteer"><h4>자원봉사</h4></Link>
                                </div>
                                <div className={styles.column}>
                                    <Link href="/donations/support"><h4>기부</h4></Link>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li
                        onMouseEnter={() => handleMouseEnter("aboutus")}
                        onMouseLeave={() => handleMouseLeave("aboutus")}
                    >
                        <span>About us</span>
                        <div className={styles.dropdown} ref={el => dropdownRefs.current.aboutus = el}>
                            <div className={styles.linkbox}>
                                <div className={styles.column}>
                                    <Link href="/aboutus/chairman"><h4>이사장님 말씀</h4></Link>
                                </div>
                                <div className={styles.column}>
                                    <Link href="/aboutus/mission"><h4>미션</h4></Link>
                                </div>
                                <div className={styles.column}>
                                    <Link href="/aboutus/his/korea"><h4>역사</h4></Link>
                                    <Link href="/aboutus/his/korea">Korea</Link>
                                    <Link href="/aboutus/his/japan">Japan</Link>
                                </div>
                                <div className={styles.column}>
                                    <Link href="/aboutus/chart"><h4>조직도</h4></Link>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li
                        onMouseEnter={() => handleMouseEnter("contact")}
                        onMouseLeave={() => handleMouseLeave("contact")}
                    >
                        <span>Contact</span>
                        <div className={styles.dropdown} ref={el => dropdownRefs.current.contact = el}>
                            <div className={styles.linkbox}>
                                <div className={styles.column}>
                                    <Link href="/contact/contactus"><h4>Contact us</h4></Link>
                                </div>
                                <div className={styles.column}>
                                    <Link href="/contact/resources"><h4>Resources</h4></Link>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    );
}