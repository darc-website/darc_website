'use client'

import Navigation from "../../../../../components/navigation";
import styles from "./application.module.css"
import Link from "next/link";
import ScrollToTop from "../../../../../components/ScrollToTop";


export default function Program1() {
    async function handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "89711af8-af29-466c-9d1f-2b0e442e4e31");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        });
        const result = await response.json();
        if (result.success) {
            console.log(result);
        }
    }

    return (
        <div className={styles['main-container']}>
            <main className={styles.main}>
                <ScrollToTop />
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
                        <form onSubmit={handleSubmit}>
                            <input type="text" name="name" />
                            <input type="email" name="email" />
                            <textarea name="message"></textarea>
                            <button type="submit">Submit Form</button>
                        </form>
                    </div>
                </div>
            </main>
        </div>
    );
}

