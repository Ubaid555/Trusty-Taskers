import React from 'react';
import styles from './ServiceConfirmModal.module.css';

const ServiceConfirmModal = ({ show, onConfirm, onCancel, message, confirmText, cancelText }) => {
    if (!show) {
        return null;
    }

    return (
        <div className={styles.modalBackdrop}>
            <div className={styles.modal}>
                <h2>Confirmation</h2>
                <p>{message}</p>
                <button onClick={onConfirm} className={styles.confirmBtn}>{confirmText}</button>
                <button onClick={onCancel} className={styles.cancelBtn}>{cancelText}</button>
            </div>
        </div>
    );
};

export default ServiceConfirmModal;