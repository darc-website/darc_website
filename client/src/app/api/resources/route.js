import { connect } from "mongoose";
import Resources from "../../../../models/resourcesModel"; // model address
import { connectDB } from "../../../../utils/connect";
import { NextResponse } from "next/server";

// GET request: Bring all the Resources
export async function GET() {
    try {
        await connectDB();

        const resources = await Resources.find().sort({ date: -1 });

        return NextResponse.json(resources, { status: 200 });
    } catch (error) {
        console.error("자료실 가져오기 에러:", error);
        return NextResponse.json(
            { error: "자료실을 가져오는데 실패했습니다." },
            { status: 500 }
        );
    }
}

// POST request: make new Resources
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

        await connectDB();

        const newResources = new Resources({
            title,
            date,
            category,
            content,
            temp: temp || false,
        });

        await newResources.save();

        return NextResponse.json(
            { message: "자료실이 성공적으로 저장되었습니다." },
            { status: 201 }
        );
    } catch (error) {
        console.error("자료실 저장 에러:", error);
        return NextResponse.json(
            { error: "자료실을 저장하는데 실패했습니다." },
            { status: 500 }
        );
    }
}

// DELETE request: delete the resources

export async function DELETE(req) {
    try {
        const { id } = await req.json();

        if (!id) {
            return NextResponse.json(
                { error: "ID는 필수 항목입니다." },
                { status: 400 }
            );
        }

        await connectDB();

        await Resources.findByIdAndDelete(id);

        return NextResponse.json(
            { message: "자료실이 성공적으로 삭제되었습니다." },
            { status: 200 }
        );
    } catch (error) {
        console.error("자료실 삭제 에러:", error);
        return NextResponse.json(
            { error: "자료실을 삭제하는데 실패했습니다." },
            { status: 500 }
        );
    }
}

// PUT request: update Requests based on ID
export async function PUT(req) {
    try {
        const { id, title, date, category, content, temp } = await req.json();

        if (!id || !title || !date || !category || !content) {
            return NextResponse.json(
                { error: "모든 필드를 입력해야 합니다." },
                { status: 400 }
            );
        }

        await connectDB();

        const resources = await Resources.findById(id);

        if (!resources) {
            return NextResponse.json(
                { error: "해당 ID에 해당하는 자료실을 찾을 수 없습니다." },
                { status: 404 }
            );
        }

        resources.title = title;
        resources.date = date;
        resources.category = category;
        resources.content = content;
        resources.temp = temp || false;

        await resources.save();

        return NextResponse.json(
            { messge: "자료실이 성공적으로 업데이트되었습니다.", resources },
            { status: 200 }
        );
    } catch (error) {
        console.error("자료실 업데이트 에러:", error);
        return NextResponse.json(
            { error: "자료실을 업데이트하는데 실패했습니다." },
            { status: 500 }
        );
    }
}