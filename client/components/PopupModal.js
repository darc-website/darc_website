import { useEffect } from 'react';
import styles from './PopupModal.module.css';

const PopupModal = ({ showModal, onClose, url }) => {
    // Close the modal when the escape key is pressed
    useEffect(() => {
        const handleEscape = (event) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };
        window.addEventListener('keydown', handleEscape);
        return () => window.removeEventListener('keydown', handleEscape);
    }, [onClose]);

    if (!showModal) return null; // Don't render the modal if it's not visible

    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modalContent}>
                <button className={styles.closeButton} onClick={onClose}>
                    Close
                </button>
                <iframe src={url} className={styles.iframeContent} title="Donation Form"></iframe>
            </div>
        </div>
    );
};

export default PopupModal;