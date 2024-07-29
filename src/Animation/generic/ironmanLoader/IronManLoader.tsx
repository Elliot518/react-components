import React from 'react';
import './IronManLoader.css';
import ironManImage from '../../../assets/iron_man.png';

const IronManLoader: React.FC = () => {
    return (
        <div className="ironman-container">
            <div className="iron-man">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <img src={ironManImage} alt="Iron Man" />
            </div>
            <div className="loading-text">IronMan Loading</div>
            <div className="lines">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    );
};

export default IronManLoader;

