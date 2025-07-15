// src/app/donations/volunteer/application/layout.js

export const metadata = {
    title: "자원봉사 신청서 - 다르크 협회",
    description: "자원봉사 참여를 통해 중독자 회복을 지원해주세요.",
};

export const viewport = {
    width: "device-width",
    initialScale: 1,
};

export default function ApplicationLayout({ children }) {
    return <>{children}</>;
}