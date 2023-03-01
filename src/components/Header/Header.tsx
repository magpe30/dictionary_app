import React, { useState } from 'react';

import Dropdown from '../Dropdown/Dropdown';
import styles from './header.module.scss';
import { useTheme } from '../../contexts/Theme/Theme.context';

type HeaderProps = {
    word: string,
    setWord: (e:any) => void,
    findWord: (e:any) => void,
}

const Header = (props: HeaderProps) => {
    const { themeType, setCurrentTheme } = useTheme();
    const { word, setWord, findWord} = props;

    const bookIconPath = themeType == 'light' ? 'book' : 'bookWhite';
    const moonIconPath = themeType == 'light' ? 'moon' : 'moonPurple';
   
    const changeThemes = (eventInput: boolean) => {
        if(eventInput) {
            setCurrentTheme('dark');
        } else {
            setCurrentTheme('light');
        }
    }

    return (
        <>
            <div className={styles.headerContainer}>
                <div>
                    <img src={`./${bookIconPath}.svg`} className={styles.logo}/>
                </div>
                <div className={styles.toggles} >
                    <Dropdown />
                    <span className={styles.divider}></span>
                    <div className={styles.toggle}>
                    <input 
                        type="checkbox" 
                        id="switch" 
                        onChange={(e) => changeThemes(e.target.checked)}
                    />
                    <label htmlFor="switch">
                            toggle
                    </label>
                    <img src={`./${moonIconPath}.svg`} className={styles.theme}/>
                    </div>
                </div>
            </div>
            
            <form>
                <div className={styles.searchInput}>
                    <input 
                        onChange={(e) => setWord(e.target.value)}
                        value={word}
                        type="text" 
                        name="word-search" 
                        id="word-search" 
                        placeholder="Search word"
                        onKeyPress={e => {
                            if (e.key === 'Enter') {
                                findWord(e);
                            }
                        }}
                    />
                    <button className={styles.buttonContainer} onClick={(e) => findWord(e)}>
                        <img src="./search.svg" className={styles.searchIcon}/>
                    </button>
                </div>
            </form>
            
        </>
    )
}

export default Header;