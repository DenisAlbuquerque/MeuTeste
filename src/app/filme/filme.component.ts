import { Component, OnInit } from '@angular/core';
import { Filme } from '../model/filme.model';
import { FilmeService } from '../services/filme.service';
import { Categoria } from '../model/categoria.model';

@Component({
  selector: 'app-filme',
  templateUrl: './filme.component.html',
  styleUrls: ['./filme.component.css']
})
export class FilmeComponent implements OnInit {

  filme : Filme;
  filmes: Filme[];
  categorias : Categoria[];

  constructor( private filmeService: FilmeService) { }

  ngOnInit() {

    this.filmeService.getMovieList().subscribe(res => {
      this.filmes = res;
      console.log(this.filmes);
    })

    this.filmeService.getMovie('550').subscribe(res=>{
      this.filme = res;
      console.log(this.filme);
    })

    this.filmeService.getMovieSearch('Psycho-Therapy').subscribe(res => {
      this.filme = res;
      console.log(this.filme);
    })

    this.filmeService.getGenreList().subscribe(res => {
      this.categorias = res;
      console.log(this.categorias);
    })

    this.filmeService.getGenre('18').subscribe(res => {
      this.filmes = res;
      console.log(this.filmes);
    })

  }

}
