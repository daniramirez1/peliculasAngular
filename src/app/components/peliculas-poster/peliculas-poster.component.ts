import { Component, Input } from '@angular/core';
import { Movie } from '../../interfaces/cartelera.interface';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-peliculas-poster',
  imports: [CommonModule],
  templateUrl: './peliculas-poster.component.html',
  styleUrl: './peliculas-poster.component.scss'
})
export class PeliculasPosterComponent {
  @Input() movies?:Movie[];

  constructor(private router:Router){}

  onMovieClick(movie:Movie){
    this.router.navigate(['/pelucula', movie.id])
  }

}
