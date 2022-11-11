import { HttpErrorResponse } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { catchError, concatMap, map, mergeAll, mergeMap, of, share, shareReplay, switchMap } from 'rxjs';
import { BookStoreService } from '../shared/book-store.service';

@Component({
  selector: 'br-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent {

  open = false;
  bs = inject(BookStoreService);

  book$ = inject(ActivatedRoute).paramMap.pipe(
    map(paramMap => paramMap.get('isbn')!),
    switchMap(isbn => this.bs.getSingle(isbn).pipe(
      catchError((err: HttpErrorResponse) => of({
        title: 'FEHLER',
        price: 0,
        description: err.message
      }))
    ))
  );
}
