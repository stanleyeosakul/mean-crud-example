import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MongooseService, Book } from '../../services/mongoose.service';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {

  book: any;

  constructor(private router: Router, private route: ActivatedRoute, private mongoose: MongooseService) { }

  ngOnInit() {
    this.getBookDetails(this.route.snapshot.params['id']);
  }

  getBookDetails(id: string) {
    this.mongoose.getBook(id)
      .subscribe((data: Book) => this.book = data);
  }

  updateBook(id: string) {
    this.mongoose.updateBook(id, this.book)
      .subscribe((res: void) => this.router.navigate(['/books']), (err) => console.log(err));
  }

}
