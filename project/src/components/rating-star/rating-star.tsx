import React from 'react';

type RatingStarProps = {
  value: number,
}

function RatingStar({value}: RatingStarProps): JSX.Element {
  return (
    <>
      <input
        className="rating__input"
        type="radio"
        name="rating"
        id={`star-${value}`}
        value={value}
      />
      <label
        className="rating__label"
        htmlFor={`star-${value}`}
      >
        Rating {value}
      </label>
    </>
  );
}

export default RatingStar;
