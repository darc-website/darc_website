'use client';
import React, { useState, useEffect } from "react";
import styles from "./page.module.css";
import Navigation from "../../components/navigation";
import Marquee from "../../components/marquee";
import Footer from "../../components/footer";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ReactCurvedText from 'react-curved-text';
import EmblaCarousel from "../../components/EmblaCarousel";
import { FullpageContainer, FullpageSection } from '@shinyongjun/react-fullpage';
import '@shinyongjun/react-fullpage/css';
import { Carousel } from "flowbite-react";
import '../../components/embla.css'
import { FaArrowRight } from "react-icons/fa6";


export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <main className={styles.main}>
      <Navigation activeIndex={activeIndex} />
      <div className={styles.container}>
        <div style={{ width: '100%', height: '100vh' }} className={styles.firstScreen}>

          <div className={styles.pictureBox}>
            <div className={styles.firstText}>
              <h1>
                “다르크에서는 아무리 지독한 약물 중독자일지라도 <br /> 회복할 수 있다라는 희망의 메세지를 받게됩니다.”
              </h1>
              <p>From Reading Guide</p>
              <div className={styles.cardSlot}>
                <h3>상담신청</h3>
                <button><FaArrowRight /></button>
              </div>
            </div>

          </div>

        </div>
        <div style={{ width: '100%', height: '100vh' }} className={styles.secPage}>
          <div className={styles.second}>

            <div className={styles.topBlocks}>
              <div className={styles.Firstblocks}>
                <div className={styles.linecontainer}>
                  <hr className={styles.line} />
                  <span className={styles.linetext}>Our Services</span>

                </div>
                <div className={styles.textinCard}>
                  <h2>Addiciton Rehabilitation</h2>
                  <p>"중독으로 인해 잘못된 성격, 가치관, 신념등의 <br />문제를 확인하고 검토, 수정, 해결해 나아감으로써 <br />단순히 약물을 끊는 것이 아닌 온전한 회복에 <br />이를 수 있게 됩니다."</p>
                </div>


              </div>
              <div className={styles.blocks}>
                <div className={styles.iconCircle} style={{ backgroundColor: "#244186" }}>
                  <img src="/icon1.svg" alt="" />


                </div>
                <h2>약물 치료</h2>
                <p>“마약 중독 전문 병원과 연계를 통해 전문적인 <br />치료를 진행합니다"</p>
              </div>

              <div className={styles.blocks}>
                <div className={styles.iconCircle} style={{ backgroundColor: "#444655" }}>
                  <img src="/icon2.svg" alt="" />
                </div>
                <h2>약물 인식 교육</h2>
                <p>“마약류 중독 전문가들이 당사자와 가족들에게 <br />마약류 중독에 대한 체계적인 교육을 실시합니다.”
                </p>
              </div>
            </div>
            <div className={styles.bottomBlocks}>
              <div className={styles.blocks}>
                <div className={styles.iconCircle} style={{ backgroundColor: "#a9aabc" }}>
                  <img src="/icon3.svg" alt="" />
                </div>
                <h2>직업 재활</h2>
                <p>“재활을 통해 건강한 사회 구성원이 될 수 있도록 <br />돕습니다."</p>
              </div>
              <div className={styles.blocks}>
                <div className={styles.iconCircle} style={{ backgroundColor: "#574200" }}>
                  <img src="/icon4.svg" alt="" />
                </div>
                <h2>자기 검토/자아 성찰</h2>
                <p>“12단계 프로그램 실천으로 삶에 대한 태도 변화와 가치관을 변화시킵니다.”</p>
              </div>
              <div className={styles.blocks}>
                <div className={styles.iconCircle} style={{ backgroundColor: "#8d7125" }}>
                  <img src="/icon5.svg" alt="" />
                </div>
                <h2>미래 비전 제시</h2>
                <p>"미래에 대한 고민을 함께합니다."</p>
              </div>
            </div>
          </div>


        </div>

        <div className={styles.videoSlot}>
          <div className={styles.video}>
            <video width="640" height="360" controls>
              <source src="/DarcVideo.mp4" type="video/mp4" />
            </video>
          </div>
          <div className={styles.videoTextBox}>
            <h2>회복자들의 경험담</h2>
            <p>DARC 멤버들의 <br />회복관련 이야기</p>
            <button className={styles.Specificbutton}>자세히 보기</button>
          </div>
        </div>

        <div className={styles.testimony}>
          <div className={styles.testimonyText}>
            <h3>Real Stories of Recovery</h3>
            <p>Reviews From Around The World <br /> "You can be the next one.”</p>
          </div>
          <div className={styles.cardWrapper}>
            <div className={styles.testimonyText2}>
              <p>Testimonials</p>
            </div>
            <div className={styles.testcardWrapper}>
              <div className={styles.testCard}>
                <img src="/star.png" alt="" className={styles.star} />
                <div className={styles.userCard}>
                  <img src="/userTest.png" alt="" className={styles.user} />
                  <div className={styles.name}>
                    <p>준</p>
                    <label htmlFor="">고객</label>
                  </div>
                </div>
                <p>23년 마약 중독에서 벗어나 상담사가 된 저는 마약중독을 극복한 경험으로 현재 현장에서 마약중독자들의 치료와 재활을 직접 도우며 힘쓰고 있습니다.
                </p>
              </div>
              <div className={styles.testCard}>
                <img src="/star.png" alt="" className={styles.star} />
                <div className={styles.userCard}>
                  <img src="/userTest.png" alt="" className={styles.user} />
                  <div className={styles.name}>
                    <p>마틴</p>
                    <label htmlFor="">참사랑병원장</label>
                  </div>
                </div>
                <p>23년 마약 중독에서 벗어나 상담사가 된 저는 마약중독을 극복한 경험으로 현재 현장에서 마약중독자들의 치료와 재활을 직접 도우며 힘쓰고 있습니다.
                </p>
              </div>
              <div className={styles.testCard}>
                <img src="/star.png" alt="" className={styles.star} />
                <div className={styles.userCard}>
                  <img src="/userTest.png" alt="" className={styles.user} />
                  <div className={styles.name}>
                    <p>태호</p>
                    <label htmlFor="">가수</label>
                  </div>
                </div>
                <p>23년 마약 중독에서 벗어나 상담사가 된 저는 마약중독을 극복한 경험으로 현재 현장에서 마약중독자들의 치료와 재활을 직접 도우며 힘쓰고 있습니다.
                </p>
              </div>

            </div>
          </div>




        </div>
        <div className={styles.hospital}>
          <Marquee />
        </div>


      </div >
      <Footer />
    </main >
  );
}
