import Announcement from "../../../../models/announcementModel"; // 모델 경로
import { connectDB } from "../../../../utils/connect"; // 연결 함수 경로
import { NextResponse } from "next/server";

// GET 요청: 모든 공지사항 가져오기
export async function GET() {
  try {
    // 데이터베이스 연결
    await connectDB();

    // 최신 순으로 정렬된 모든 공지사항 가져오기
    const announcements = await Announcement.find().sort({ createdAt: -1 });

    return NextResponse.json(announcements, { status: 200 });
  } catch (error) {
    console.error("공지사항 가져오기 에러:", error);
    return NextResponse.json(
      { error: "공지사항을 가져오는데 실패했습니다." },
      { status: 500 }
    );
  }
}

// POST 요청: 공지사항 생성 또는 업데이트
export async function POST(req) {
  try {
    const { title, date, category, content, temp } = await req.json();

    // 필수 필드 검증
    if (!title || !date || !category || !content) {
      return NextResponse.json(
        { error: "모든 필드를 입력해야 합니다." },
        { status: 400 }
      );
    }

    // 데이터베이스 연결
    await connectDB();

    // 새 공지사항 생성
    const newAnnouncement = new Announcement({
      title,
      date,
      category,
      content,
      temp: temp || false, // 기본값은 false
    });

    // 공지사항 저장
    await newAnnouncement.save();

    return NextResponse.json(
      { message: "공지사항이 성공적으로 저장되었습니다." },
      { status: 201 }
    );
  } catch (error) {
    console.error("공지사항 저장 에러:", error);
    return NextResponse.json(
      { error: "공지사항을 저장하는데 실패했습니다." },
      { status: 500 }
    );
  }
}

// DELETE 요청: ID를 기반으로 공지사항 삭제
export async function DELETE(req) {
  try {
    const { id } = await req.json();

    if (!id) {
      return NextResponse.json(
        { error: "ID는 필수 항목입니다." },
        { status: 400 }
      );
    }

    // 데이터베이스 연결
    await connectDB();

    // ID로 공지사항 찾고 삭제
    await Announcement.findByIdAndDelete(id);

    return NextResponse.json(
      { message: "공지사항이 성공적으로 삭제되었습니다." },
      { status: 200 }
    );
  } catch (error) {
    console.error("공지사항 삭제 에러:", error);
    return NextResponse.json(
      { error: "공지사항을 삭제하는데 실패했습니다." },
      { status: 500 }
    );
  }
}

// PUT 요청: ID를 기반으로 공지사항 업데이트
export async function PUT(req) {
  try {
    const { id, title, date, category, content, temp } = await req.json();

    // 필수 필드 검증
    if (!id || !title || !date || !category || !content) {
      return NextResponse.json(
        { error: "모든 필드를 입력해야 합니다." },
        { status: 400 }
      );
    }

    // 데이터베이스 연결
    await connectDB();

    // ID로 공지사항 찾기
    const announcement = await Announcement.findById(id);

    // 공지사항이 없으면 에러 반환
    if (!announcement) {
      return NextResponse.json(
        { error: "해당 ID에 해당하는 공지사항을 찾을 수 없습니다." },
        { status: 404 }
      );
    }

    // 공지사항 업데이트
    announcement.title = title;
    announcement.date = date;
    announcement.category = category;
    announcement.content = content;
    announcement.temp = temp || false; // 기본값은 false

    // 공지사항 저장
    await announcement.save();

    return NextResponse.json(
      { message: "공지사항이 성공적으로 업데이트되었습니다.", announcement },
      { status: 200 }
    );
  } catch (error) {
    console.error("공지사항 업데이트 에러:", error);
    return NextResponse.json(
      { error: "공지사항을 업데이트하는데 실패했습니다." },
      { status: 500 }
    );
  }
}
