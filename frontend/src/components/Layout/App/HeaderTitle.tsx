import styles from './HeaderTitle.module.css';

export const HeaderTitle = (): JSX.Element => {
  return (
    <div className={styles.content}>
      <h6 className={styles.subtitle}>Explore</h6>
      <h1 className={styles.title}>Norway</h1>
    </div>
  );
};
