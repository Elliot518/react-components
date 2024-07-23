import React from 'react';
import styles from './JumpingBallLoader.module.css';

interface JumpingBallLoaderProps {
  isLoading: boolean;
  onClose: () => void;
}

const JumpingBallLoader: React.FC<JumpingBallLoaderProps> = ({ isLoading, onClose }) => {
  if (!isLoading) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.loader}>
        <span className={styles.ball} style={{ '--i': 1 } as React.CSSProperties}></span>
        <span className={styles.shadow} style={{ '--i': 1 } as React.CSSProperties}></span>
        <span className={styles.ball} style={{ '--i': 2 } as React.CSSProperties}></span>
        <span className={styles.shadow} style={{ '--i': 2 } as React.CSSProperties}></span>
        <span className={styles.ball} style={{ '--i': 3 } as React.CSSProperties}></span>
        <span className={styles.shadow} style={{ '--i': 3 } as React.CSSProperties}></span>
        <span className={styles.ball} style={{ '--i': 4 } as React.CSSProperties}></span>
        <span className={styles.shadow} style={{ '--i': 4 } as React.CSSProperties}></span>
        <span className={styles.ball} style={{ '--i': 5 } as React.CSSProperties}></span>
        <span className={styles.shadow} style={{ '--i': 5 } as React.CSSProperties}></span>
      </div>
    </div>
  );
};

export default JumpingBallLoader;
