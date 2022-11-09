import { Component, OnInit } from '@angular/core';
import { Book } from '../shared/book';
import { BookRatingService } from '../shared/book-rating.service';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
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
      }
    ];
  }

  doRateUp(book: Book) {
    const ratedBook = this.rs.rateUp(book);
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
