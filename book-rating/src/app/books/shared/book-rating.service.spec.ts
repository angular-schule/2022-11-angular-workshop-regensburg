import { Book } from './book';
import { BookRatingService } from './book-rating.service';

fdescribe('BookRatingService', () => {
  let service: BookRatingService;
  let book: Book;

  beforeEach(() => {
    service =  service = new BookRatingService();
    book = {
      isbn: '000',
      title: 'Test',
      description: 'Test',
      rating: 3,
      price: 9
    }
  });

  // JIRA-123
  it('should rate up a book by one', () => {
    const ratedBook = service.rateUp(book);
    expect(ratedBook.rating).toBe(4);
  });

  it('should rate down a book by one', () => {
    const ratedBook = service.rateDown(book);
    expect(ratedBook.rating).toBe(2);
  });

  it('should not be allowed to have a rating greater than 5', () => {
    book.rating = 5;
    const ratedBook = service.rateUp(book);
    expect(ratedBook.rating).toBe(5)
  });

  it('should not be allowed to have a rating smaller than 1', () => {
    book.rating = 1;
    const ratedBook = service.rateDown(book);
    expect(ratedBook.rating).toBe(1)
  });

  it('should not mutate the book', () => {
    const frozenBook = Object.freeze(book);
    expect(() => service.rateUp(frozenBook)).not.toThrow();
    expect(() => service.rateDown(frozenBook)).not.toThrow();
  });
});
