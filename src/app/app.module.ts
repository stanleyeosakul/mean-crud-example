import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRouting } from './app.routing';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components-utility/home/home.component';
import { NavbarComponent } from './components-utility/navbar/navbar.component';
import { NotFoundComponent } from './components-utility/not-found/not-found.component';
import { BookComponent } from './components-book/book/book.component';
import { BookDetailComponent } from './components-book/book-detail/book-detail.component';
import { BookCreateComponent } from './components-book/book-create/book-create.component';
import { BookEditComponent } from './components-book/book-edit/book-edit.component';

import { MongooseService } from './services/mongoose.service';

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    HomeComponent,
    NavbarComponent,
    NotFoundComponent,
    BookDetailComponent,
    BookCreateComponent,
    BookEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRouting
  ],
  providers: [MongooseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
