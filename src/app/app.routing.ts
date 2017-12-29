import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components-utility/home/home.component';
import { BookComponent } from './components-book/book/book.component';
import { BookDetailComponent } from './components-book/book-detail/book-detail.component';
import { BookCreateComponent } from './components-book/book-create/book-create.component';
import { BookEditComponent } from './components-book/book-edit/book-edit.component';
import { NotFoundComponent } from './components-utility/not-found/not-found.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'books', component: BookComponent },
    { path: 'book-details/:id', component: BookDetailComponent },
    { path: 'book-create', component: BookCreateComponent },
    { path: 'book-edit/:id', component: BookEditComponent },
    { path: '**', component: NotFoundComponent }
];

export const AppRouting = RouterModule.forRoot(appRoutes);
