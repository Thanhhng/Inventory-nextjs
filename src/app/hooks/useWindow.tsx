import React from "react";

const useWindowSize = () => {
    const [windowSize, setWindowSize] = React.useState(0);
    React.useEffect(() => {
        const handleResize = () =>
        setWindowSize(window.innerWidth);
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => {
            window.removeEventListener('resize', handleResize);
        };}, []);
    return windowSize;
};

export default useWindowSize