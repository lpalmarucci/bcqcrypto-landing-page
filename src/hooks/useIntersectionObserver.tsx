import { useEffect, useState } from 'react';

interface IntersectionOptions{
    root: HTMLElement;
    rootMargin: string;
    threshold: number;
}

interface IProps{
    target: HTMLElement,
    options: IntersectionOptions
}

const useIntersectionObserver = ({ target, options }: IProps): boolean => {

    const [intersecting, setIntersecting] = useState<boolean>(false);

    const callback = (entries: IntersectionObserverEntry[], observer: IntersectionObserver): void => {
        entries.forEach(entry => setIntersecting(entry.isIntersecting))
    }

    useEffect(() => {
        let observer = new IntersectionObserver(callback, options)
        observer.observe(target);

        return () => observer.unobserve(target);
    }, [])
  
    return intersecting;
}

export default useIntersectionObserver
