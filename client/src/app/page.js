import styles from "./page.module.css";
import Navigation from "../../components/navigation";

export default function Home() {
  return (
    <main className={styles.main}>
      <Navigation />
      <div style={{ marginTop: '400px', textAlign: 'center' }}>
        <h1>This is Home page</h1>
      </div>
    </main>
  );
}
