import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BooklistComponent } from './bookpages/booklist/booklist.component';
import {NgxPaginationModule} from'ngx-pagination';
import { from } from 'rxjs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddBookComponent } from './bookpages/add-book/add-book.component';
import { EditbookComponent } from './bookpages/editbook/editbook.component';


@NgModule({
  declarations: [
    AppComponent,
    BooklistComponent,
    AddBookComponent,
    EditbookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
