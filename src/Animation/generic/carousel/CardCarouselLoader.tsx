import React from 'react';
import styles from './CardCarouselLoader.module.css';

interface CardCarouselLoaderProps {
  isLoading: boolean;
  onClose: () => void;
}

const CardCarouselLoader: React.FC<CardCarouselLoaderProps> = ({ isLoading, onClose }) => {
  if (!isLoading) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.container}>
        <div className={styles.card} style={{ '--d': -1 } as React.CSSProperties}>
          <div className={styles.content}>
            <div className={styles.img}>
              <img src="./images/1.jpg" alt="" />
            </div>
            <div className={styles.detail}>
              <span>王婉儿（Anna）</span>
              <p>寻找真爱的微笑使者。</p>
            </div>
          </div>
          <a href="#">关注</a>
        </div>
        <div className={styles.card} style={{ '--d': 0 } as React.CSSProperties}>
          <div className={styles.content}>
            <div className={styles.img}>
              <img src="./images/2.jpg" alt="" />
            </div>
            <div className={styles.detail}>
              <span>李清雨（Lily）</span>
              <p>用心灵构建美好的婚姻。</p>
            </div>
          </div>
          <a href="#">关注</a>
        </div>
        <div className={styles.card} style={{ '--d': 1 } as React.CSSProperties}>
          <div className={styles.content}>
            <div className={styles.img}>
              <img src="./images/3.jpg" alt="" />
            </div>
            <div className={styles.detail}>
              <span>张蓝心（Amy）</span>
              <p>相信缘分，等待幸福的到来。</p>
            </div>
          </div>
          <a href="#">关注</a>
        </div>
        <div className={styles.card} style={{ '--d': 2 } as React.CSSProperties}>
          <div className={styles.content}>
            <div className={styles.img}>
              <img src="./images/4.jpg" alt="" />
            </div>
            <div className={styles.detail}>
              <span>赵梦婷（Freya）</span>
              <p>热情洋溢，寻找属于我的爱情。</p>
            </div>
          </div>
          <a href="#">关注</a>
        </div>
        <div className={styles.card} style={{ '--d': 3 } as React.CSSProperties}>
          <div className={styles.content}>
            <div className={styles.img}>
              <img src="./images/5.jpg" alt="" />
            </div>
            <div className={styles.detail}>
              <span>陈思雪（Alice）</span>
              <p>勇敢追求幸福，不断向前。</p>
            </div>
          </div>
          <a href="#">关注</a>
        </div>
      </div>

      <div className={styles.register}>
        <p>60秒完成注册，幸福一辈子!</p>
        <div className={styles.btn}>免费注册</div>
      </div>
    </div>
  );
};

export default CardCarouselLoader;
