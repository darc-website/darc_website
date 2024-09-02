import bcrypt from 'bcryptjs';
import User from '../../../../models/userModel'; // Adjust the path to your User model
import { connectDB } from '../../../../utils/connect'; // Adjust the path to your DB connection file
import { NextResponse } from 'next/server'; // Import NextResponse for App Router

export async function POST(req) {
    const { password } = await req.json(); // Parse JSON from the request body

    if (!password) {
        return NextResponse.json({ error: '비밀번호를 입력해주세요.' }, { status: 400 });
    }

    try {
        // Connect to the database
        await connectDB();

        // Fetch the user (assuming there's only one admin user)
        let user = await User.findOne({});

        if (!user) {
            // No user exists, create one with a default password (plain, not hashed)
            user = new User({
                password: 'defaultpassword', // Just set the plain password
            });
            await user.save(); // Pre-save hook will hash the password
            console.log('Default admin user created');
        }

        // Compare the provided password with the stored hashed password
        const isMatch = await bcrypt.compare(password, user.password);
        console.log('Does the password match?', isMatch); // Log if password matches or not

        if (isMatch) {
            // If passwords match, redirect to the dashboard
            return NextResponse.json({ redirectUrl: '/admin/dashboard' }, { status: 200 });
        } else {
            // If passwords do not match
            console.log('Password mismatch. Hashes do not match.');
            return NextResponse.json({ error: '비밀번호가 틀렸습니다.' }, { status: 401 });
        }
    } catch (error) {
        console.error('Login Error:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}