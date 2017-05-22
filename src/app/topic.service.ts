import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Topic } from './topic';
import { Comment } from './comment';

@Injectable()
export class TopicService {
  private baseApiUrl = 'https://www.v2ex.com/api';

  constructor(private http: Http) { }

  fetchTopic(type: String): Promise<Topic[]> {
    let url = `${this.baseApiUrl}/topics/show.json?node_name=${type}`;
    if (type === 'hot' || type === 'latest') {
      url = `${this.baseApiUrl}/topics/${type}.json`;
    }
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

  fetchComment(id: number): Promise<Comment[]> {
    const url = `${this.baseApiUrl}/replies/show.json?topic_id=${id}`;
    return this.http.get(url)
      .toPromise()
      .then(res => res.json() as Comment[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
