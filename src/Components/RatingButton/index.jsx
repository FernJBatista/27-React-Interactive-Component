// prettier-ignore
function RatingButton([rating, onClick]) {
    return (
        <button onClick={() => onClick(rating)} className="rating-button">{rating}</button>
    )
}

export default RatingButton;
