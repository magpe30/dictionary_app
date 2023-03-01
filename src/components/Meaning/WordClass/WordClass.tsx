import React from 'react';

import styles from './wordClass.module.scss';

type WordProps = {
    partOfSpeech: string[] | undefined; 
    definitions: any
    synonyms: string[]; 
}

type DefinitionProps = {
    definition: string | React.ReactElement<any, string> |  null | undefined; 
}

const WordClass = ({meaning, source}) => {
    const correctSource = source?.[0];

    return (
        <>  
           {
            meaning.map((word: WordProps, index: number) => 
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
                                    {word.definitions.map((def: DefinitionProps, index: number) =>
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
                <a href={correctSource} target="_blank">{correctSource}</a>
            </div>
        </>
    ) 
}

export default WordClass;
