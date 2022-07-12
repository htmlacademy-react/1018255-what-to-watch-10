import React from 'react';
import ReviewItem from '../review-item/review-item';
import { ReviewType, ReviewsType } from '../../types/reviews-type';

type ReviewsListProps = {
  reviews: ReviewsType,
}

function renderReviewItems({comment, rating, user: {name}}: ReviewType): JSX.Element {
  return (
    <ReviewItem
      comment={comment}
      rating={rating}
      name={name}
      key={`${rating}name`}
    />
  );
}

function ReviewsList({reviews}: ReviewsListProps): JSX.Element {
  const reviewItems = reviews.map((review: ReviewType) => renderReviewItems(review));

  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">

        {reviewItems}

      </div>
    </div>
  );
}

export default ReviewsList;
