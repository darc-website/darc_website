import React from 'react';

export const EmailTemplate = ({ name, vms, email, phoneNumber, address, volunteerContent, detailedContent, startdate, enddate, starttime, endtime }) => (
    <div style={{ textAlign: 'center', padding: '20px', color: '#252525' }}>
        <div>
            <img src="https://i.imgur.com/7gFZudZ.png" alt="logo" style={{ width: '150px', marginBottom: '20px' }} />
            {/* Apply margin-top: -45px */}
            <h1 style={{ fontSize: '20px', marginTop: '0px' }}>관리자 페이지</h1>
        </div>
        <div style={{ border: '1px solid #ccc', padding: '20px', maxWidth: '600px', margin: '0 auto', textAlign: 'left', fontSize: '16px' }}>
            <p><strong>성명:</strong> {name}</p>
            <p><strong>VMS ID:</strong> {vms}</p>
            <p><strong>휴대폰번호:</strong> {phoneNumber}</p>
            <p><strong>주소:</strong> {address}</p>
            <p><strong>이메일:</strong> {email}</p>
            <p><strong>봉사기간:</strong> {startdate} ~ {enddate}</p>
            <p><strong>활동가능시간:</strong> {starttime} ~ {endtime}</p>
            <p><strong>희망 봉사 내용:</strong> {volunteerContent.join(', ')}</p>
            <p><strong>세부 내용:</strong> {detailedContent}</p>
        </div>
    </div>
);