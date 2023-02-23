import React, { useState, useEffect, useMemo } from 'react';


export const usePlayAudio = url => {
    const [playing, setPlaying] = useState(false);
    const tune = new Audio(url);

    useEffect(() => {
        playing ? tune.play() : tune.pause();
    }, [playing]);

    tune.onended=function() {
        setPlaying(false);
    }

    const onPlay = () => setPlaying(!playing);
   
    return [playing, onPlay];
}
