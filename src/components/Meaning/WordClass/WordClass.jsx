import React from 'react';

import styles from './wordClass.module.scss';

const WordClass = ({meaning, source}) => {

    return (
        <>  
           {
            meaning.map((word, index) => 
                {
                    return (
                        <div key={`${index}-word`}>
                            <div className={styles.heading}>
                              <p>{word?.partOfSpeech}</p>
                              <span></span>
                            </div>
                            <div className={styles.summary}>
                                <p>Meaning</p>
                                <ul>
                                    {word.definitions.map((def, index) =>
                                        <li key={`def-${index}`}>{def.definition}</li>
                                    )}
                                </ul>
                                {   word?.synonyms.length != 0 && 
                                    <div className={styles.synonyms}>
                                        <p>Synonyms</p>
                                        { word?.synonyms.map((synonym, index) => 
                                            <span key={`${index}-synonym`}>{synonym}</span>
                                        )}
                                    </div>
                                }
                            </div>
                        </div>
                    )
                }
            )}
            <div className={styles.sourceContainer}>
                <div className={styles.line}></div>
                <p>Source</p>
                <a href={source} target="_blank">{source}</a>
            </div>
        </>
    ) 
}

export default WordClass;
