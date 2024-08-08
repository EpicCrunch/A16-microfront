import { Routes } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { HomeComponent } from '../home/home.component';


export const MICROFRONT_ROUTES: Routes = [
    {
      path: '',
      redirectTo: 'search',
      pathMatch: 'full'
    },
    {
      path: 'search',
      component: SearchComponent
    },
    {
        path: 'Makelele',
        component: HomeComponent
      }
];