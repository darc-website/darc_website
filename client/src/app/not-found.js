export const viewport = {
    width: "device-width",
    initialScale: 1,
};

import Link from "next/link";

export default function NotFoundPage() {
    return (
        <div
            style={{
                padding: "4rem 2rem",
                textAlign: "center",
                fontFamily: "sans-serif",
            }}
        >
            {/* 로고 이미지 */}
            <img
                src="logo2.png" // 👉 이미지 경로는 실제 프로젝트에 맞게 수정
                alt="DARC 로고"
                style={{ width: "200px", marginBottom: "1rem" }}
            />

            {/* 404 메시지 */}
            <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>404</h1>
            <p style={{ fontSize: "1.25rem", marginBottom: "2rem" }}>
                페이지를 찾을 수 없습니다.
            </p>

            {/* 홈으로 돌아가기 버튼 */}
            <Link href="/">
                <button
                    style={{
                        padding: "0.75rem 1.5rem",
                        fontSize: "1rem",
                        backgroundColor: "#333",
                        color: "#fff",
                        border: "none",
                        borderRadius: "8px",
                        cursor: "pointer",
                    }}
                >
                    홈으로 돌아가기
                </button>
            </Link>
        </div>
    );
}