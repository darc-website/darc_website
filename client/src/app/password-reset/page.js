'use client';
import React, { useState } from 'react';

export default function PasswordReset() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handlePasswordReset = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('/api/request-password-reset', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            const data = await response.json();

            if (response.ok) {
                setMessage('비밀번호 재설정 링크가 이메일로 전송되었습니다.');
            } else {
                setMessage('오류가 발생했습니다. 다시 시도해주세요.');
            }
        } catch (error) {
            setMessage('서버 오류가 발생했습니다.');
        }
    };

    return (
        <div>
            <h1>비밀번호 재설정</h1>
            <form onSubmit={handlePasswordReset}>
                <label htmlFor="email">이메일 주소</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <button type="submit">비밀번호 재설정 링크 보내기</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
}