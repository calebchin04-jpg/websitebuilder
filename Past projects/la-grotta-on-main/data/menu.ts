export type MenuItem = {
  name: string
  description?: string
  price?: string
}

export type MenuCategory = {
  name: string
  items: MenuItem[]
}

export const menuCategories: MenuCategory[] = [
  {
    name: 'Appetizers',
    items: [
      { name: 'Tiger Shrimps or Sea Scallops', price: '$35' },
      { name: 'Fritto Misto', price: '$35' },
      { name: 'Vongole con Vino', price: '$25' },
      { name: 'Mussels Marinara', price: '$21' },
      { name: 'Calamari Fritti', price: '$23' },
      { name: 'Grilled Truffle Calamari', price: '$23' },
      { name: 'Cold Antipasto for 2', price: '$35' },
      { name: 'Peppercorn Beef Carpaccio', price: '$24' },
      { name: 'Bruschetta', price: '$8' },
      { name: 'Seafood Platter for 4', price: '$69' },
      { name: 'Zuppa (Soup of the Day)', price: '$8' },
      { name: 'Grilled Portobellos', price: '$24' },
      { name: 'Crostini', description: 'Add sausage +$4', price: '$8' },
    ],
  },
  {
    name: 'Salads',
    items: [
      { name: 'House Salad', price: '$17' },
      { name: 'Raspberry Salad', price: '$18' },
      { name: 'Insalata Ruccola', price: '$19' },
      { name: 'Caprese Salad', price: '$19' },
      { name: 'Classic Caesar', price: '$17' },
    ],
  },
  {
    name: 'Seafood',
    items: [
      { name: 'Grilled Tiger Shrimps', price: '$37' },
      { name: 'Blackened Orange Roughy', price: '$29' },
      { name: 'Famous Chilean Seabass', price: '$49' },
      { name: 'Lobster Tail', price: '$69' },
      { name: 'Filet of Atlantic Salmon', price: '$36' },
      { name: "La Grotta's Seafood Medley", price: '$37' },
    ],
  },
  {
    name: 'Meat & Poultry',
    items: [
      { name: 'Veal or Chicken Saltimbocca', price: '$29' },
      { name: 'Veal or Chicken Limone', price: '$29' },
      { name: 'Veal or Chicken Marsala', price: '$29' },
      { name: 'Veal or Chicken Parmigiana', price: '$29' },
      { name: 'Beef Tenderloin Steak', price: '$47' },
      { name: 'Fegato Alla Veneziana', price: '$29' },
      { name: 'Signature Rack of Lamb', price: '$49' },
      { name: 'Ossobuco de la Grotta', price: '$37' },
    ],
  },
  {
    name: 'Vegetarian',
    items: [
      { name: 'Pasta Alfredo', price: '$29' },
      { name: 'New Tricolour Fusilli', price: '$29' },
      { name: 'Spinach Pasta', price: '$29' },
      { name: 'Pasta Rapini', price: '$29' },
      { name: 'Penne Arrabbiata', price: '$29' },
      { name: 'Gnocchi Gorgonzola', price: '$32' },
      { name: 'Agnolotti Della Grotta', price: '$32' },
      { name: 'Penne Rose alla Vodka', price: '$32' },
      { name: 'Eggplant Parmigiana', price: '$32' },
    ],
  },
  {
    name: 'Pasta & Risotto',
    items: [
      { name: 'Spaghetti Pescatore', price: '$32' },
      { name: 'Capellini alle Vongole', price: '$32' },
      { name: 'Linguine al Frutti di Mare', price: '$32' },
      { name: 'Linguine alla Puttanesca', price: '$32' },
      { name: 'Risotto di Mare', price: '$32' },
      { name: 'Risotto al Funghi e Truffle', price: '$32' },
      { name: 'Risotto Calabrese', price: '$32' },
      { name: 'Beef Lasagna', price: '$32' },
      { name: 'Rigatoni Bolognese', price: '$32' },
      { name: 'Fettuccini Romano', price: '$32' },
      { name: 'Pasta Carbonara', price: '$32' },
      { name: 'Linguine Amatriciana', price: '$32' },
    ],
  },
  {
    name: 'Pizza',
    items: [
      { name: 'Mare Monte', price: '$29' },
      { name: 'Fiorentina', price: '$29' },
      { name: 'Margherita', price: '$29' },
      { name: 'Vegetariana', price: '$29' },
      { name: 'Bianca', price: '$29' },
      { name: 'Della Grotta', price: '$29' },
      { name: 'Venetian', price: '$29' },
      { name: 'Capricciosa', price: '$29' },
      { name: 'Puttanesca', price: '$29' },
      { name: 'Unionville', price: '$29' },
      { name: 'Vegana', price: '$29' },
    ],
  },
  {
    name: 'Desserts',
    items: [
      { name: 'Tiramisu della Nonna' },
      { name: 'Crème Brûlée' },
      { name: 'Chocolate Brownies & Gelato' },
      { name: 'Zabaglione' },
    ],
  },
  {
    name: 'Prix Fixe Menus',
    items: [
      { name: 'Cinqueterre', description: 'A curated three-course experience', price: '$55 per person' },
      { name: 'Venezia', description: 'Four courses of classic Italian', price: '$65 per person' },
      { name: 'Toscana', description: 'Our signature tasting experience', price: '$85 per person' },
    ],
  },
]

export const dietaryOptions = [
  'Vegetarian options available',
  'Vegan options available',
  'Gluten-free options available',
  'Please inform your server of any dietary requirements',
]
