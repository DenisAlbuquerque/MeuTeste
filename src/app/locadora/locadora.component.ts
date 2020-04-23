import { Component, OnInit } from '@angular/core';
import { LocadoraService } from '../services/locadora.service';

@Component({
  selector: 'app-locadora',
  templateUrl: './locadora.component.html',
  styleUrls: ['./locadora.component.css']
})
export class LocadoraComponent implements OnInit {

  constructor(private service: LocadoraService) { }

  ngOnInit() {
    this.service.getMovie('550').subscribe(res=>{
      console.log(res)
    })
  }

}
