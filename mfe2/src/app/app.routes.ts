import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";

export const APP_ROUTES: Routes = [
    {
        path:'',
        component:HomeComponent,
        pathMatch:'full'
    },
    {
        path:'MF2',
        loadChildren:() => import('./microfront/microfront.module').then(m => m.MicrofrontModule)
    }
]