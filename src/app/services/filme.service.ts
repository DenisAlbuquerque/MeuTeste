import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilmeService {

  URL_API: string = environment.basUrl
  apiKey: string = 'a5af780c7aaea135c9c3ddcf5b18b7cd'

  // Os outros retornos comentados em cada metodo são outra maneira de fazer,
  // mas utilizo params, acho que fica mais oraganizado

  constructor(private http: HttpClient) { }

  //Retorna uma lista de todos os filmes
  getMovieList():Observable<any>{
    const params = new HttpParams().set('api_key', this.apiKey)
                                   .set('sort_by','popularity.desc');
    return this.http.get(`${this.URL_API}discover/movie`, {params});
    //return this.http.get(`${this.URL_API}discover/movie?sort_by=popularity.desc?api_key=${this.apiKey}`)
  }

  //Retorna um Filme especifico buscando pelo id do filme
  getMovie(idMovie: string):Observable<any>{
    const params = new HttpParams().set('api_key', this.apiKey);
    return this.http.get(`${this.URL_API}movie/${idMovie}`, {params});
    //return this.http.get(`${this.URL_API}movie/${idMovie}?api_key=${this.apiKey}`)
  }

  //Retorna um Filme especifico buscando por uma palavra no titulo do filme
  getMovieSearch(query: string):Observable<any>{
    const params = new HttpParams().set('api_key', this.apiKey)
                                   .set('query', query);
    return this.http.get(`${this.URL_API}movie`, {params});
    //return this.http.get(`${this.URL_API}movie?query=${query}&api_key=${this.apiKey}`)
  }

  //Retorna uma lista de todos as categorias de filmes
  getGenreList():Observable<any>{
    const params = new HttpParams().set('api_key', this.apiKey);
    return this.http.get(`${this.URL_API}genre/movie/list`, {params});
    //return this.http.get(`${this.URL_API}genre/movie/list?api_key=${this.apiKey}`)
  }

  //Retorna uma lista de Filmes buscando pelo id da categoria
  getGenre(idGenre: string):Observable<any>{
    const params = new HttpParams().set('api_key', this.apiKey)
                                   .set('with_genres', idGenre);
    return this.http.get(`${this.URL_API}discover/movie`, {params});
   // return this.http.get(`${this.URL_API}discover/movie?api_key=${this.apiKey}&with_genres=${idGenre}`)
  }




}
