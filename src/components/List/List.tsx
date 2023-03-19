import { observer } from 'mobx-react-lite';
import { useContext, useEffect } from 'react';
import { ServiceContext } from '../../context/ServiceContext';

import { Box, styled, useMediaQuery, useTheme } from '@mui/material';
import { IHouse } from 'src/dto/house.dto';
import { ControlPanel } from './ControlPanel';
import { GridItem } from './GridItem';
import { CardItem } from './CardItem';

const CustomBox = styled(Box)`
  display: flex;
  flex-direction: column;
  row-gap: 30px;
`;

export const List = observer((): JSX.Element | null => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('tablet'));
  const { houses } = useContext(ServiceContext);

  useEffect(() => {
    houses.getHouses();
  }, []);

  if (!houses.allHouses) return null;
  return (
    <CustomBox>
      <ControlPanel />

      {houses.allHouses.map((house: IHouse, index: number) => (
        <Box
          sx={{
            display: 'flex',
            rowGap: '30px',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          key={index}
        >
          {matches && <CardItem house={house} />}
          {!matches && <GridItem key={index + 1} house={house} index={index} />}
        </Box>
      ))}
    </CustomBox>
  );
});
