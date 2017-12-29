import { Component, OnInit } from '@angular/core';
import { MongooseService, Book } from '../../services/mongoose.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  books: any;

  constructor(private mongoose: MongooseService) { }

  ngOnInit() {
    this.mongoose.getAllBooks()
      .subscribe((data: Book[]) => this.books = data);
  }

}
