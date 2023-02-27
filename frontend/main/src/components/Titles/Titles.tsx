import styles from './Titles.module.css'

interface ITitles {
  title: string
  subTitle: string
  className: string
}

interface TitlesProps {
  titles: ITitles
}

interface TypeClassName {
  content: string
  subtitle: string
  titleClass: string
}

const setClassName = (condition: string): TypeClassName => {
  const content = condition === 'Content' ? styles.content : styles.contentImg
  const subtitle =
    condition === 'Content' ? styles.subTitle : styles.subTitleImg
  const titleClass = condition === 'Content' ? styles.title : styles.titleImg

  return { content, subtitle, titleClass }
}

export const Titles = ({ titles }: TitlesProps): JSX.Element => {
  const { title, subTitle, className } = titles
  const { content, subtitle, titleClass } = setClassName(className)
  return (
    <div className={content}>
      <h6 className={subtitle}>{subTitle}</h6>
      <h1 className={titleClass}>{title}</h1>
    </div>
  )
}
