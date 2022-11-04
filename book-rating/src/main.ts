import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));



//////////////////////////

/*
class Customer {
  private id: number;

  constructor(id: number) {
    this.id = id;
  }

  // constructor(public id: number) {}

  fooBar(foo: string): string {

    setTimeout(() => {
      console.log('ID ist', this.id);
    }, 2000);

    return '';
  }
}



const myCustomer = new Customer(3);
console.log(myCustomer);
myCustomer.fooBar('');


const bar = function (param) {
  return param + 1;
}

const bar2 = param => param + 1;


let foo: number = 5;


bar('');
*/
