import { NextResponse } from 'next/server';
import { EmailTemplate } from '../../../../components/email-template';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
    try {
        const formData = await request.json();

        const {
            name,
            vms,
            phoneNumber,
            address,
            email,
            volunteerContent,
            detailedContent,
            startdate,
            enddate,
            starttime,
            endtime
        } = formData;

        const emailContent = EmailTemplate({
            name,
            vms,
            email,
            phoneNumber,
            address,
            volunteerContent,
            detailedContent,
            startdate,
            enddate,
            starttime,
            endtime,
        });

        const subject = `${name}님의 자원봉사가 도착했습니다!`;

        const { data, error } = await resend.emails.send({
            from: 'Acme <onboarding@resend.dev>',
            to: ['koreadarc01@gmail.com'], // Replace with your target email
            subject: subject, // Use the dynamically generated subject
            react: emailContent,
        });

        if (error) {
            return NextResponse.json({ error }, { status: 500 });
        }

        return NextResponse.json(data, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}