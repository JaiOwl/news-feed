import debug from 'debug';

import NewsApi, { INewsApiResponse } from 'newsapi';
import { INewsApiArticle } from 'newsapi';

const debugLogger = debug('debug:NewsApiOrgClient');
const infoLogger = debug('info:NewsApiOrgClient');
const warnLogger = debug('warn:NewsApiOrgClient');
const errorLogger = debug('error:NewsApiOrgClient');

export interface INewsApiRequestOptions {
  queryString?: string;
  sources?: Array<any>;
  categories?: Array<any>;
  languages?: Array<any>;
}

export class NewsApiOrgClient {
  private newsApiClient: NewsApi;

  constructor (apiKey: string) {
    this.newsApiClient = new NewsApi(apiKey);
  }

  public async getTopHeadlines (
    options?: INewsApiRequestOptions ): Promise< Array<INewsApiArticle> > {
    let newsArticles: Array<INewsApiArticle> = [];

    try {
      debugLogger(`Sending request for TopHeadlines with q:'${options.queryString}'`);
      const response: INewsApiResponse = await this.newsApiClient.v2.topHeadlines (
        {
          q: options.queryString,
          country: 'gb'
        }
      );
      debugLogger(`Response for TopHeadlines with q:'${options.queryString} => ${response.status}'`, response);
      if (response.status === 'ok') {
        // success
        newsArticles = [...response.articles];
      } else {
        // failed
        throw new Error(`Failed Server Response for TopHeadlines => ${response.status}`);
      }
    } catch (error) {
      warnLogger(`Failed Server Request for TopHeadlines with q:'${options.queryString} => ${error}`);
      throw error;
    }

    return newsArticles;
  }
}
