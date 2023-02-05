export interface Painting {
  id?: string;
  title: string;
  artist: string;
  style: string;
  location: string;
  date: string;
  technique: Technique;
  url_img?: string;
  description: string;
}

export enum Technique {
  DCComics = 'Dc Comics',
  MarvelComics = 'Marvel Comics',
}

export interface User {
  id: number;
  user: string;
  email: string;
}
