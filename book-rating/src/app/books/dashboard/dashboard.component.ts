import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Book } from '../shared/book';
import { BookRatingService } from '../shared/book-rating.service';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  // Achtung: bug sobald wir HTTP einführen!
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent {
  books: Book[] = [];

  constructor(private rs: BookRatingService) {
    this.books = [
      {
        isbn: '123',
        title: 'Angular',
        description: 'Grundlagen und mehr',
        price: 36.9,
        rating: 5
      },
      {
        isbn: '456',
        title: 'Vue.js',
        description: 'Das grüne Framework',
        price: 32.9,
        rating: 3
      },
      {
        isbn: '121',
        title: 'jQuery',
        description: 'Veraltet',
        price: 9,
        rating: 1
      }
    ];

    // setInterval(() => this.books = [], 1000)
  }

  doRateUp(book: Book) {
    const ratedBook = this.rs.rateUp(book);
    // const ratedBook = {
    //   ...book,
    //   rating: book.rating + 1
    // }
    this.updateList(ratedBook);
  }

  doRateDown(book: Book) {
    const ratedBook = this.rs.rateDown(book);
    this.updateList(ratedBook);
  }

  private updateList(ratedBook: Book) {
    this.books = this.books
      .map(b => ratedBook.isbn === b.isbn ? ratedBook : b)
      .sort((a, b) => b.rating - a.rating)
  }
}
