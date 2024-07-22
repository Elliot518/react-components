import React from 'react';
import styles from './LoveHeart.module.css';

interface LoveHeartProps {
  width?: number;
  height?: number;
}

const LoveHeart: React.FC<LoveHeartProps> = ({ width = 200, height = 200 }) => {
  return (
    <label className={styles.label}>
      <input type="checkbox" className={styles.checkbox} hidden />
      <svg
        className={styles.icon}
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: `${width}px`, height: `${height}px` }}
      >
        <path
          d="M512 896a42.666667 42.666667 0 0 1-30.293333-12.373333l-331.52-331.946667a224.426667 224.426667 0 0 1 0-315.733333 223.573333 223.573333 0 0 1 315.733333 0L512 282.026667l46.08-46.08a223.573333 223.573333 0 0 1 315.733333 0 224.426667 224.426667 0 0 1 0 315.733333l-331.52 331.946667A42.666667 42.666667 0 0 1 512 896z"
          p-id="3129"
          id="heart"
          className={styles.heart}
        ></path>
      </svg>
      <span className={styles.span}></span>
    </label>
  );
};

export default LoveHeart;
