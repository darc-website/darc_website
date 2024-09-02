import React from 'react';
import styles from './marquee.module.css'; // Import the CSS module

const Marquee = () => {
    const logos = [
        '참사랑병원',
        '은평병원',
        '마퇴부',
        '인천광역시',
        '국세청',
        '보건복지부',
        // Add more items as needed
    ];

    return (
        <div className={styles.slider}>
            <div className={styles['slide-track']}>
                {logos.map((logo, index) => (
                    <div className={styles.slide} key={index}>
                        {logo}
                    </div>
                ))}
                {/* Duplicate the items to create the infinite effect */}
                {logos.map((logo, index) => (
                    <div className={styles.slide} key={index + logos.length}>
                        {logo}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Marquee;