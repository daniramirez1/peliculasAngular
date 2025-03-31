import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { APIService } from '../../services/api.service';
import { combineLatest } from 'rxjs';
import { CommonModule } from '@angular/common';
import { MovieDetails } from '../../interfaces/details.interface';
import { Cast } from '../../interfaces/credits.interface';


@Component({
  selector: 'app-pelicula',
  imports: [CommonModule],
  templateUrl: './pelicula.component.html',
  styleUrl: './pelicula.component.scss'
})
export class PeliculaComponent implements OnInit {
  pelicula?: MovieDetails;
  cast : Cast[]=[];
  // id: string | undefined;

  constructor(private activatedRoute: ActivatedRoute, private peliculasSvc: APIService){}

    ngOnInit() {
      const {id} = this.activatedRoute.snapshot.params;

      combineLatest([

        this.peliculasSvc.peliculaDetalle(id),
        this.peliculasSvc.peliculaCreditos(id)

      ]).subscribe(([movie,cast])=>{

        if (movie === null || cast === null) {

          console.error('Error: La pelicula o el reparto no se encontraron');
          return;
          
        }

        this.pelicula= movie;
        this.cast = cast;
      // this.id = this.route.snapshot.paramMap
      // .get('id')!;
      // console.log('ID:', this.id);
    }
    
  )}
  regresar(){

    window.history.back();

  }

}
