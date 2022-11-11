import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromBook from './book.reducer';

export const selectBookState = createFeatureSelector<fromBook.State>(
  fromBook.bookFeatureKey
);

export const selectLoading = createSelector(
  selectBookState,
  ({ loading }) => loading
);

export const selectBooks = createSelector(
  selectBookState,
  ({ books }) => books
);

// computed selector (nur Beispiel)
export const selectFirstBook = createSelector(
  selectBooks,
  state => state.length ? state[0] : null
);
