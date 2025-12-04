import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-routing';

  price: number = 12345.6789;

  currentDate: Date = new Date();

  myObject: any = {
    name: 'John',
    age: 30,
    email: 'john@example.com',
  };
  myNumberPercent: number = 0.23;
  myString: string = 'This is a STRING in Mixed CASE';

  myArray: any[] = ['apple', 'banana', 'orange', 'grape', 'mango'];
  myString1: string = 'This is a long string.';

   myString3: string = 'this is a sentence in lowercase.';


    myObservable$: Observable<number> = of(42);
    myPromise$: Promise<string> = Promise.resolve('Hello World!');

    values: string[] = ['apple', 'banana', 'carrot', 'date'];
}
