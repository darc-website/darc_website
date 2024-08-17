import Navigation from "../../../components/navigation";
import styles from "./about.module.css"
import Link from "next/link";

export default function About() {
    return (
        <div className={styles['main-container']}>
            <main className={styles.main}>
                <Navigation />
                <div className={styles.content}>
                    <div className={styles.header}>
                        <div className={styles.title}>
                            <h1>DARC?</h1>
                        </div>
                        <div className={styles.link}>
                            <Link href="/">Home</Link>
                            <p>&gt;</p>
                            <Link href="/about"><h4>다르크란?</h4></Link>
                        </div>
                    </div>

                    <div className={styles.textbox}>
                        <h2>DARC = Drug Addiction Rehabilitation Center (약물 중독 재활 센터)</h2>
                        <p>
                            ‘다르크’는 약물 중독으로부터 회복하려는 동료들과 함께 매일 그룹 치료를 실천하는 공동체입니다. 다르크의 목적은 회복을 열망하는 동료를 서로 도와주는 것 뿐이며, ‘다르크’ 안에서는 그 어떤 것도 회복의 가치보다 우선될 수 없습니다. 따라서 모든 의사결정과 운영은 ‘회복’의 가치를 최우선으로 합니다. <br />
                            <br />
                            ‘다르크’의 치료 효과에 대해 의문이 들 수 있습니다. 하지만 모든 의심을 내려놓고, 철저히 따라와 준다면 지독한 약물 중독자일지라도 ‘회복할 수 있다‘라는 희망의 메시지를 받게 될 것입니다. <br />
                            <br />
                            ‘다르크’에서 회복하고 있는 동료들이 효과를 증명하고 있으며, 앞으로 본인 스스로 경험하게 될 것입니다.
                            다르크 프로그램의 진짜 효과는 건강한 사회 구성원으로서 다시 첫 발을 내디딜 때 체감하게 될 것이고, 앞으로 삶에서 만나게 될 수 많은 어려움을 극복하는데도 훌륭한 길 안내가 되어 줄 것입니다. <br />
                        </p>
                        <img src="/watermark.svg" alt="watermark" />
                    </div>
                    <div className={styles.textboxin}></div>
                </div>
            </main>
        </div>
    );
}
