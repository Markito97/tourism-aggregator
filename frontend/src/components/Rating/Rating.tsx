import * as css from './Rating.sass'
import { RatingField } from './RatingField'
export function Ratinig(){
    return (
        <div className={css.ratingContainer}>
            <div className={css.avarageRatingContainer}>
                <span className={css.reviewsText}>Reviews</span>
                <svg viewBox="0 0 16 16" fill="#00b67a" className="icon_icon__ECGRl" xmlns="http://www.w3.org/2000/svg" width="22px" height="22px"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.88 6.225H16l-4.929 3.504-3.047 2.149-4.953 3.504L4.952 9.73 0 6.225h6.119L8 .572l1.881 5.653Zm1.596 4.812L8 11.9l4.929 3.527-1.453-4.392Z"></path></svg>
                <span className={css.avarageRaitingNumber}>4.8</span>
            </div>
            <div className={css.totalRating}>4098</div>
            <div className={css.starContainer}>
            <RatingField number = {5} percentage = {70}/>
            <RatingField number = {4} percentage = {20}/>
            <RatingField number = {3} percentage = {30}/>
            <RatingField number = {2} percentage = {10}/>
            <RatingField number = {1} percentage = {11}/>
            </div>
        </div>
    )
}