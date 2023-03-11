import { Link } from 'react-router-dom';
import * as css from './Sidebar.sass';

export const Sidebar = (): JSX.Element => {
  return (
    <aside className={css.admin__layout__sidebar}>
      <ul className={css.sidebar__links}>
        <Link to={'houseslist'} className={css.sidebar__link}>
          Houses
        </Link>
        <Link to={'activitieslist'} className={css.sidebar__link}>
          Activities
        </Link>
      </ul>
    </aside>
  );
};
