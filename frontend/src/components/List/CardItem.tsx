import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  styled,
} from '@mui/material';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { IHouse } from 'src/dto/house.dto';
import { Link } from 'react-router-dom';

const CardTypography = styled(Typography)`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  color: #2d2d2d;
  font-family: Montserrat;
`;

export const CardItem = (props: IHouse) => {
  const { _id, houseName, address, lake } = props.house;

  return (
    <Card
      sx={{
        width: {
          smallMobile: 325,
          averageMobile: 525,
        },
      }}
    >
      <CardMedia sx={{ height: 160 }} image={`http://localhost:3001/${props.house.image[0]}`} />
      <CardContent>
        <CardTypography>{houseName}</CardTypography>
        <CardTypography>{address}</CardTypography>
        <CardTypography>{lake}</CardTypography>
      </CardContent>
      <CardActions sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Link to={`/admin/edit/${_id}`} style={{ textDecoration: 'none' }}>
          <Button
            variant="contained"
            size="small"
            sx={{
              color: 'white',
              backgroundColor: '#2D2D2D',
              '&:hover': {
                backgroundColor: '#2D2D2D',
              },
            }}
            endIcon={<EditOutlinedIcon />}
          >
            Edit
          </Button>
        </Link>
        <Button
          variant="contained"
          size="small"
          sx={{
            color: 'white',
            backgroundColor: '#2D2D2D',
            '&:hover': {
              backgroundColor: '#2D2D2D',
            },
          }}
          endIcon={<DeleteOutlineOutlinedIcon />}
        >
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};
