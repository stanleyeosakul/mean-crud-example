import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BookService } from '../../services/book.service';
import { Book } from '../../models/Book';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styles: []
})
export class BookDetailComponent implements OnInit {

  book: any;

  constructor(private router: Router, private route: ActivatedRoute, private bookService: BookService) { }

  ngOnInit() {
    this.getBookDetails(this.route.snapshot.params['id']);
  }

  getBookDetails(id: string) {
    this.bookService.getBook(id)
      .subscribe((data: Book) => this.book = data);
  }

  deleteBook(id: string) {
    this.bookService.deleteBook(id)
      .subscribe((res: void) => { this.router.navigate(['/books']); }, (err) => console.log(err));
  }

}
