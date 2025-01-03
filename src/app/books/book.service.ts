import { Injectable } from '@angular/core';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private books = [
    new Book(1,"Atomic Habits","James Clear",35),
    new Book(2,"Atomic Habits 2","James Clear",25),
    new Book(3,"Atomic Habits 3","James Clear",45)
  ];
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
}