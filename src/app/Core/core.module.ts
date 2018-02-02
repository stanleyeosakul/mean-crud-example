import { NgModule } from '@angular/core';
import { SharedModule } from '../Shared/shared.module';

import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    HomeComponent,
    NotFoundComponent
  ]
})
export class CoreModule { }
