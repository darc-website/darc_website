import bcrypt from 'bcryptjs';
import User from '../../../../models/userModel'; // Adjust the path as needed
import { connectDB } from '../../../../utils/connect'; // Adjust the path as needed
import { NextResponse } from 'next/server';

export async function POST(req) {
    const { oldPassword, newPassword } = await req.json();

    if (!oldPassword || !newPassword) {
        return NextResponse.json({ error: 'Both old and new passwords are required.' }, { status: 400 });
    }

    try {
        // Connect to the database
        await connectDB();

        // Fetch the user from the database (assuming there's only one admin user)
        const user = await User.findOne({});

        if (!user) {
            return NextResponse.json({ error: 'User not found' }, { status: 404 });
        }

        // Check if the old password matches the current password
        const isMatch = await bcrypt.compare(oldPassword, user.password);
        if (!isMatch) {
            return NextResponse.json({ error: 'Old password is incorrect' }, { status: 401 });
        }


        // Update the user's password in the database
        user.password = newPassword;
        await user.save();

        return NextResponse.json({ message: 'Password changed successfully' }, { status: 200 });
    } catch (error) {
        console.error('Error changing password:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}