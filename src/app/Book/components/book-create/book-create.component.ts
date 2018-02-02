import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../../services/book.service';
import { Book } from '../../models/Book';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styles: []
})
export class BookCreateComponent {

  book: any = {};

  constructor(private router: Router, private bookService: BookService) { }

  saveBook() {
    this.bookService.insertBook(this.book)
      .subscribe((res: Book) => { this.router.navigate(['/books']); }, (err) => console.log(err));
  }
}
