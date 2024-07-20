'use client'
import styles from "./page.module.css";
import Navigation from "../../components/navigation";
import ReactCurvedText from 'react-curved-text';


export default function Home() {
  return (
    <main className={styles.main}>
      <Navigation />
      <div className={styles.content}>
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
              textProps={{ "style": { "fontSize": 26 } }}
              textPathProps={{ "fill": "#73808e" }}
              tspanProps={null}
              ellipseProps={null}
              svgProps={null} />
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
                textProps={{ "style": { "fontSize": 26 } }}
                textPathProps={{ "fill": "#73808e" }}
                tspanProps={null}
                ellipseProps={null}
                svgProps={null} />
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
                textProps={{ "style": { "fontSize": 16 } }}
                textPathProps={{ "fill": "#73808e" }}
                tspanProps={null}
                ellipseProps={null}
                svgProps={null} />
            </div>

          </div>
          <div className={styles.firstRight}>
            <div className={styles.picture}>
            </div>
          </div>
        </div>
        <div className={styles.second}>
          <div className={styles.cards}>
            <div className={styles.card}>
              <img className={styles.icon1} src="/icon1.svg" alt="not found" />
              <p className={styles.cardHead}>Stimulant</p>
              <p className={styles.cardtext2}>(각성제)</p>
              <p className={styles.cardtext3}>
                “중추신경을 자극하여 불안감을 없애고 집중력을 향상시킵니다. <br />
                과다 복용 시, 초조, 불안, 의심, 망상, 환청 등이 나타나고 <br />
                혼수상태에 이를 수도 있습니다.”
              </p>
            </div>
            <div className={styles.card}>
              <img className={styles.icon} src="/icon2.svg" alt="not found" />
              <p className={styles.cardHead}>Marijuana</p>
              <p className={styles.cardtext2}>(대마초)</p>
              <p className={styles.cardtext3}>
                “항경련, 항염증에 의료용 목적으로 사용되지만, 중추신경을 <br />
                자극하여 정신 장애, 신경 장애, 심혈관 및 호흡 능력 악화 <br />
                등의 부작용을 일으킵니다.”
              </p>
            </div>
            <div className={styles.card}>
              <img className={styles.icon} src="/icon3.svg" alt="not found" />
              <p className={styles.cardHead}>Opioid</p>
              <p className={styles.cardtext2}>(아편)</p>
              <p className={styles.cardtext3}>
                “진정, 통감 감소 등의 효과를 불러일으키지만, 단기적으로 <br />
                오한, 구토 등의 부작용 장기복용시 말초신경장애, 척수염 등 <br />
                신경계의 손상을 일으킵니다.”
              </p>
            </div>
            <div className={styles.card}>
              <img className={styles.icon} src="/icon4.svg" alt="not found" />
              <p className={styles.cardHead}>Benzodiazepine</p>
              <p className={styles.cardtext2}>(신경안정제)</p>
              <p className={styles.cardtext3}>
                행동의 억제를 해제 시키며 알코올과 비슷하게 평안과 <br />
                이완의 효과를 주지만 금단증상으로는 불안, <br />
                불면, 복통, 간질 섬망 등이 나타납니다.
              </p>
            </div>
          </div>
          <div className={styles.textbox}>
            <p className={styles.font1}>"약물 사용은 한번도 너무 많고 천 번도 너무 부족한 것임을 우리는 압니다."</p>
            <p className={styles.font2}>From DARC</p>
          </div>

        </div>
      </div>
      <div className={styles.content2}>

        <h1>페이지 2</h1>

      </div>
      <div className={styles.content3}>
        <h1>페이지 3</h1>
      </div>


    </main>
  );
}