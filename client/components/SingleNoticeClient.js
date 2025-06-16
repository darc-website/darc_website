import Link from "next/link";
import styles from "./SingleNotice.module.css";

export default function SingleNoticeClient({ notice }) {
  return (
    <li className={styles.singleNoticeContainer}>
      <span className={styles.singleCategory}>{notice.category}</span>
      <Link
        href={`/contact/announcement/${notice._id}`}
        className={styles.singleTitle}
      >
        {notice.title}
      </Link>
      <span className={styles.singleDate}>
        {new Date(notice.date).toLocaleDateString()}
      </span>
    </li>
  );
}
