import { Inter } from "next/font/google";
import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const inter = Inter({ subsets: ["latin"] });

// Array of keywords
const keywordsArray = [
  "다르크 협회",
  "인천 다르크",
  "다르크 이사장",
  "약물중독",
  "마약중독",
  "마약중독 치료",
  "약물중독 치료",
  "약물중독 치료자",
  "마약중독 치료자",
  "마약"
];

// Convert the array into a comma-separated string
const keywordsString = keywordsArray.join(", ");

export const metadata = {
  title: "인천 다르크",
  description: "인천 다르크에서는 아무리 지독한 약물 중독자일지라도 회복할 수 있다라는 희망의 메세지를 받게됩니다. #다르크 #인천다르크 #다르크 협회",
  keywords: keywordsString,
  viewport: "width=device-width, initial-scale=1, user-scalable=yes",
  naverSiteVerification: "0fa832e430a4813bbb6a5ea447baacd5a39d561b",
  openGraph: {
    title: "인천 다르크",
    type: "website",
    url: "https://www.darc-incheon.com/",  // Replace with your actual URL
    siteName: "인천 다르크",
    description: "인천 다르크에서는 아무리 지독한 약물 중독자일지라도 회복할 수 있다라는 희망의 메세지를 받게됩니다.",
    images: [
      {
        url: "https://i.imgur.com/7gFZudZ.png",  // Replace with the URL of your Open Graph image
        width: 800,
        height: 600,
        alt: "인천 다르크 로고",
      }
    ],
    locale: "ko_KR",
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body className={inter.className}>{children}</body>
    </html>
  );
}