import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-books-stats',
  templateUrl: './books-stats.component.html',
  styleUrl: './books-stats.component.css'
})
export class BooksStatsComponent implements OnInit{
  books?:Book[];

  constructor(
    private bookService:BookService
  ){}
  ngOnInit(): void {
    this.books= this.bookService.getBooks();
    this.bookService.booksEdited.subscribe(
      newBooks=>this.books=newBooks
    );
  }
}
