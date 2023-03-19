import { Rating, Typography } from '@mui/material';
import { Box } from '@mui/material';
import { Button } from '@mui/material';
import { useState } from 'react';
import style from './RatingForm.modules.css';
import TextField from '@mui/material/TextField';
import { Icon } from '@mui/material';
export default function RatingForm() {
  const [value, setValue] = useState(1);
  return (
    <div className={style.ratingContainer}>
      <span className={style.ratingTitle}>Rate your recent experience</span>
      <Box component="fieldset" mb={3} borderColor="transparent" sx={{ marginBottom: '0px' }}>
        <Typography component="legend"></Typography>
        <Rating
          name="size-large"
          defaultValue={1}
          size="large"
          value={value}
          onChange={(event, newValue) => {
            console.log('newValue', newValue);
            setValue(newValue);
          }}
        />
      </Box>
      <span className={style.info}>Tell us more about your experience</span>
      <TextField
        placeholder="What made your experience great? What is this company doing well? Remember to be honest, helpful, and constructive!"
        multiline
        rows={10}
        fullWidth
        sx={{ marginTop: '40px', fontFamily: 'Montserrat' }}
      />
      <Button
        variant="contained"
        component="label"
        size="large"
        sx={{
          fontFamily: 'Montserrat',
          backgroundColor: '#2D2D2D',
          '&:hover': {
            backgroundColor: '#2D2D2D',
          },
          width: '100%',
          marginTop: '10px',
        }}
      >
        Send
      </Button>
    </div>
  );
}
