import { Injectable } from '@angular/core';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookRatingService {

  readonly minRating = 1;
  readonly maxRating = 5;


  rateUp(book: Book): Book {
    if (book.rating < this.maxRating) {
      return {
        ...book,
        rating: book.rating + 1
      };
    }

    return book;
  }

  rateDown(book: Book): Book {
    if (book.rating > this.minRating) {
      return {
        ...book,
        rating: book.rating - 1
      };
    }

    return book;
  }
}
