import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pelicula',
  imports: [],
  templateUrl: './pelicula.component.html',
  styleUrl: './pelicula.component.scss'
})
export class PeliculaComponent {
  id: string | undefined;

  constructor(private route: ActivatedRoute){}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id')!;
    console.log('ID:', this.id);
  }

}
