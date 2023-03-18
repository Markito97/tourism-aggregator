import * as css from './Rating.sass';

export function RatingField(props: any) {
  let raitingColor = props.ratingType;
  let ratingWidth = props.ratingWidth + '%';

  let root = document.documentElement;
  //  onmouseover="this.style.backgroundColor='#555';" onmouseout="this.style.backgroundColor='#333';">
  return (
    <div className={css.ratingField}>
      {/* <input type='checkbox' onChange={handleCnahge} className={css.inputRaiting}/> */}
      <div>{props.number}-star</div>
      <div className={css.raitingBar}>
        {/* <div className={`${css.innerRating} ${prop}`}></div> */}
        <div
          style={{ width: `${ratingWidth}`, backgroundColor: 'black' }}
          onMouseOver={(e) => (e.target.style.backgroundColor = raitingColor)}
          onMouseLeave={(e) => (e.target.style.backgroundColor = 'black')}
        ></div>
      </div>
      <div className={css.ratingPercentage}>{props.percentage}%</div>
    </div>
  );
}
