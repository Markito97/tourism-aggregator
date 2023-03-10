import { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Footer } from '../Footer/Footer';
import { Navbar } from '../Navbar/Navbar';
import { HeaderTitle } from '../HeaderTitle/HeaderTitle';
import styles from './Layout.module.css';

export const Layout = (): JSX.Element => {
  const location = useLocation();
  const [isShow, setIsShow] = useState(true);

  useEffect(() => {
    if (location.pathname !== '/') {
      setIsShow(false);
    } else {
      setIsShow(true);
    }
  }, [location]);
  return (
    <div className={styles.wrapper}>
      <header className={isShow ? styles.active : styles.inactive}>
        <div className={styles.container}>
          <Navbar />
          {isShow && (
            <div className={styles.titleContainer}>
              <HeaderTitle />
            </div>
          )}
        </div>
      </header>
      <main className={styles.main}>
        <div className={styles.container}>
          <Outlet />
        </div>
      </main>
      <footer className={styles.footer}>
        <div className={styles.container}>
          <Footer />
        </div>
      </footer>
    </div>
  );
};
