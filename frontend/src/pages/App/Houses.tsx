import { HousesField } from '../../components/Houses/HousesField';
import { observer } from 'mobx-react-lite';
import { ServiceContext } from '../../context/ServiceContext';
import { useContext, useEffect } from 'react';

const Houses = observer((): JSX.Element => {
  const { houses } = useContext(ServiceContext);

  useEffect(() => {
    houses.getHouses();
  }, []);

  return <HousesField houses={houses.allHouses} />;
});

export default Houses;
