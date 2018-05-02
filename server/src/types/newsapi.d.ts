declare module 'newsapi' {
  export default NewsAPI;

  export interface INewsApiSource {
    id: string;
    name: string;
  }

  export interface INewsApiArticle {
    source: INewsApiSource;
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
  }

  export interface INewsApiResponse {
      status: string;
      totalResults: number;
      articles: Array<INewsApiArticle>;
  }

  export class NewsAPI {
    constructor ( apiKey: string );

    public v2: {
      topHeadlines ( options?: {
        sources?: string,
        q?: string,
        category?: string,
        language?: string,
        country?: string,
        pageSize?: number,
        page?: number
      } ): Promise<INewsApiResponse>
    };
  }
}
