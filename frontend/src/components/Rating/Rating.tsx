import * as css from './Rating.sass';
import { RatingField } from './RatingField';
import { getPersentage } from './getPercetange';

export function Rating(props: any) {
  let totalRating = 0;
  const rating = props.house.rating;

  for (let key in rating) {
    totalRating += props.house.rating[key].length;
  }

  let formula =
    1 * rating['oneStar'].length +
    2 * rating['twoStar'].length +
    3 * rating['threeStar'].length +
    4 * rating['fourStar'].length +
    5 * rating['fiveStar'].length;
  let avarageRating = isNaN((formula / totalRating).toFixed(1))
    ? 0
    : (formula / totalRating).toFixed(1);

  let result = ((totalRating - rating['fiveStar'].length) / rating['fiveStar'].length) * 100;

  return (
    <div className={css.ratingContainer}>
      <div className={css.avarageRatingContainer}>
        <span className={css.reviewsText}>Reviews</span>
        <svg
          viewBox="0 0 16 16"
          fill="#00b67a"
          className="icon_icon__ECGRl"
          xmlns="http://www.w3.org/2000/svg"
          width="22px"
          height="22px"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.88 6.225H16l-4.929 3.504-3.047 2.149-4.953 3.504L4.952 9.73 0 6.225h6.119L8 .572l1.881 5.653Zm1.596 4.812L8 11.9l4.929 3.527-1.453-4.392Z"
          ></path>
        </svg>
        <span className={css.avarageRaitingNumber}>{avarageRating}</span>
      </div>
      <div className={css.totalRating}>{`${totalRating} total`}</div>
      <div className={css.starContainer}>
        <RatingField
          number={5}
          percentage={getPersentage(totalRating, rating['fiveStar'].length)}
          ratingType={'#009760'}
          ratingWidth={getPersentage(totalRating, rating['fiveStar'].length)}
        />
        <RatingField
          number={4}
          percentage={getPersentage(totalRating, rating['fourStar'].length)}
          ratingType={'#73cf11'}
          ratingWidth={getPersentage(totalRating, rating['fourStar'].length)}
        />
        <RatingField
          number={3}
          percentage={getPersentage(totalRating, rating['threeStar'].length)}
          ratingType={'#ffce00'}
          ratingWidth={getPersentage(totalRating, rating['threeStar'].length)}
        />
        <RatingField
          number={2}
          percentage={getPersentage(totalRating, rating['twoStar'].length)}
          ratingType={'#ff8622'}
          ratingWidth={getPersentage(totalRating, rating['twoStar'].length)}
        />
        <RatingField
          number={1}
          percentage={getPersentage(totalRating, rating['oneStar'].length)}
          ratingType={'#ff3722'}
          ratingWidth={getPersentage(totalRating, rating['oneStar'].length)}
        />
      </div>
    </div>
  );
}
