export type MovieDTO = {
  id: number; 
  title: string;
  year: number;
  image: string; 
};

const movies: MovieDTO[] = [
  {
    id: 1,
    title: "Lilo & Stitch",
    year: 2025,
    image: "/img/Y6pjszkKQUZ5uBbiGg7KWiCksJ.jpg",
  },
  {
    id: 2,
    title: "Ballerina",
    year: 2025,
    image: "/img/2VUmvqsHb6cEtdfscEA6fqqVzLg.jpg",
  },
  {
    id: 3,
    title: "M3GAN 2.0",
    year: 2025,
    image: "/img/4a63rQqIDTrYNdcnTXdPsQyxVLo.jpg",
  },
  {
    id: 4,
    title: "Sinners",
    year: 2025,
    image: "/img/4CkZl1LK6a5rXBqJB2ZP77h3N5i.jpg",
  },
  {
    id: 5,
    title: "Thunderbolts*",
    year: 2025,
    image: "/img/hqcexYHbiTBfDIdDWxrxPtVndBX.jpg",
  },
  {
    id: 6,
    title: "F1",
    year: 2025,
    image: "/img/9PXZIUsSDh4alB80jheWX4fhZmy.jpg",
  },
  {
    id: 7,
    title: "The Ritual",
    year: 2025,
    image: "/img/ktqPs5QyuF8SpKnipvVHb3fwD8d.jpg",
  },
  {
    id: 8,
    title: "Superman",
    year: 2025,
    image: "/img/ombsmhYUqR4qqOLOxAyr5V8hbyv.jpg",
  },
  {
    id: 9,
    title: "Heads of State",
    year: 2025,
    image: "/img/lVgE5oLzf7ABmzyASEVcjYyHI41.jpg",
  },
  {
    id: 10,
    title: "The Hangman",
    year: 2025,
    image: "/img/rij9Eh4RVXyPet8A1BNU8pDvtmu.jpg",
  },
  {
    id: 11,
    title: "The Amateur",
    year: 2025,
    image: "/img/SNEoUInCa5fAgwuEBMIMBGvkkh.jpg",
  },
  {
    id: 12,
    title: "Jurassic World Rebirth",
    year: 2025,
    image: "/img/q0fGCmjLu42MPlSO9OYWpI5w86I.jpg",
  },
];

export const MovieService = {
  async list(): Promise<MovieDTO[]> {
    return movies;
  },
};