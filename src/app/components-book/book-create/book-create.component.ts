import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MongooseService, Book } from '../../services/mongoose.service';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css']
})
export class BookCreateComponent {

  book: any = {};

  constructor(private router: Router, private mongoose: MongooseService) { }

  saveBook() {
    this.mongoose.insertBook(this.book)
      .subscribe((res: Book) => { this.router.navigate(['/books']); }, (err) => console.log(err));
  }
}
