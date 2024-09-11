import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import User from '../../../../models/userModel'; // Adjust the path as needed
import { connectDB } from '../../../../utils/connect'; // Adjust the path as needed
import { NextResponse } from 'next/server';

export async function POST(req) {
    const { token, newPassword } = await req.json();

    if (!token || !newPassword) {
        return NextResponse.json({ error: 'Token and new password are required.' }, { status: 400 });
    }

    try {
        // Verify the JWT token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const userId = decoded.userId;

        // Connect to the database
        await connectDB();

        // Fetch the user by their ID
        const user = await User.findById(userId);
        if (!user) {
            return NextResponse.json({ error: 'User not found' }, { status: 404 });
        }

        user.password = newPassword;
        await user.save();

        return NextResponse.json({ message: 'Password reset successfully' }, { status: 200 });
    } catch (error) {
        console.error('Error during password reset:', error);
        return NextResponse.json({ error: 'Invalid or expired token' }, { status: 401 });
    }
}