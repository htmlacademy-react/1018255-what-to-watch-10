import React from 'react';
import Review from '../review/review';
import { ReviewType } from '../../types/review-type';

type ReviewsProps = {
  reviews: ReviewType[],
}

function renderReview({comment, rating, user: {name}}: ReviewType): JSX.Element {
  return (
    <Review
      comment={comment}
      rating={rating}
      name={name}
      key={`${rating}_name`}
    />
  );
}

function Reviews({reviews}: ReviewsProps): JSX.Element {
  const reviewItems = reviews.map((review: ReviewType) => renderReview(review));

  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">

        {reviewItems}

      </div>
    </div>
  );
}

export default Reviews;
