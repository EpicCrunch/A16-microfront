import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { loadRemoteModule } from "@angular-architects/module-federation";

export const APP_ROUTES: Routes = [
    {
      path: '',
      component: HomeComponent,
      pathMatch: 'full'
    },
    {
      path: 'MF1',
      loadChildren: () => loadRemoteModule({
          type: 'manifest',
          remoteName: 'mfe1',
          exposedModule: './Module'
        })
        .then(m => m.MicrofrontModule)
    },
    {
      path: 'MF2',
      loadChildren: () => loadRemoteModule({
          type: 'manifest',
          remoteName: 'mfe2',
          exposedModule: './Module'
        })
        .then(m => m.MicrofrontModule)
    },
];