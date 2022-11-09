import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from '../shared/book';

@Component({
  selector: 'br-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent {

  @Input()
  private _book?: Book | undefined;
  public get book(): Book | undefined {
    return this._book;
  }
  public set book(value: Book | undefined) {
    this._book = value;
    //irgendeine Prüfung
    this.supermodus = false;
  }

  @Output() rateUp = new EventEmitter<Book>();
  @Output() rateDown = new EventEmitter<Book>();



  doRateUp() {
    this.rateUp.emit(this.book);
  }

  doRateDown() {
    this.rateDown.emit(this.book);
  }
}
