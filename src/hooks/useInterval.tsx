import { useEffect, useRef } from 'react';

interface UseInterval {
    callback: any;
    delay: number | null;
}

const useInterval = ({ callback, delay }: UseInterval) => {
    const savedCallback = useRef<any>();

    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    useEffect(() => {
        function tick() {
            savedCallback.current();
        }
        if (delay !== null) {
            let id = setInterval(tick, delay);
            return () => {
                clearInterval(id);
            };
        }
        return () => null;
    }, [delay]);
};

export default useInterval;
