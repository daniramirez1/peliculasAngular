import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { CarteleraResponse, Movie } from '../interfaces/cartelera.interface';
import { MovieDetails } from '../interfaces/details.interface';
import { captureError } from 'rxjs/internal/util/errorContext';
import { Cast, Credits } from '../interfaces/credits.interface';

@Injectable({
  providedIn: 'root'
})
export class APIService {
// se importa desdeapp.config.ts

//Se crea una constante donde se almacena la url
private URL = 'https://api.themoviedb.org/3';
private apiKey = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYzljM2JmMDMxNTFmNjZjNGY3OTMxZThmZjEyODFjMyIsIm5iZiI6MTc0MDYyOTYzOC4wNDQsInN1YiI6IjY3YmZlNjg2MDcyYTcwN2FlOTM1OTRkOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.l5WzAuPWMF5iSPLXmpTbRspPjN9Ahu72C53vV1k59Bw';
private headers = {Authorization:`Bearer ${this.apiKey}`};
  constructor(private httpClient: HttpClient) { }

  getCartelera(): Observable<Movie[]>{
    return this.httpClient.get<CarteleraResponse>(`${this.URL}/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`, {headers:this.headers}).pipe(
      map((response:any)=>response.results)
    )
  }

  peliculaDetalle(id:string){
    return this.httpClient.get<MovieDetails>(`${this.URL}/movie/${id}?language=es-ES`,{headers:this.headers}).pipe(
      catchError(err=> of(null))
    )
  }


  peliculaCreditos(id:string):Observable<Cast[] | null>{
    return this.httpClient.get<Credits>(`${this.URL}/movie/${id}/credits?language=es-ES`,{headers:this.headers}).pipe(

      map(res=>res.cast),
      catchError(err=> of(null))
      )

  }

}



