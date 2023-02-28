import styles from './Sidebar.module.css';

export const Sidebar = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <div className={styles.option}>Houses</div>
      <div className={styles.option}>Activities</div>
    </div>
  );
};
