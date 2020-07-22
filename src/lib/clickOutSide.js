export default (ref, handler) => {
    if(typeof window !== "undefined"){
        const listener = event => {
            // Do nothing if clicking ref's element or descendent elements
            if (!ref.current || ref.current.contains(event.target)) {
                return;
            }

            handler();
        };

        document.addEventListener('click', listener, true);
        document.addEventListener('touchstart', listener, true);

        return () => {
            document.removeEventListener('click', listener);
            document.removeEventListener('touchstart', listener);
        };
    }

};
