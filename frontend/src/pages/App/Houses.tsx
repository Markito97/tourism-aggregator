import { HousesField } from '../../components/Houses/HousesField';
import { observer } from 'mobx-react-lite';
import { ServiceContext } from '../../context/ServiceContext';
import { useContext, useEffect } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { Box } from '@mui/material';

const Houses = observer((): JSX.Element => {
  const { houses } = useContext(ServiceContext);

  useEffect(() => {
    houses.getHouses();
  }, []);

  if (!houses.allHouses.length)
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <CircularProgress />;
      </Box>
    );
  return <HousesField houses={houses.allHouses} />;
});

export default Houses;
