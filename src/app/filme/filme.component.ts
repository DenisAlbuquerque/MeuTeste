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
  fonte: number = 16;

  constructor(private filmeService: FilmeService) {}

  ngOnInit() {

    this.getMovies();

    this.getGenreList();

    this.toggleContrast();

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

  aumentarFonte(){
    this.fonte = this.fonte + 2;
  }

  diminuirFonte(){
    this.fonte = this.fonte - 2;
  }

  restaurarFonte(){
    this.fonte = 16;
  }

  toggleContrast(){

    debugger
    var Contrast = {
      storage: 'contrastState',
      cssClass: 'contrast',
      currentState: null,
      check: checkContrast,
      getState: getContrastState,
      setState: setContrastState,
      toogle: toogleContrast,
      updateView: updateViewContrast
    };

    this.toggleContrast = function () { Contrast.toogle(); };

    Contrast.check();

    function checkContrast() {
        this.updateView();
    }

    function getContrastState() {
        return localStorage.getItem(this.storage) === 'true';
    }

    function setContrastState(state) {
        localStorage.setItem(this.storage, '' + state);
        this.currentState = state;
        this.updateView();
    }

    function updateViewContrast() {
        var body = document.body;

        if (this.currentState === null)
            this.currentState = this.getState();

        if (this.currentState)
            body.classList.add(this.cssClass);
        else
            body.classList.remove(this.cssClass);
    }

    function toogleContrast() {
        this.setState(!this.currentState);
    }
  }

}
