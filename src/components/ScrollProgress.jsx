import { useState, useEffect } from 'react';

function ScrollProgress() {
    const [scrollProgress, setScrollProgress] = useState(0);
    
    useEffect(() => {
        const updateScrollProgress = () => {
            const currentProgress = window.scrollY;
            const scrollHeight = document.body.scrollHeight - window.innerHeight;
            if (scrollHeight) {
                setScrollProgress((currentProgress / scrollHeight) * 100);
            }
        };
        
        window.addEventListener('scroll', updateScrollProgress);
        return () => window.removeEventListener('scroll', updateScrollProgress);
    }, []);
    
    return (
        <div className="fixed top-0 left-0 w-full h-1 z-50">
            <div 
                className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300"
                style={{ width: `${scrollProgress}%` }}
            />
        </div>
    );
}

export default ScrollProgress;