'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './PasswordReset.module.css'; // Import CSS module

export default function PasswordReset({ params }) {
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');
    const router = useRouter();
    const { token } = params;

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (newPassword !== confirmPassword) {
            setError('비밀번호가 일치하지 않습니다. 다시 확인해주세요.');
            return;
        }

        try {
            const response = await fetch('/api/reset-password', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ token, newPassword }),
            });

            const data = await response.json();
            if (response.ok) {
                setMessage('비밀번호가 성공적으로 변경되었습니다.');
                setError('');
                router.push('/admin');
            } else {
                setError(data.error || '비밀번호 재설정 중 오류가 발생했습니다.');
            }
        } catch (err) {
            setError('서버 오류가 발생했습니다. 다시 시도하세요.');
        }
    };

    return (
        <div className={styles.container}>
            <img src="/logo_new.png" alt="" />
            <h1 className={styles.heading}>비밀번호 재설정</h1>
            {error && <p className={styles.errorMessage}>{error}</p>}
            {message && <p className={styles.successMessage}>{message}</p>}
            <form onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                    <label className={styles.label}>
                        새 비밀번호:
                        <input
                            type="password"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            className={styles.input}
                            required
                        />
                    </label>
                </div>
                <div className={styles.formGroup}>
                    <label className={styles.label}>
                        새 비밀번호 확인:
                        <input
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className={styles.input}
                            required
                        />
                    </label>
                </div>
                <button type="submit" className={styles.button}>비밀번호 재설정</button>
            </form>
        </div>
    );
}