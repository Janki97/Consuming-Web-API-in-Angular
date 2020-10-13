import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { BookService } from 'src/app/shared/book.service';

@Component({
  selector: 'app-editbook',
  templateUrl: './editbook.component.html',
  styleUrls: ['./editbook.component.css']
})
export class EditbookComponent implements OnInit {

  editForm: FormGroup;
  constructor(private formBuilder: FormBuilder,private router: Router,private bookservice:BookService) { }

  ngOnInit() {

    let userId = window.localStorage.getItem("editBookId");
    if(!userId) {
      alert("Invalid action.")
      this.router.navigate(['booklist']);
      return;
    }
    this.editForm = this.formBuilder.group({
      ID: ['', Validators.required],
      Title: ['', [Validators.required,Validators.maxLength(50)]],
      PublishDate: ['', Validators.required],
      PageCount: ['', Validators.required],
      Description: ['', [Validators.required,Validators.maxLength(500)]],
      Excerpt: ['', [Validators.required,Validators.maxLength(500)]]
    });
    this.bookservice.getBookById(+userId)
      .subscribe( data => {
        this.editForm.setValue(data);
      });
  }

  onSubmit() {

    this.bookservice.updateBook(this.editForm.value)
      .pipe(first())
      .subscribe(
        data => {
          if(data) {
            console.log(data);
            alert('Book updated successfully.');
            this.router.navigate(['booklist']);
          }else {
            alert('Server error, please try again.');
          }
        },
        error => {
          alert(error);
        });
  }
}
