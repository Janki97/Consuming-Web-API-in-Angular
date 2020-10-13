import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BookService } from 'src/app/shared/book.service';
import { bookdata } from 'src/model/bookdata';


@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  message:string;
  addForm: FormGroup;
  constructor(private formBuilder: FormBuilder,private router: Router,private bookservice:BookService) { }

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      ID: ['', Validators.required],
      Title: ['', [Validators.required,Validators.maxLength(50)]],
      PublishDate: ['', Validators.required],
      PageCount: ['', Validators.required],
      Description: ['', [Validators.required,Validators.maxLength(500)]],
      Excerpt: ['', [Validators.required,Validators.maxLength(500)]]
    });
  }
  
  // getModel() {
  //   return {
  //     ID: this.addForm.get('ID').value,
  //     Title: this.addForm.get('Title').value,
  //     PublishDate:new Date(),
  //     PageCount: this.addForm.get('PageCount').value,
  //     Description: this.addForm.get('Description').value,
  //     Excerpt:  this.addForm.get('Excerpt').value,
  //   } as bookdata;
  // }
  onSubmit() {


    this.bookservice.addBook(this.addForm.value)
      .subscribe( data => {

        console.log(data);
        this.message="Data Save successfully";
        this.router.navigate(['booklist']);
      });
  }
 
}
