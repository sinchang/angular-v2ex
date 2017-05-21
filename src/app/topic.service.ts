import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Topic } from './topic';

@Injectable()
export class TopicService {
  private baseApiUrl = 'https://www.v2ex.com/api';

  constructor(private http: Http) { }

  fetchTopic(type: String): Promise<Topic[]> {
    const url = `${this.baseApiUrl}/topics/${type}.json`;
    return this.http.get(url)
      .toPromise()
      .then(res => res.json() as Topic[])
      .catch(this.handleError);
  }

  fetchDetail(id: number): Promise<Topic> {
    const url = `${this.baseApiUrl}/topics/show.json?id=${id}`;
    return this.http.get(url)
      .toPromise()
      .then(res => res.json()[0] as Topic)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
