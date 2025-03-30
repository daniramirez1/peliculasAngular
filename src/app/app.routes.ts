import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PeliculaComponent } from './pages/pelicula/pelicula.component';

export const routes: Routes = [
    {path:'home', component:HomeComponent},
    {path:'pelicula/:id', component:PeliculaComponent},
    {path:'', pathMatch:'full', redirectTo:'/home'},
    {path:'**', redirectTo:'/home'}

];
