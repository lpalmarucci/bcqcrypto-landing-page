import React, { useEffect, useState } from 'react'

const useMediaQuery = (queryString: string): boolean => {

    const [matches, setMatches] = useState<boolean>(false);

    const getMatches = (query: string): boolean => {
        if(typeof window !== undefined){
            return window.matchMedia(query).matches
        };
        return false;
    }

    const handleChange = () => {
        const match = getMatches(queryString);
        setMatches(match)
    }

    useEffect(() => {
        const media = window.matchMedia(queryString);
        handleChange();
        media.addEventListener('change', handleChange);

        return () => media.removeEventListener('change', handleChange);
    }, [queryString])
    
    return matches
}

export default useMediaQuery
