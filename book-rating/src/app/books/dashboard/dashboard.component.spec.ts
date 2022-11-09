import { Component, EventEmitter, Input, NO_ERRORS_SCHEMA, Output } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BookComponent } from '../book/book.component';
import { Book } from '../shared/book';
import { BookRatingService } from '../shared/book-rating.service';

import { DashboardComponent } from './dashboard.component';

// @Component({
//   selector: 'br-book',
//   template: '',
// })
// export class DummyBookComponent {
//   @Input() book?: Book;
//   @Output() rateUp = new EventEmitter<Book>();
//   @Output() rateDown = new EventEmitter<Book>();
// }

describe(DashboardComponent.name, () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let mock: jasmine.SpyObj<BookRatingService>;

  beforeEach(async () => {

    mock = jasmine.createSpyObj(BookRatingService.name, ['rateUp'])

    await TestBed.configureTestingModule({
      declarations: [
        DashboardComponent,
        BookComponent // Integration Test
      ],
      providers: [{
        provide: BookRatingService,
        useValue: mock
      }]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('rateUp() should forward all calls to BookRatingService', () => {

    const book = {} as Book;

    mock.rateUp.and.returnValue(book);
    component.doRateUp(book);
    expect(mock.rateUp).toHaveBeenCalledOnceWith(book);
  });
});
