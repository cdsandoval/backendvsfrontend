import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { TecnhologiesComponent } from './pages/tecnhologies/tecnhologies.component';
import { SearchComponent } from './pages/search/search.component';
import { TechnologyComponent } from './pages/technology/technology.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'technologies',
    component: TecnhologiesComponent,
  },
  {
    path: 'technology/:id',
    component: TechnologyComponent,
  },
  {
    path: 'search/:query',
    component: SearchComponent,
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'home',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
