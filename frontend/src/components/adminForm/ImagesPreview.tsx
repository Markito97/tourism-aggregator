import { Trash } from '../../assets/icons/Trash';
import * as css from './ImagesPreview.sass';

interface ImagesPreviewProps {
  images: Array<string | ArrayBuffer | null>;
  onRemove: (index: number) => void;
}

export const ImagesPreview = (props: ImagesPreviewProps): JSX.Element => {
  return (
    <div style={{ display: 'flex' }}>
      {props.images &&
        props.images.map((img, index) => (
          <div key={index + 1} className={css.image__unit}>
            <img className={css.image} src={img} />
            <div className={css.image__unit__remove}>
              <Trash onClick={() => props.onRemove(index)} />
            </div>
          </div>
        ))}
    </div>
  );
};
