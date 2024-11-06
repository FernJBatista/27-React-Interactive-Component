import './RatingCard.module.css';

// prettier-ignore
function RatingCard() {

    return <div className='main'>
        <div className="icon">
            <img src="/icon-star.svg" alt="star" />
        </div>

        <div className="rating-content">
            <h1>How did we do?</h1>
            <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
        </div>


    </div>;
}

export default RatingCard;
