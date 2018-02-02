import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '../Core/components/home/home.component';
import { BookComponent } from '../Book/components/book/book.component';
import { BookDetailComponent } from '../Book/components/book-detail/book-detail.component';
import { BookCreateComponent } from '../Book/components/book-create/book-create.component';
import { BookEditComponent } from '../Book/components/book-edit/book-edit.component';
import { NotFoundComponent } from '../Core/components/not-found/not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'books', component: BookComponent },
  { path: 'book-details/:id', component: BookDetailComponent },
  { path: 'book-create', component: BookCreateComponent },
  { path: 'book-edit/:id', component: BookEditComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
