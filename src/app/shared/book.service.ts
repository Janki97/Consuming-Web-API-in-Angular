import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs/internal/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { bookdata } from 'src/model/bookdata';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  rootUrl:string ='https://fakerestapi.azurewebsites.net/api/Books';
  

  constructor(private http: HttpClient) { }
  
  getBook(){
    return this.http.get(this.rootUrl).pipe(map(x=>{
      return JSON.parse(JSON.stringify(x));
    }));
  }

  getBookById(id: number): Observable<bookdata> {
    return this.http.get<bookdata>(this.rootUrl + '/' + id);
  }

  deleteBook(id:number): Observable<boolean>{
    let headers = new HttpHeaders();
    headers = headers.set('Accept', 'Application/json');
    headers = headers.set('Content-Type', 'Application/json');
    return this.http.delete<boolean>(this.rootUrl+ "/" +id,{headers: headers});
  }
  
  updateBook(book: bookdata): Observable<boolean> {
    return this.http.put<boolean>(this.rootUrl  + '/' +  book.ID, book);
  }

  addBook(data:bookdata){
    return this.http.post(this.rootUrl,data).pipe(map(x=>{
      return JSON.parse(JSON.stringify(x));
    }));
  }
}
