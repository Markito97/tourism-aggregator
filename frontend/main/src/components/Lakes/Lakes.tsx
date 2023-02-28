import Lake1 from '@assets/Lake1.jpg';
import Lake2 from '@assets/Lake2.jpg';
import Lake3 from '@assets/Lake3.jpg';
import styles from './Lakes.module.css';

export const Lakes = (): JSX.Element => {
  return (
    <section className={styles.section}>
      <div className={styles.sectionUnit}>
        <div className={styles.imageContainer}>
          <img className={styles.unitImage} src={Lake1} alt="" />
        </div>
        <div className={styles.unitContent}>
          <div className={styles.unitContentTitle}>Lake One</div>
          <div className={styles.unitContentText}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            assumenda officiis ratione ex, vero nostrum, aliquam repellat,
            deleniti quas doloremque sit quasi culpa magnam exercitationem
            voluptatem repellendus nihil consectetur perferendis.
          </div>
          <button type="button" className={styles.unitBtn}>
            Look
          </button>
        </div>
      </div>
      <hr className={styles.uninDivider} />
      <div className={styles.sectionUnit}>
        <div className={styles.imageContainer}>
          <img className={styles.unitImage} src={Lake2} alt="" />
        </div>
        <div className={styles.unitContent}>
          <div className={styles.unitContentTitle}>Lake One</div>
          <div className={styles.unitContentText}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            assumenda officiis ratione ex, vero nostrum, aliquam repellat,
            deleniti quas doloremque sit quasi culpa magnam exercitationem
            voluptatem repellendus nihil consectetur perferendis.
          </div>
          <button type="button" className={styles.unitBtn}>
            Look
          </button>
        </div>
      </div>
      <hr className={styles.uninDivider} />
      <div className={styles.sectionUnit}>
        <div className={styles.imageContainer}>
          <img className={styles.unitImage} src={Lake3} alt="" />
        </div>
        <div className={styles.unitContent}>
          <div className={styles.unitContentTitle}>Lake One</div>
          <div className={styles.unitContentText}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            assumenda officiis ratione ex, vero nostrum, aliquam repellat,
            deleniti quas doloremque sit quasi culpa magnam exercitationem
            voluptatem repellendus nihil consectetur perferendis.
          </div>
          <button type="button" className={styles.unitBtn}>
            Look
          </button>
        </div>
      </div>
    </section>
  );
};
