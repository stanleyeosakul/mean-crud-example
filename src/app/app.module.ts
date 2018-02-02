import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './Routing/app.routing.module';
import { CoreModule } from './Core/core.module';
import { BookModule } from './Book/book.module';
import { SharedModule } from './Shared/shared.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    CoreModule,
    BookModule,
    SharedModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
