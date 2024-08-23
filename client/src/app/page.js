'use client';
import React, { useState, useEffect } from "react";
import styles from "./page.module.css";
import Navigation from "../../components/navigation";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ReactCurvedText from 'react-curved-text';
import EmblaCarousel from "../../components/EmblaCarousel";
import { FullpageContainer, FullpageSection } from '@shinyongjun/react-fullpage';
import '@shinyongjun/react-fullpage/css';
import { Carousel } from "flowbite-react";
import '../../components/embla.css'


export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);
  const OPTIONS = {};
  const SLIDES = [
    { type: 'youtube', videoId: 'lOpRTaRlFFk' },  // First YouTube video
    { type: 'youtube', videoId: 'ito63ooLnsE' },  // Second YouTube video
    { type: 'text', content: 'This is third video' },
  ];

  const sections = [
    { name: "first" },
    { name: "second" },
    { name: "third" },
  ];

  return (
    <main className={styles.main}>
      <Navigation activeIndex={activeIndex} />
      <div className={styles.container}>
        <div className={styles.statusBar}>
          {sections.map((section, index) => (
            <div
              key={section.name}
              className={`${styles.statusItem} ${activeIndex === index ? styles.active : ''}`}
              onClick={() => setActiveIndex(index)}
            >
              <div className={styles.statusLabel}>{section.label}</div>
            </div>
          ))}
        </div>
        <FullpageContainer
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >
          <FullpageSection name="first">
            <div style={{ width: '100%', height: '100vh' }} className={styles.firstScreen}>
              <div className={styles.first}>
                <div className={styles.firstLeft}>
                  <ReactCurvedText width='472'
                    height='285'
                    cx='238'
                    cy='334'
                    rx='270'
                    ry='270'
                    startOffset='210'
                    reversed={true}
                    text='"One of the hardest things was learning'
                    textProps={{ style: { fontSize: 26 } }}
                    textPathProps={{ fill: "#73808e" }}
                  />
                  <div className={styles.curved}>
                    <ReactCurvedText width='472'
                      height='285'
                      cx='238'
                      cy='334'
                      rx='250'
                      ry='250'
                      startOffset='250'
                      reversed={true}
                      text='that I was worth recovery."'
                      textProps={{ style: { fontSize: 26 } }}
                      textPathProps={{ fill: "#73808e" }}
                    />
                  </div>
                  <div className={styles.curved}>
                    <ReactCurvedText width='472'
                      height='250'
                      cx='238'
                      cy='335'
                      rx='240'
                      ry='240'
                      startOffset='305'
                      reversed={true}
                      text='from Another diamond'
                      textProps={{ style: { fontSize: 16 } }}
                      textPathProps={{ fill: "#5f6d7d" }}
                    />
                  </div>
                </div>
                <div className={styles.firstRight}>
                  <div className={styles.picture}>
                    <img src="/home1.jpeg" alt="" />
                  </div>
                </div>
              </div>
              <div className={styles.second}>
                <div className={styles.cards}>
                  <div className={styles.card}>
                    <img className={styles.icon} src="/icon1.svg" alt="not found" />
                    <p className={styles.cardHead}>약물 치료</p>
                    <p className={styles.cardtext2}>"중독 전문 병원과 연계를 통해 전문적인 <br />치료를 진행합니다.”</p>
                  </div>
                  <div className={styles.card}>
                    <img className={styles.icon} src="/icon2.svg" alt="not found" />
                    <p className={styles.cardHead}>약물 인식 교육</p>
                    <p className={styles.cardtext2}>"마약류 중독 전문가들이 당사자와 <br />가족들에게 마약류 중독에 대한 체계적인 <br />교육을 실시합니다.”</p>
                  </div>
                  <div className={styles.card}>
                    <img className={styles.icon} src="/icon3.svg" alt="not found" />
                    <p className={styles.cardHead}>직업 재활</p>
                    <p className={styles.cardtext2}>“재활을 통해 건강한 사회 구성원이 <br />될 수 있도록 돕습니다.”
                    </p>
                  </div>
                  <div className={styles.card}>
                    <img className={styles.icon} src="/icon4.svg" alt="not found" />
                    <p className={styles.cardHead}>자기 검토 / 자아 성찰</p>
                    <p className={styles.cardtext2}>“12단계 프로그램 실천으로 삶에 대한 <br />태도변화와 가치관을 변화시킵니다.”
                    </p>
                  </div>
                  <div className={styles.card}>
                    <img className={styles.icon} src="/icon5.svg" alt="not found" />
                    <p className={styles.cardHead}>미래 비전 제시</p>
                    <p className={styles.cardtext2}>“미래에 대한 고민을 함께합니다.”
                    </p>
                  </div>
                </div>
                <div className={styles.textbox}>
                  <p className={styles.font1}>"지독한 약물 중독자일지라도 <span className={styles.specialText}>'회복할 수 있다'</span> 라는 희망의 메세지를 얻게 됩니다."</p>
                  <p className={styles.font2}>From DARC</p>
                </div>
              </div>
            </div>
          </FullpageSection>
          <FullpageSection name="second">
            <div style={{ width: '100%', height: '100vh' }}>
              <div className={styles.content2}>
                <div className={styles.divider1}>
                  <div className={styles.real}>
                    <div className={styles.carousel}>
                      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
                    </div>
                    <div className={styles.texts}>
                      <h3>회복자들의 경험담</h3>
                      <p>DARC 멤버들의 <br /> 회복관련 이야기</p>
                      <button><Link href="/review"><h4>자세히 보기</h4></Link></button>
                    </div>
                    <div className={styles.design}>
                      <p>Designed by Freepik</p>
                    </div>

                  </div>
                </div>

                <div className={styles.divider2}>
                  <div className={styles.texts2}>
                    <h3>DARC에서의 생활</h3>
                    <p>공동체에서 다양한
                      <br /> 사람들과 함께.</p>
                    <button><Link href="/review"><h4>자세히 보기</h4></Link></button>
                  </div>
                </div>
              </div>
            </div>
          </FullpageSection>
          <FullpageSection name="third">
            <div style={{ width: '100%', height: '100vh', background: '#ffffff' }}>

            </div>
          </FullpageSection>
        </FullpageContainer >
      </div >
    </main >
  );
}