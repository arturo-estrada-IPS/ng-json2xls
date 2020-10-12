import { Component } from '@angular/core';
import { customers } from './customers/customers.data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  customers$ = customers;
}
