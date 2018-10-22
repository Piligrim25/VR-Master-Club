import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getGames() {
    return this.http.get('https://jsonplaceholder.typicode.com/users')
  }

  getGame(gameId) {
    return this.http.get('https://jsonplaceholder.typicode.com/users/'+gameId)
  }

  getOrders() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
  }
}
