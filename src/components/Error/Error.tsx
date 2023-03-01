import React from 'react';
import styles from './error.module.scss';

const Error = () => {
    
    return (
        <div className={styles.container}>
            <div className={styles.error}>
                Error
            </div>
            <h1>Something happened...Please refresh</h1>
        </div>
    )
}

export default Error;