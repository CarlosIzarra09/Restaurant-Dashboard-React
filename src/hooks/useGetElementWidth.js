import {useLayoutEffect, useRef, useState} from 'react';

const useGetElementWidth = (reference) => {
    const ref = useRef(reference);

    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);

    useLayoutEffect(() => {
        setWidth(ref.current.offsetWidth);
        setHeight(ref.current.offsetHeight);
    }, []);

    return {
        width,
        height
    }
}

export default useGetElementWidth