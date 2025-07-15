import { connectDB } from "../../../../../utils/connect";
import Resources from "../../../../../models/resourcesModel";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
    try {
        const { id } = params;
        await connectDB();

        const resources = await Resources.findById(id);

        if (!resources) {
            return NextResponse.json(
                { error: "자료실이 없습니다." },
                { status: 404 }
            );
        }

        return NextResponse.json(resources, { status: 200 });
    } catch (error) {
        console.error("단일 자료실 가져오기 에러:", error);
        return NextResponse.json(
            { error: "자료실을 불러오는데 실패했습니다." },
            { status: 500 }
        );
    }
}