import React, { RefObject } from 'react'
import AboutUsImg from '../../assets/resource/AboutUs.jpg'
import styles from './AboutUs.module.css'

const aboutUsTitles = {
  title: 'Our Philosophy',
  subTitle: 'About Us',
  className: 'Content',
}

interface AboutUsProps {
  aboutUsRef?: RefObject<HTMLDivElement>
}

export const AboutUs = ({ aboutUsRef }: AboutUsProps): JSX.Element => {
  return (
    <div ref={aboutUsRef} className={styles.content}>
      <img className={styles.contentImg} src={AboutUsImg} alt="" />
      <div className={styles.textContent}>
        <div className={styles.textContentColNum}>01</div>
        <div>
          <h1 className={styles.textContentTitle}>Sustainable</h1>
          <div className={styles.textContentDesc}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident
            perspiciatis quam hic vitae. Sit odit suscipit quo ratione
            voluptatibus nesciunt quos nobis error. Laboriosam sed saepe,
            veritatis voluptatum aliquid rem.
          </div>
        </div>

        <div className={styles.textContentColNum}>02</div>
        <div>
          <h1 className={styles.textContentTitle}>Fair & Share</h1>
          <div className={styles.textContentDesc}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident
            perspiciatis quam hic vitae. Sit odit suscipit quo ratione
            voluptatibus nesciunt quos nobis error. Laboriosam sed saepe,
            veritatis voluptatum aliquid rem.
          </div>
        </div>

        <div className={styles.textContentColNum}>03</div>
        <div>
          <h1 className={styles.textContentTitle}>Experience</h1>
          <div className={styles.textContentDesc}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident
            perspiciatis quam hic vitae. Sit odit suscipit quo ratione
            voluptatibus nesciunt quos nobis error. Laboriosam sed saepe,
            veritatis voluptatum aliquid rem.
          </div>
        </div>
      </div>
    </div>
  )
}
