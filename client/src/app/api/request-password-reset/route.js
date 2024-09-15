import jwt from 'jsonwebtoken';
import User from '../../../../models/userModel'; // Adjust the path to your User model
import { connectDB } from '../../../../utils/connect'; // Adjust the path to your DB connection file
import { NextResponse } from 'next/server'; // For Next.js App Router
import { Resend } from 'resend'; // Import Resend

const resend = new Resend(process.env.RESEND_API_KEY); // Initialize Resend with your API key

export async function POST() {
    try {
        // Connect to the database
        await connectDB();

        // Fetch the user with the stored email
        const user = await User.findOne().sort({ createdAt: 1 }); // Sort by creation date to get the first user

        if (!user) {
            return NextResponse.json({ error: '사용자를 찾을 수 없습니다.' }, { status: 404 });
        }

        // Generate a password reset token (JWT)
        const resetToken = jwt.sign(
            { userId: user._id }, // Payload
            process.env.JWT_SECRET, // Secret key
            { expiresIn: '15m' } // Token expires in 15 minutes
        );

        // Calculate expiration time
        const expirationTime = new Date(Date.now() + 15 * 60000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

        // Create the reset URL
        const resetUrl = `https://www.darc-incheon.com/password-reset/${resetToken}`;

        // Send the reset URL via Resend
        const { data, error } = await resend.emails.send({
            from: 'Acme <onboarding@resend.dev>', // Your Resend "from" email
            to: [user.email], // Send to the user's email
            subject: '다르크 관리자페이지 비밀번호 재설정',
            react: (
                <div style={{ textAlign: 'center', padding: '20px', color: '#252525' }}>
                    <div>
                        <img src="https://i.imgur.com/7gFZudZ.png" alt="logo" style={{ width: '150px', marginBottom: '20px' }} />
                        {/* Apply margin-top: -45px */}
                        <h1 style={{ fontSize: '20px', marginTop: '0px' }}>관리자 페이지</h1>
                    </div>
                    <div style={{ border: '1px solid #ccc', padding: '20px', maxWidth: '600px', margin: '0 auto', textAlign: 'left', fontSize: '14px' }}>
                        <p>안녕하세요,</p>
                        <p>비밀번호를 재설정하려면 아래 링크를 클릭하세요. 링크는 <strong>15분</strong> 내로 만료됩니다.</p>
                        <p><strong>만료 시간:</strong> {expirationTime}</p>
                        <a href={resetUrl}>비밀번호 재설정</a>
                        <p>감사합니다.</p>
                    </div>
                </div>
            ),
        });

        if (error) {
            return NextResponse.json({ error: '이메일 전송 중 오류가 발생했습니다.' }, { status: 500 });
        }

        return NextResponse.json({ message: 'Password reset email sent.' }, { status: 200 });
    } catch (error) {
        console.error('Error during password reset request:', error);
        return NextResponse.json({ error: '서버 오류가 발생했습니다.' }, { status: 500 });
    }
}