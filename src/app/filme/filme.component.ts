import { Component, OnInit } from "@angular/core";
import { environment } from "src/environments/environment";

import { Filme } from "../model/filme.model";
import { FilmeService } from "../services/filme.service";
import { Categoria } from "../model/categoria.model";

@Component({
  selector: "app-filme",
  templateUrl: "./filme.component.html",
  styleUrls: ["./filme.component.css"],
})
export class FilmeComponent implements OnInit {
  urlImage: string = environment.urlImage;

  filme: Filme;
  filmes: Filme[] = new Array<Filme>();
  categorias: Categoria[];

  constructor(private filmeService: FilmeService) {}

  ngOnInit() {

    this.getMovies();

    this.getGenreList();

    /*
    this.filmeService.getMovie('550').subscribe(res=>{
      this.filme = res;
      console.log(this.filme);
    })

    this.filmeService.getGenreList().subscribe(res => {
      this.categorias = res;
      console.log(this.categorias);
    })

  */

  }

  search(titulo: string) {
    console.log(titulo)
    if(titulo){
      this.filmeService.getMovieSearch(titulo).subscribe((res) => {
        this.filmes = res.results;
      });
    }else{
      this.getMovies();
    }

  }

  getMovies(){
    this.filmeService.getMovieList().subscribe((res) => {
      this.filmes = res.results;
    });
  }

  getGenreList(){
    this.filmeService.getGenreList().subscribe(res => {
      this.categorias = res.genres;
      console.log(res)
    })
  }

  getGenre(genreId: string){
    console.log(genreId)
    this.filmeService.getGenre(genreId).subscribe(res => {
      this.filmes = res.results;
    })
  }

}
