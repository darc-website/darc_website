import Link from "next/link";
import styles from "./SingleNoticeClient.module.css";

export default function SingleResourceClient({ notice, searchTerm }) {
  const highlightText = (text, keyword) => {
    if (!keyword) return text;
    const regex = new RegExp(`(${keyword})`, "gi");
    const parts = text.split(regex);
    return parts.map((part, i) =>
      part.toLowerCase() === keyword.toLowerCase() ? (
        <mark key={i} style={{ backgroundColor: "#fff59d" }}>{part}</mark>
      ) : (
        part
      )
    );
  };

  const stripHtml = (html) => {
    return html
      // 1. src, href, alt, title, content 등 속성값 제거
      .replace(/<(img|script|style|meta|link)[^>]*?>/gi, "") // 전체 태그 제거
      .replace(/<[^>]+>/g, "") // 나머지 태그 제거
      .replace(/(src|href|alt|title|content)=["'][^"']*["']/gi, "") // 속성 제거
      .replace(/&nbsp;/gi, " ")
      .replace(/\s+/g, " ") // 공백 정리
      .trim();
  };

  const getSurroundingContext = (html, keyword, before = 20, after = 30) => {
    const plainText = stripHtml(html);
    if (!keyword) return plainText.slice(0, before + after) + "...";

    const lowerText = plainText.toLowerCase();
    const lowerKeyword = keyword.toLowerCase();
    const index = lowerText.indexOf(lowerKeyword);

    if (index === -1) return plainText.slice(0, before + after) + "...";

    const start = Math.max(0, index - before);
    const end = Math.min(plainText.length, index + keyword.length + after);
    const snippet =
      (start > 0 ? "..." : "") +
      plainText.slice(start, end) +
      (end < plainText.length ? "..." : "");

    return highlightText(snippet, keyword);
  };

  return (
    <li className={styles.singleNoticeContainer}>
      <Link
        href={`/contact/media/${notice._id}`}
        legacyBehavior passHref
      >
        <a className={styles.fullLink}>
          <div className={styles.linkContent}>
            <span className={styles.singleCategory}>{notice.category}</span>
            <span className={styles.singleTitle}>
              {highlightText(notice.title, searchTerm)}
            </span>
            <span className={styles.singleDate}>
              {notice.date}
            </span>
            {searchTerm && (
              <p className={styles.highlightedContent}>
                {getSurroundingContext(notice.content, searchTerm)}
              </p>
            )}
          </div>
        </a>
      </Link>
    </li >
  );
}
