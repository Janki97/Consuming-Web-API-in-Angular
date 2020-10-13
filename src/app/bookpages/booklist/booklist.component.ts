import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from 'src/app/shared/book.service';
import { bookdata } from 'src/model/bookdata';


@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})
export class BooklistComponent implements OnInit {
  p:number=1;
  pageTitle="Book List"
  bookList=[];
  books: bookdata[];
  message:string;
  data1:object;
  constructor(private _http: HttpClient,private router: Router,private bookservice:BookService) { }
  
      ngOnInit(): void {
        this.bookservice.getBook().subscribe(data => {
          this.bookList=data;
      });  
      } 

      editBook(book: bookdata): void {
        window.localStorage.removeItem("editBookId");
        window.localStorage.setItem("editBookId", book.ID.toString());
        this.router.navigate(['editbook']);
      };
    
      onDelete(book:bookdata):void {
        if (confirm('Are you sure you would like to delete book?')) {
          this.bookservice.deleteBook(book.ID).subscribe(data => {
            this.bookList = this.bookList.filter(b=>b !== book);
            if(data) {
              console.log(data);
              this.router.navigate(['booklist']);
            }else {
              alert('Book Deleted successfully.');
            }
          });
        }
      } 
      
}
