import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';



@Injectable({
  providedIn: 'root'
})
export class LocadoraService {
  URL_API: string = environment.basUrl
  apiKey: string = 'a5af780c7aaea135c9c3ddcf5b18b7cd'

  constructor(private http: HttpClient) { }

  getMovie(idMovie: string):Observable<any>{
    const params = new HttpParams().set('api_key', this.apiKey)
    return this.http.get(`${this.URL_API}movie/${idMovie}`, {params})
    //return this.http.get(`${this.URL_API}movie/${idMovie}?api_key=${this.apiKey}`)
  }
}
