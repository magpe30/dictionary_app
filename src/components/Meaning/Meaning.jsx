import React, { useEffect, useState } from 'react';
import WordClass from './WordClass/WordClass';
import Loader from '../Loader/Loader';
import { usePlayAudio } from '../../hooks';

import styles from './meaning.module.scss';

const Meaning = ({ meanings, loading }) => {
    const chosenWord = meanings?.[0].word;
    const phonetic = meanings?.[0].phonetic;
    const urlPath = meanings?.[0].phonetics

    const getCorrectPath = urlPath && urlPath.map((path) => path?.audio);

    const soundUrl = getCorrectPath && getCorrectPath.filter((sound) => sound !== '');
  
    const [playing, onPlay] = usePlayAudio(soundUrl?.[0]);

    const getSoundIcon = playing ? 
        <img src="../../public/megaphone.svg"></img> : 
        <img src="../../public/play.svg"></img>;


    return (
        <>  
        {chosenWord ? 
            <div>
                <div className={styles.meaningWrapper}>
                   <div className={styles.wordSection}>
                      <h1>{chosenWord}</h1>
                      <p>{phonetic}</p>
                    </div>
                    <div className={styles.buttonWrapper}>
                        {
                            soundUrl?.[0]&& 
                            <button onClick={onPlay}>
                                {getSoundIcon}
                            </button>
                        }
                    </div>
                </div>
                <WordClass meaning = {meanings?.[0].meanings} source={meanings?.[0]?.sourceUrls}/>
            </div> : 
            <div className={styles.searchContainer}>
                <img src='../../public/dictionary.svg' className={styles.vector}/>
                <p>{loading ? "Loading..." : "Search for a word..."}</p>
                {loading &&
                  <Loader />
                }    
            </div>  
        }
        </>
    )
}

export default Meaning;