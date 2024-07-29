import React, { useState } from 'react';
import IronManLoader from './IronManLoader';

const IronManLoaderDemo: React.FC = () => {
    const [isLoading, setIsLoading] = useState(false);

    const handleClick = () => {
        setIsLoading(true);
        // Simulate an async operation
        setTimeout(() => {
            setIsLoading(false);
        }, 3000);
    };

    return (
        <div className="app-container">
            <h1>Iron Man Loader Demo</h1>
            <button onClick={handleClick}>Show Loader</button>
            {isLoading && <IronManLoader />}
        </div>
    );
};

export default IronManLoaderDemo;
