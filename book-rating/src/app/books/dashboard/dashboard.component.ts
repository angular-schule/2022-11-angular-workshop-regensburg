import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';

import { Book } from '../shared/book';
import { selectBooks, selectLoading } from '../store/book.selectors';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent {

  books$ = inject(Store).select(selectBooks);
  loading$ = inject(Store).select(selectLoading);


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
