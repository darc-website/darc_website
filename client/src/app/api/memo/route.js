import Memo from '../../../../models/memoModel'; // Adjust the path as necessary
import { connectDB } from '../../../../utils/connect'; // Adjust the path as necessary
import { NextResponse } from 'next/server';

export async function GET() {
    try {
        // Connect to the database
        await connectDB();

        // Fetch the existing memo, assuming there's only one memo
        const memo = await Memo.findOne();
        return NextResponse.json({ memo }, { status: 200 });
    } catch (error) {
        console.error('Error fetching memo:', error);
        return NextResponse.json({ error: 'Failed to fetch memo' }, { status: 500 });
    }
}

export async function POST(req) {
    const { content } = await req.json();

    if (!content) {
        return NextResponse.json({ error: 'Content is required' }, { status: 400 });
    }

    try {
        // Connect to the database
        await connectDB();

        // Find the existing memo or create a new one if it doesn't exist
        let memo = await Memo.findOne();
        if (memo) {
            memo.content = content; // Update existing memo
        } else {
            memo = new Memo({ content }); // Create new memo
        }

        await memo.save();

        return NextResponse.json({ message: 'Memo saved successfully' }, { status: 200 });
    } catch (error) {
        console.error('Error saving memo:', error);
        return NextResponse.json({ error: 'Failed to save memo' }, { status: 500 });
    }
}