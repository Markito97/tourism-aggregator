import { useParams } from 'react-router-dom';
import { ServiceContext } from '../../context/ServiceContext';
import { Box, Button, ImageList, ImageListItem } from '@mui/material';
import { EditForm } from '../../components/Forms/EditHouseForm';
import { HouseEdit } from '../../dto/house.dto';
import { observer } from 'mobx-react-lite';
import { useEffect, useContext } from 'react';
import { useToggle } from '../../hooks/useToggle';
import { toJS } from 'mobx';

export const EditHousePage = observer((): JSX.Element | null => {
  const { id } = useParams();
  const { houses } = useContext(ServiceContext);
  const [isToggle, handleToggle] = useToggle();

  const handleUpdate = (value: any) => {
    const updated = {
      ...houses.currentHouse,
      ...value,
    };
    houses.bookingHouse(updated.id, updated);
  };

  useEffect(() => {
    houses.getHouse(id);
  }, []);

  if (!houses.currentHouse) return null;

  const deserialize = new HouseEdit({ ...houses.currentHouse });

  const update = Object.entries(deserialize)
    .map(([key, value]) => ({ key, value }))
    .map((field) =>
      field.value === '' ? { ...field, value: 'This is empty field' } : { ...field },
    );

  const handleSelectMainPhoto = (index) => {
    let images = houses.currentHouse.image.slice(0);
    let temp = images[0];
    images[0] = images[index];
    images[index] = temp;
    const house = {
      ...houses.currentHouse,
      image: images,
    };
    houses.bookingHouse(houses.currentHouse.id, house);
  };

  console.log(toJS(houses.currentHouse));

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', rowGap: '15px' }}>
      {update.map((field, index) => (
        <EditForm onUpdate={handleUpdate} key={index} field={field.key!} value={field.value!} />
      ))}
      <Button
        variant="contained"
        size="small"
        sx={{
          width: {
            smallMobile: '100%',
          },
          backgroundColor: '#2D2D2D',
          '&:hover': {
            backgroundColor: '#2D2D2D',
          },
        }}
        onMouseDown={handleToggle}
      >
        Choose main photo
      </Button>
      {isToggle && (
        <ImageList>
          {houses.currentHouse.image.map((image, index) => (
            <ImageListItem key={image}>
              <img
                src={`http://localhost:3001/${image}`}
                onClick={() => handleSelectMainPhoto(index)}
              />
            </ImageListItem>
          ))}
        </ImageList>
      )}
      <Box>Some content</Box>
    </Box>
  );
});
