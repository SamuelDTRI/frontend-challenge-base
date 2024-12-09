export interface Movie {
  id: number;
  title: string;
  date: string;
  rating: number;
  category: string;
  image: string;
}

const movies: Movie[] = [
  {
    id: 1,
    title: "Shrek 5",
    date: "August 1, 2024",
    rating: 75,
    category: "Popular",
    image: "/images/pandados.jpg",
  },
  {
    id: 2,
    title: "Gladiator 2",
    date: "August 16, 2023",
    rating: 60,
    category: "Popular",
    image: "/images/pandados.jpg",
  },
  {
    id: 3,
    title: "One Fast Move",
    date: "August 8, 2024",
    rating: 85,
    category: "Popular",
    image: "/images/pandados.jpg",
  },
  {
    id: 4,
    title: "The Wild Robot",
    date: "August 2, 2024",
    rating: 50,
    category: "Popular",
    image: "/images/pandados.jpg",
  },
  {
    id: 5,
    title: "Deadpool Wolverine",
    date: "August 5, 2024",
    rating: 95,
    category: "Popular",
    image: "/images/pandados.jpg",
  },
  //////////////////////////
  {
    id: 6,
    title: "Lord of War",
    date: "March 10, 2024",
    rating: 85,
    category: "Now Playing",
    image: "/images/pandados.jpg",
  },
  {
    id: 7,
    title: "House of Wax",
    date: "May 10, 2024",
    rating: 82,
    category: "Now Playing",
    image: "/images/pandados.jpg",
  },
  {
    id: 8,
    title: "Crash",
    date: "Jan. 18, 2024",
    rating: 40,
    category: "Now Playing",
    image: "/images/pandados.jpg",
  },
  {
    id: 9,
    title: "Munich",
    date: "May 13, 2024",
    rating: 90,
    category: "Now Playing",
    image: "/images/pandados.jpg",
  },
  {
    id: 10,
    title: "If",
    date: "July 8, 2024",
    rating: 95,
    category: "Now Playing",
    image: "/images/pandados.jpg",
  },
  //////////////////
  {
    id: 11,
    title: "Godzilla minus one",
    date: "August 2, 2024",
    rating: 90,
    category: "Upcoming",
    image: "/images/pandados.jpg",
  },
  {
    id: 12,
    title: "Oppenheimer",
    date: "July 28, 2024",
    rating: 99,
    category: "Upcoming",
    image: "/images/pandados.jpg",
  },
  {
    id: 13,
    title: "Jhon Wick 4",
    date: "June 01, 2024",
    rating: 85,
    category: "Upcoming",
    image: "/images/pandados.jpg",
  },
  {
    id: 14,
    title: "Cocaine Bear",
    date: "July 23, 2024",
    rating: 79,
    category: "Upcoming",
    image: "/images/pandados.jpg",
  },
  {
    id: 15,
    title: "Barbie",
    date: "August 1, 2024",
    rating: 79,
    category: "Upcoming",
    image: "/images/pandados.jpg",
  },

  ////////////////
  {
    id: 16,
    title: "Top Gun: Maverick",
    date: "Jan 17, 2022",
    rating: 95,
    category: "Top Rated",
    image: "/images/pandados.jpg",
  },
  {
    id: 17,
    title: "Jackass Forever",
    date: "Feb. 10, 2024",
    rating: 92,
    category: "Top Rated",
    image: "/images/pandados.jpg",
  },
  {
    id: 18,
    title: "Doctor Strange Multiverse",
    date: "Jan 25, 2024",
    rating: 95,
    category: "Top Rated",
    image: "/images/pandados.jpg",
  },
  {
    id: 19,
    title: "Mickey",
    date: "August 2, 2024",
    rating: 94,
    category: "Top Rated",
    image: "/images/pandados.jpg",
  },
  {
    id: 20,
    title: "The French Dispatch",
    date: "March 19, 2024",
    rating: 99,
    category: "Top Rated",
    image: "/images/pandados.jpg",
  },
  /////////////////////
  {
    id: 21,
    title: "Tenet",
    date: "Dec. 24, 2023",
    rating: 85,
    category: "Favorites",
    image: "/images/pandados.jpg",
  },
  {
    id: 22,
    title: "Joker",
    date: "July 9, 2023",
    rating: 95,
    category: "Favorites",
    image: "/images/pandados.jpg",
  },
  {
    id: 23,
    title: "Deadpool 2",
    date: "Feb. 27, 2022",
    rating: 80,
    category: "Favorites",
    image: "/images/pandados.jpg",
  },
  {
    id: 24,
    title: "Logan",
    date: "Sep. 24, 2022",
    rating: 95,
    category: "Favorites",
    image: "/images/pandados.jpg",
  },
  {
    id: 25,
    title: "Black Phone",
    date: "May 21, 2023",
    rating: 89,
    category: "Favorites",
    image: "/images/pandados.jpg",
  },
];

export default movies;
