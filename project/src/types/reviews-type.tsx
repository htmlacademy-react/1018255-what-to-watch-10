export type ReviewType = {
  comment: string
  date: string
  id: number
  rating: number
  user: {
    id: number
    name: string
  }
};

export type ReviewsType = ReviewType[];
