import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlanetsService {
    array;
  _baseUrl = 'https://swapi.co/api/';
  constructor(private http: HttpClient) { }

  exportPlanets(type:string) {
      const httpOptions = {
          headers: new HttpHeaders({
              "Access-Control-Allow-Origin": "*",
              "Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT",
              "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept, Authorization",

          })
      };
      console.log('Was send request for API');
      return this.http.get(`${this._baseUrl}${type}`);
  }
}
