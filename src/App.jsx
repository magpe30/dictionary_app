import axios from 'axios';
import React, { useState } from 'react';
import Header from './components/Header/Header';
import Meaning from './components/Meaning/Meaning';
import Error from './components/Error/Error';

import { useTheme } from './contexts/Theme/Theme.context';

const App = () => {
    const { theme } = useTheme();

    const [error, setError] = useState(false);
    const [meanings, setMeanings] = useState(null);
    const [word, setWord] = useState("");
    const [loading, setLoading] = useState(false);

    const onFindWord = async(e) => {
        e.preventDefault();
        try {
            setLoading(true);
            const data = await axios.get(
                `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
            );
            const dataSet = data?.data;
            setMeanings(dataSet);
        } catch (error) {
            setError(true);
            setLoading(false);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="app" style={{...theme}}>
            <div className="container">
                <Header word={word} setWord={setWord} findWord={onFindWord} />
                {error ? 
                    <Error />
                    :  <Meaning meanings={meanings} loading={loading}/>
                }
            </div>
        </div>
    )
}

export default App;
