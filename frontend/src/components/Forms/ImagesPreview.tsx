import { ImageList, ImageListItem } from '@mui/material';
import { Trash } from '../../assets/icons/Trash';
import * as css from './ImagesPreview.sass';

interface ImagesPreviewProps {
  images: Array<string | ArrayBuffer | null>;
  onRemove: (index: number) => void;
}

export const ImagesPreview = (props: ImagesPreviewProps): JSX.Element => {
  return (
    <ImageList sx={{ width: '100%', height: 450 }} cols={6} rowHeight={164}>
      {props.images.map((img, index) => (
        <ImageListItem key={index}>
          <img src={img} style={{ maxHeight: '164px' }} />
          <div className={css.image__unit__remove}>
            <Trash onClick={() => props.onRemove(index)} />
          </div>
        </ImageListItem>
      ))}
    </ImageList>
  );
};
