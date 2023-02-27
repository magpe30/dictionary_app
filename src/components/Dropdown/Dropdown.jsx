import React, { useState } from 'react';

import styles from './dropdown.module.scss';
import { useTheme } from '../../contexts/Theme/Theme.context';

const Dropdown = () => {
    const { setCurrentFont } = useTheme();
    const [onOpen, setOnOpen] = useState(false);
    const fonts = ['Nanum', 'Gloock', 'Noto'];

    const arrowIcon = onOpen ? 'arrowOpen' : 'arrowDown';

    const onFontChanges = (font) => {
        setCurrentFont(font.toLowerCase());
        setOnOpen(false);
    };

    return (
        <div className={styles.accordion}>
            Font
            <button onClick={() => setOnOpen(!onOpen)}><img src={`./${arrowIcon}.svg`}/></button>
            {
                onOpen ? ( <ul className={styles.fontList}>
                {
                fonts.map((font, index) => 
                    <li key={`font-${index}`}><button onClick={
                        () => onFontChanges(font)
                    }>{font}</button></li>
                )
                }
                 </ul> ) : null
            }
        </div>
    )
};

export default Dropdown;
