import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { RouterModule } from '@angular/router';
import { MICROFRONT_ROUTES } from './microfront.routes';



@NgModule({
  declarations: [
    SearchComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(MICROFRONT_ROUTES)
  ]
})
export class MicrofrontModule { }
