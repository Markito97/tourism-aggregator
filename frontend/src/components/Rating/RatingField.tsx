import * as css from './Rating.sass'

export function RatingField(props){
    function handleCnahge(e){
        console.log(e)
    }
    return (
        <div className={css.ratingField}>
             <input type='checkbox' onChange={handleCnahge} className={css.inputRaiting}/>
             <div>{props.number}-star</div>
             <div className={css.raitingBar}>
             </div>
             <div className={css.ratingPercentage}>
                {props.percentage}%
             </div>
        </div>

    )
} 