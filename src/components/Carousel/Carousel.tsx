import React from 'react'
import styles from './Carousel.module.css'
import Lake1 from '../../assets/resource/Lake1.jpg'
import Lake2 from '../../assets/resource/Lake2.jpg'
import Lake3 from '../../assets/resource/Lake3.jpg'

export const Carousel = (): JSX.Element => {
  return (
    <section className={styles.section}>
      <div className={styles.contentItem}>
        <div className={styles.imgWrapper}>
          <img className={styles.contentImg} src={Lake1} alt="" />
        </div>
        <div className={styles.itemText}>
          <div className={styles.textContent}>
            <div className={styles.textTitle}>Lake One</div>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              ea asperiores quibusdam eveniet nesciunt illum fugiat, nulla illo
              cumque praesentium voluptatem dolor facere expedita totam natus
              accusantium officiis quas veniam?
            </span>
          </div>
          <button className={styles.itemBtn}>look</button>
        </div>
      </div>

      <div className={styles.contentItemRevers}>
        <div className={styles.itemText}>
          <div>
            <h1 className={styles.textTitleReverse}>Lake Two</h1>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              ea asperiores quibusdam eveniet nesciunt illum fugiat, nulla illo
              cumque praesentium voluptatem dolor facere expedita totam natus
              accusantium officiis quas veniam?
            </span>
          </div>
          <button className={styles.itemBtn}>look</button>
        </div>
        <div className={styles.imgWrapper}>
          <img className={styles.contentImg} src={Lake2} />
        </div>
      </div>

      <div className={styles.contentItem}>
        <div className={styles.imgWrapper}>
          <img className={styles.contentImg} src={Lake3} alt="" />
        </div>
        <div className={styles.itemText}>
          <div className={styles.textContent}>
            <h1 className={styles.textTitle}>Lake Three</h1>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              ea asperiores quibusdam eveniet nesciunt illum fugiat, nulla illo
              cumque praesentium voluptatem dolor facere expedita totam natus
              accusantium officiis quas veniam?
            </span>
          </div>
          <button className={styles.itemBtn}>look</button>
        </div>
      </div>
    </section>
  )
}
