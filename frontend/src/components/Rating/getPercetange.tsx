export function getPersentage(totalRatng: number, oneRating:number){
    if(oneRating === 0) return 0
    return (((oneRating) / totalRatng ) * 100).toFixed(1)
}