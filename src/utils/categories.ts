export interface Category {
  id: number;
  title: string;
}

const categories: Category[] = [
  { id: 1, title: "Popular" },
  { id: 2, title: "Now Playing" },
  { id: 3, title: "Upcoming" },
  { id: 4, title: "Top Rated" },
  { id: 5, title: "Favorites" },
];

export default categories;
