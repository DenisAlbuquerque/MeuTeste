import { Categoria } from './categoria.model';

export class Filme {

  id                : string;
  backdrop_path     : string;
  homepage          : string;
  original_language : string;
  original_title    : string;
  overview          : string;
  popularity        : string;
  poster_path       : string;
  release_date      : string;
  genres            : Categoria[];

}
