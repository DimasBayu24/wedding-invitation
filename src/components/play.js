import React, { useState, useEffect } from "react";
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import PauseCircleFilledIcon from '@material-ui/icons/PauseCircleFilled';
const useAudio = url => {
    const [audio] = useState(new Audio(url));
    const [playing, setPlaying] = useState(false);

    const toggle = () => setPlaying(!playing);

    useEffect(() => {
        playing ? audio.play() : audio.pause();
    },
        [playing]
    );

    useEffect(() => {
        audio.addEventListener('ended', () => setPlaying(false));
        return () => {
            audio.removeEventListener('ended', () => setPlaying(false));
        };
    }, []);

    return [playing, toggle];
};

const Player = ({ url }) => {
    const [playing, toggle] = useAudio(url);

    return (
        <div>
            <button className=" md:p-10 p-1" onClick={toggle}>{playing ?
                <PauseCircleFilledIcon fontSize="large" color="action" />
                :
                <>
                    <PlayCircleFilledIcon fontSize="large" color="action" />
                    <p className="Oregano Main-color md:text-14 text-6" >Click me!</p>
                </>
            }</button>
        </div>
    );
};

export default Player;