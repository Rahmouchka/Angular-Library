import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrl: './book-edit.component.css'
})
export class BookEditComponent implements OnInit{
  book?:Book;
  constructor(
    private activeRoute:ActivatedRoute,
    private bookService:BookService,
    private router:Router
  ){}

  editBook(){
    //j'ai pas besoin d'entrer le paramètre f:NgForm car le livre va etre modifié automatiquement grace au two way data binding
    this.bookService.editBook(this.book!);
    this.router.navigate(['/books']);
  }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(
      parametres=>{
        if(this.bookService.getBookById(+parametres['id']) !== undefined){
          this.book = this.bookService.getBookById(+parametres['id']);
          console.log(this.book);
        }
          
        else
          console.log("Le livre est introuvable");
      }       
    ) 
  }
}
