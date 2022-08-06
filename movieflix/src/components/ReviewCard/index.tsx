import { Review } from '../../types/review';
import './styles.css'
import starIcon from '../../assets/images/star.png'

type Props = {
  reviews: Review[];
};

const ReviewCard = ({ reviews }: Props) => {
  return (
    <div className="reviews-container">
      {reviews?.map((review) => (
        <div className="review-card-container" key={review.id}>
            <div className="review-user-container">
              <div className="starImage">
                <img src={starIcon} alt="star" id="starIconId"></img>
              </div>
              <h3>{review.user.name}</h3>
            </div>
            <div className="review-text-container">
              <p>{review.text}</p>
            </div>
          </div>
      ))}
    </div>
  );
};

export default ReviewCard;
