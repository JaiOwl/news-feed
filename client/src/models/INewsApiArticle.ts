import { INewsApiSource } from './INewsApiSource';

export interface INewsApiArticle {
  source: INewsApiSource;
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
}