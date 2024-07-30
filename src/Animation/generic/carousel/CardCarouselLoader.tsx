import React from 'react';
import styles from './CardCarouselLoader.module.css';
import image1 from '../../../assets/1.jpg'
import image2 from '../../../assets/2.png'
import image3 from '../../../assets/3.png'
import image4 from '../../../assets/4.png'
import image5 from '../../../assets/5.png'

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
              <img src={image1} alt="Anna" />
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
              <img src={image2} alt="Lily" />
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
              <img src={image3} alt="Amy" />
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
              <img src={image4} alt="Freya" />
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
              <img src={image5} alt="Alice" />
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
        <p>Carousel Demo</p>
        <div className={styles.btn}>Login</div>
      </div>
    </div>
  );
};

export default CardCarouselLoader;
