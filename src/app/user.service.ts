import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { User } from './user';

@Injectable()
export class UserService {
  private baseApiUrl = 'https://www.v2ex.com/api';

  constructor(private http: Http) { }

  fetchUser(username: String): Promise<User> {
    const url = `${this.baseApiUrl}/members/show.json?username=${username}`;
    return this.http.get(url)
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
