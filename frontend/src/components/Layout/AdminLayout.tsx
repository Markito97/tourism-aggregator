import { Outlet } from 'react-router-dom';
import { Sidebar } from '../Sidebar/Sidebar';
import * as css from './AdminLayout.sass';

export const AdminLayout = () => {
  return (
    <div className={css.admin__layout__wrapper}>
      <header className={css.admin__layout__header}>
        Admin Panel
        <button>Sing In</button>
      </header>
      <main className={css.admin__layout__content}>
        <Sidebar />
        <section style={{ padding: '25px' }}>
          <Outlet />
        </section>
      </main>
    </div>
  );
};
