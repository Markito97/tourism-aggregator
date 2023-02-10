import React from 'react'
import styles from './Carousel.module.css'
import Lake1 from '../../assets/resource/Lake1.jpg'
import Lake2 from '../../assets/resource/Lake2.jpg'
import Lake3 from '../../assets/resource/Lake3.jpg'

export const Carousel = (): JSX.Element => {
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
          <button className={styles.unitBtn}>Look</button>
        </div>
      </div>
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
          <button className={styles.unitBtn}>Look</button>
        </div>
      </div>
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
          <button className={styles.unitBtn}>Look</button>
        </div>
      </div>
    </section>
  )
}
