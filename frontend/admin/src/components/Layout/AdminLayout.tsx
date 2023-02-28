import { Outlet } from 'react-router-dom';
import styles from './AdminLayout.module.css';
import { Sidebar } from '../Sidebar/Sidebar';

const AdminLayout = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div>Admin panel</div>
        <div className={styles.singIn}>Sing In</div>
      </header>
      <main className={styles.content}>
        <Sidebar />
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
