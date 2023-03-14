import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import WavesOutlinedIcon from '@mui/icons-material/WavesOutlined';
import CottageOutlinedIcon from '@mui/icons-material/CottageOutlined';
import { Box, Grid, Typography, styled } from '@mui/material';
import { IHouse } from 'src/dto/house.dto';

const GridContainer = styled(Grid)`
  border: 1px solid #9b9b9b;
  borderradius: 4px;
  alignitems: center;
  display: flex;
  justify-content: space-between;
  color: #9b9b9b;
`;

const RowGrid = styled(Grid)`
  display: flex;
  align-items: center;
`;

const GridTypography = styled(Typography)`
  padding: 16px 16px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  color: #2d2d2d;
`;

type GridItemProps = {
  house: IHouse;
  index: number;
};

export const GridItem = (props: GridItemProps): JSX.Element => {
  const { house, index } = props;

  return (
    <GridContainer key={index + 1} container>
      <RowGrid item smallMobile={1}>
        <GridTypography>{index + 1}</GridTypography>
      </RowGrid>
      <RowGrid item smallMobile={4} laptop={2}>
        <CottageOutlinedIcon />
        <GridTypography>{house.houseName}</GridTypography>
      </RowGrid>
      <RowGrid item smallMobile={4} laptop={2}>
        <RoomOutlinedIcon />
        <GridTypography>{house.address}</GridTypography>
      </RowGrid>
      <RowGrid
        item
        smallMobile={2}
        sx={{
          display: {
            smalMobile: 'none',
            tablet: 'none',
            laptop: 'flex',
          },
        }}
      >
        <WavesOutlinedIcon />
        <GridTypography>{house.lake}</GridTypography>
      </RowGrid>
      <RowGrid
        item
        smallMobile={2}
        sx={{
          display: {
            smalMobile: 'none',
            tablet: 'none',
            laptop: 'flex',
          },
        }}
      >
        <GroupOutlinedIcon />
        <GridTypography>{house.persons}</GridTypography>
      </RowGrid>
      <RowGrid
        item
        smallMobile={2}
        sx={{
          justifyContent: 'end',
        }}
      >
        <Box sx={{ paddingLeft: '16px', paddingRight: '16px' }}>
          <EditOutlinedIcon />
        </Box>
        <Box sx={{ paddingLeft: '16px', paddingRight: '16px' }}>
          <DeleteOutlineOutlinedIcon />
        </Box>
      </RowGrid>
    </GridContainer>
  );
};
