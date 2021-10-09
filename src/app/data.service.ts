import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  customerData: any[];
  constructor() {
    this.customerData = [
      {
        firstname: 'Amr',
        lastname: 'Mohamed',
        email: 'amr.mohamed@gmail.com',
        gender: 'Male',
        adress: 'Haram st. - Giza',
        birthday: '1997-10-01',
      },
      {
        firstname: 'Laila',
        lastname: 'Ibrahim',
        email: 'laila.samir@gmail.com',
        gender: 'Female',
        adress: 'Maadi - Cairo',
        birthday: '2000-10-10',
      },
      {
        firstname: 'Omar',
        lastname: 'Haitham',
        email: 'omar.hanaai@gmail.com',
        gender: 'Male',
        adress: ' Fifth st. - New Cairo.',
        birthday: '1995-06-20',
      },
      {
        firstname: 'Salma',
        lastname: 'Omar',
        email: 'salma.omar@gmail.com',
        gender: 'Female',
        adress: 'Dokki - Giza',
        birthday: '1996-12-15',
      },
      {
        firstname: 'Mahmoud',
        lastname: 'Gamal',
        email: 'mahmoud.gamaleldin@gmail.com',
        gender: 'Male',
        adress: 'Tahrir Square - Cairo',
        birthday: '1990-09-25',
      },
    ];
  }
  onAddCustomer(data: any) {
    this.customerData.push(data);
  }
  onRemove(index: any) {
    this.customerData.splice(index, 1);
  }
  getData(index: any) {
    return this.customerData[index];
  }
}
