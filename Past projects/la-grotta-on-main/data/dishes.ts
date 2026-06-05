export type Dish = {
  name: string
  description: string
  image: string
}

export const signatureDishes: Dish[] = [
  {
    name: 'Signature Rack of Lamb',
    description: 'Herb-crusted rack of lamb, roasted to perfection — a La Grotta classic for nearly 30 years',
    image: 'https://lagrottaonmain.ca/wp-content/uploads/2024/11/HRCN7309.jpg',
  },
  {
    name: 'Famous Chilean Seabass',
    description: 'Pan-seared Chilean seabass — delicately prepared and celebrated by our guests for decades',
    image: 'https://lagrottaonmain.ca/wp-content/uploads/2024/11/OYBD7480.jpg',
  },
  {
    name: 'Veal Saltimbocca',
    description: 'Tender veal with prosciutto and sage — one of our most beloved Italian classics',
    image: '/images/gallery/food/food-antipasto.jpg',
  },
]
