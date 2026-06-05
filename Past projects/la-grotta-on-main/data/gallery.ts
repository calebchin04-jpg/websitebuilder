export type GalleryCategory = 'food' | 'interior' | 'patio' | 'events'

export type GalleryImage = {
  src: string
  alt: string
  category: GalleryCategory
}

export const galleryImages: GalleryImage[] = [
  // Food
  { src: '/images/gallery/food/food-spread.jpg', alt: 'Selection of dishes at La Grotta On Main', category: 'food' },
  { src: '/images/gallery/food/food-lobster-pasta.jpg', alt: 'Lobster pasta at La Grotta On Main', category: 'food' },
  { src: '/images/gallery/food/food-antipasto.jpg', alt: 'Antipasto plate at La Grotta On Main', category: 'food' },
  { src: '/images/gallery/food/food-gnocchi.jpg', alt: 'Gnocchi at La Grotta On Main', category: 'food' },
  { src: '/images/gallery/food/food-spaghetti.jpg', alt: 'Spaghetti Bolognese at La Grotta On Main', category: 'food' },
  { src: '/images/gallery/food/food-pizza.jpg', alt: 'Pizza at La Grotta On Main', category: 'food' },
  { src: 'https://lagrottaonmain.ca/wp-content/uploads/2024/11/HRCN7309.jpg', alt: 'Signature Rack of Lamb at La Grotta On Main', category: 'food' },
  { src: 'https://lagrottaonmain.ca/wp-content/uploads/2024/11/OYBD7480.jpg', alt: 'Famous Chilean Seabass at La Grotta On Main', category: 'food' },
  { src: 'https://lagrottaonmain.ca/wp-content/uploads/2024/11/Vealorchicken.jpg', alt: 'Veal dish at La Grotta On Main', category: 'food' },
  { src: 'https://lagrottaonmain.ca/wp-content/uploads/2020/11/122811608_3709628915754062_5833125942443873226_n-1030x773.jpg', alt: 'La Grotta On Main cuisine', category: 'food' },
  // Interior
  { src: '/images/gallery/interior/interior-dining-room.jpg', alt: 'Dining room at La Grotta On Main', category: 'interior' },
  { src: '/images/gallery/interior/interior-stone-room.jpg', alt: 'Private dining room at La Grotta On Main', category: 'interior' },
  { src: 'https://lagrottaonmain.ca/wp-content/uploads/2024/11/IMG-9971-scaled.jpg', alt: 'Warm interior at La Grotta On Main', category: 'interior' },
  { src: 'https://lagrottaonmain.ca/wp-content/uploads/2022/12/IMG-9355-scaled.jpg', alt: 'La Grotta On Main restaurant interior', category: 'interior' },
  { src: 'https://lagrottaonmain.ca/wp-content/uploads/2024/11/TCOL4368.jpg', alt: 'Atmosphere at La Grotta On Main', category: 'interior' },
  { src: 'https://lagrottaonmain.ca/wp-content/uploads/2025/10/IMG_E0945.jpg', alt: 'La Grotta On Main dining experience', category: 'interior' },
  // Patio
  { src: '/images/gallery/patio/patio-exterior.jpg', alt: 'La Grotta On Main on Main Street Unionville', category: 'patio' },
  { src: 'https://lagrottaonmain.ca/wp-content/uploads/2023/02/image_6487327-1-1.jpg', alt: 'La Grotta On Main patio', category: 'patio' },
  { src: 'https://lagrottaonmain.ca/wp-content/uploads/2023/02/image_6487327-2-1.jpg', alt: 'Outdoor dining at La Grotta On Main', category: 'patio' },
  { src: 'https://lagrottaonmain.ca/wp-content/uploads/2020/07/PHOTO-2020-06-07-23-46-43.jpg', alt: 'La Grotta On Main patio atmosphere', category: 'patio' },
]

export const galleryCategories: { value: GalleryCategory; label: string }[] = [
  { value: 'food', label: 'Food' },
  { value: 'interior', label: 'Interior' },
  { value: 'patio', label: 'Patio' },
  { value: 'events', label: 'Events' },
]
