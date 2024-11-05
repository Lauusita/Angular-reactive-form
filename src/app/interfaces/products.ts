export interface Products {
  id: number,
  title: string,
  price: number,
  description: string,
  category: string,
  image: string,
  rating: ratingType
}

type ratingType = {
  rate: number,
  count: number
}