import { Link } from 'react-router-dom';
import styles from './Sidebar.module.css';

export const Sidebar = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <div className={styles.option}> <Link to={'houseslist'}>Houses</Link></div>
      <div className={styles.option}> <Link to={'activitieslist'}>Activities</Link></div>
    </div>
  );
};
