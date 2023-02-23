import React from 'react';

import styles from './loader.module.scss';

const Loader = () => {

    return (
        <>  
            <div className={styles.loader}>
                <div className={styles.firstBook}></div>
                <div className={styles.secondBook}></div>
                <div className={styles.thirdBook}></div>
            </div>
        </>
    )
}

export default Loader;
