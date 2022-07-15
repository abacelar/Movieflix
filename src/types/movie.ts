import { Genre } from "./genre";

export type Movie = {
    id: 1;
    title: string;
    subTitle: string;
    year: number;
    imgUrl: string;
    synopsis: string;
    genre: Genre;
}