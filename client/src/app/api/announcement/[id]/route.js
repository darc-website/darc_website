import { connectDB } from "../../../../../utils/connect";
import Announcement from "../../../../../models/announcementModel";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  try {
    const { id } = params;
    await connectDB();

    const announcement = await Announcement.findById(id);

    if (!announcement) {
      return NextResponse.json(
        { error: "공지사항이 없습니다." },
        { status: 404 }
      );
    }

    return NextResponse.json(announcement, { status: 200 });
  } catch (error) {
    console.error("단일 공지사항 가져오기 에러:", error);
    return NextResponse.json(
      { error: "공지사항을 불러오는데 실패했습니다." },
      { status: 500 }
    );
  }
}
