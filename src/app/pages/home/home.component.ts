import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { APIService } from '../../services/api.service';
import { Movie} from '../../interfaces/cartelera.interface';
import { PeliculasPosterComponent } from '../../components/peliculas-poster/peliculas-poster.component';
import { SlideshowComponent } from '../../components/slideshow/slideshow.component';

@Component({
  selector: 'app-home',
  imports: [CommonModule, SlideshowComponent, PeliculasPosterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{

  movies:Movie []=[];
  constructor(private apiServices: APIService ){}
  ngOnInit(): void {
    this.loadMovies();
  }

loadMovies(){
  this.apiServices.getCartelera().subscribe(res =>{
    console.log(res)
    this.movies = res;
   })
}
  

}
