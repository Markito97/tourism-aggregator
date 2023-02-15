

export const getRangeArray = (start: number, end: number): number[] => {
    return Array(end - start + 1).fill(undefined).map((_, index) => index + start)    
}