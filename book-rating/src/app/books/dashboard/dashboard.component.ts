import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Book } from '../shared/book';
import { BookRatingService } from '../shared/book-rating.service';
import { BookStoreService } from '../shared/book-store.service';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  // Achtung: bug sobald wir HTTP einführen!
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent {
  books: Book[] = [];

  constructor() {

  }

  doRateUp(book: Book) {
    // const ratedBook = this.rs.rateUp(book);
    // // const ratedBook = {
    // //   ...book,
    // //   rating: book.rating + 1
    // // }
    // this.updateList(ratedBook);
  }

  doRateDown(book: Book) {
    // const ratedBook = this.rs.rateDown(book);
    // this.updateList(ratedBook);
  }

  private updateList(ratedBook: Book) {
    // this.books = this.books
    //   .map(b => ratedBook.isbn === b.isbn ? ratedBook : b)
    //   .sort((a, b) => b.rating - a.rating)
  }
}
