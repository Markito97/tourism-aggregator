import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@mui/material';
import { observer } from 'mobx-react-lite';
import { Link } from 'react-router-dom';

export const HousesField = observer((props: any): JSX.Element | null => {
  return (
    <Box sx={{ flexGrow: 1, m: '15px', pt: '120px' }}>
      <Grid
        container
        spacing={{
          smallMobile: 16,
          averageMobileL: 8,
          tablet: 6,
          laptop: 4,
          desktop: 3,
        }}
        columns={{
          smallMobile: 16,
          averageMobileL: 8,
          tablet: 6,
          laptop: 4,
          desktop: 3,
        }}
      >
        {props.houses.map((house, index) => {
          return (
            <Grid
              key={index}
              item
              smallMobile={16}
              averageMobile={8}
              tablet={3}
              laptop={2}
              desktop={1}
            >
              <Card
                sx={{
                  maxHeight: 350,
                  minHeight: 350,
                  margin: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <CardMedia sx={{ height: 160 }} title="green iguana" image={house.image[0]} />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{
                      fontFamily: 'Montserrat',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                    }}
                  >
                    {house.houseName}
                  </Typography>
                </CardContent>
                <CardActions
                  sx={{
                    display: 'flex',
                    justifyContent: 'end',
                  }}
                >
                  <Link
                    to={`/house/${house._id}`}
                    style={{ textDecoration: 'none', color: 'white' }}
                  >
                    <Button
                      variant="contained"
                      component="label"
                      sx={{
                        fontFamily: 'Montserrat',
                        backgroundColor: '#2D2D2D',
                        '&:hover': {
                          backgroundColor: '#2D2D2D',
                        },
                      }}
                      size="small"
                    >
                      Check booking
                    </Button>
                  </Link>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
});
