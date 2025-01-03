import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BookListComponent implements OnInit {
  books?:Book[];
  
  constructor(private bookService: BookService){}

  deleteBook(id:number){
    if(confirm("Êtes-vous sûre de vouloir supprimer ce livre?"))
    {this.bookService.deleteBook(id);}
    //this.books=this.bookService.getBooks();
  }

  ngOnInit(): void {
    this.books=this.bookService.getBooks();
    this.bookService.booksEdited.subscribe(
      newBooks=> this.books=newBooks
    )
  }
}
