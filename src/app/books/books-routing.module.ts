import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';
import { BookAddComponent } from './book-add/book-add.component';
import { BookEditComponent } from './book-edit/book-edit.component';

const routes: Routes = [
  //fergha path khater 3ibara ala page d'acceuil lel module hedha nhebouha tji par défaut book list
  {path:"",component:BookListComponent},
  {path:"add",component:BookAddComponent},
  {path:"edit",component:BookEditComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }
