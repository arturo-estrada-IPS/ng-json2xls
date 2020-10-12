import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from './customers.data';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss'],
})
export class CustomersComponent {
  @Input() customers$: Observable<Customer[]>;
  @ViewChild('table', { static: true }) table: HTMLElement;
}
