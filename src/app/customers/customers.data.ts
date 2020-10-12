import { Observable, of } from 'rxjs';

export interface Customer {
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  zipcode: string;
}

export const customers: Observable<Customer[]> = of([
  {
    firstName: 'Arturo',
    lastName: 'Estrada',
    email: 'arturo.estrada@ipointsystems.com',
    address: 'My Address',
    zipcode: '123456',
  },
  {
    firstName: 'Arturo',
    lastName: 'Estrada',
    email: 'arturo.estrada@ipointsystems.com',
    address: 'My Address',
    zipcode: '123456',
  },
  {
    firstName: 'Arturo',
    lastName: 'Estrada',
    email: 'arturo.estrada@ipointsystems.com',
    address: 'My Address',
    zipcode: '123456',
  },
  {
    firstName: 'Arturo',
    lastName: 'Estrada',
    email: 'arturo.estrada@ipointsystems.com',
    address: 'My Address',
    zipcode: '123456',
  },
]);
