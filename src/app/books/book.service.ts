import { Injectable } from '@angular/core';
import { Book } from './book';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private books = [
    new Book(1,"Atomic Habits","James Clear",35),
    new Book(2,"Atomic Habits 2","James Clear",25),
    new Book(3,"Atomic Habits 3","James Clear",45)
  ];

  booksEdited=new Subject<Book[]>;

  constructor() { }
  getBooks(){
    //return this.books;
    //c mieux nraj3elha copie mtaa tableau snn khsart encapsulation
    return [...this.books];
  }
  addBook(title:string,author:string,price:number){
    const newBook=new Book(
      this.books[this.books.length-1].id +1,
      title,
      author,
      price
    );
    this.books=[...this.books,newBook]
  }

  getBookById(id: number) : Book | undefined{
    return this.books.find(book=>book.id === id)
  }

  editBook(book:Book){
    this.books=this.books.map(
      b=>b.id === book.id?book:b
    )
  }

  deleteBook(id:number){
    this.books = this.books.filter(book=>book.id!==id);
    this.booksEdited.next([...this.books]);
  }
}
