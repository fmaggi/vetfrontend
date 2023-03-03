import {useState, useEffect} from 'react'


type WindowSize = {
    w: number,
    h: number
};

function getWindowSize(): WindowSize {
    const winSize: WindowSize = {
        w: window.innerWidth,
        h: window.innerHeight
    };
    return winSize;
}

export function useWindowSize() : WindowSize {
    const [winSize, setWinSize] = useState(getWindowSize());

    useEffect(() => {
        const resize = () => {
            setWinSize(getWindowSize());
        }

        window.addEventListener('resize', resize);

        return ()=> {
            window.removeEventListener('resize', resize)
        }
    }, []);

    return winSize;
}