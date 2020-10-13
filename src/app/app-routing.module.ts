import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { AddBookComponent } from './bookpages/add-book/add-book.component';
import { BooklistComponent } from './bookpages/booklist/booklist.component';
import { EditbookComponent } from './bookpages/editbook/editbook.component';

const routes: Routes = [
  { path: 'booklist', component: BooklistComponent },
  { path: 'addBook', component: AddBookComponent },
  { path: 'editbook', component: EditbookComponent },
  { path: '', redirectTo: 'booklist', pathMatch: 'full' },
  { path: '**', redirectTo: 'booklist', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
