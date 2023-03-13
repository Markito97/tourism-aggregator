import { observer } from 'mobx-react-lite';
import { useContext, useEffect } from 'react';
import { ServiceContext } from '../../context/ServiceContext';
import * as css from './List.sass';
import { TrashFilled } from '../../assets/icons/TrashFilled';
import { TextField } from '../../UI/TextField';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

export const List = observer((): JSX.Element | null => {
  const { houses } = useContext(ServiceContext);
  const { control } = useForm({
    defaultValues: {
      search: '',
    },
  });
  useEffect(() => {
    houses.getHouses();
  }, []);

  if (!houses.allHouses) return null;
  return (
    <div className={css.house__content}>
      <div style={{ display: 'flex', alignItems: 'end', justifyContent: 'space-between' }}>
        <TextField control={control} name="search" />
        <button style={{ margin: '5px', padding: '16px 16px' }}>
          <Link to={'create'}>Add new house</Link>
        </button>
      </div>

      {houses.allHouses.map((house, index) => (
        <div className={css.house__unit} key={house._id}>
          <div>{index + 1}</div>
          <div>{house.houseName}</div>
          <div>{house.address}</div>
          <div>{house.lake}</div>
          <div>{house.persons}</div>
          <div>{house.geoData}</div>
          <TrashFilled onClick={() => houses.removeHouse(house._id)} />
        </div>
      ))}
    </div>
  );
});
