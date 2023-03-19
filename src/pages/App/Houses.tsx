import { HousesField } from '../../components/Houses/HousesField';
import { observer } from 'mobx-react-lite';
import { ServiceContext } from '../../context/ServiceContext';
import { useContext, useEffect } from 'react';
import { mockHouses } from '../../mockdata/mockHouses';

const Houses = observer((): JSX.Element => {
  return <HousesField houses={mockHouses} />;
});

export default Houses;
