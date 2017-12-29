import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MongooseService, Book } from '../../services/mongoose.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  book: any;

  constructor(private router: Router, private route: ActivatedRoute, private mongoose: MongooseService) { }

  ngOnInit() {
    this.getBookDetails(this.route.snapshot.params['id']);
  }

  getBookDetails(id: string) {
    this.mongoose.getBook(id)
      .subscribe((data: Book) => this.book = data);
  }

  deleteBook(id: string) {
    this.mongoose.deleteBook(id)
      .subscribe((res: void) => { this.router.navigate(['/books']); }, (err) => console.log(err));
  }

}
