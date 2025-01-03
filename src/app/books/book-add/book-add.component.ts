import { Component } from '@angular/core';
import { BookService } from '../book.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html',
  styleUrl: './book-add.component.css'
})
export class BookAddComponent {
  constructor(
    private bookService:BookService,
    private router:Router
  ){}
  addBook(f:NgForm){
    //console.log(f)
    this.bookService.addBook(f.value.title,f.value.author,f.value.price);
    this.router.navigate(["/books"]) //il l'enregistre sous books
  }
}
