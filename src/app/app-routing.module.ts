import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieAddComponent } from './movie-add/movie-add.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieSearchComponent } from './movie-search/movie-search.component';
import { ReportComponent } from './report/report.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'movies', component: MoviesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: MovieDetailComponent },
  { path: 'movie-add', component: MovieAddComponent },
  { path: 'movie-search', component: MovieSearchComponent },
  { path: 'report', component: ReportComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
