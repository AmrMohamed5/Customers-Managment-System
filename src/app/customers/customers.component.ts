import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css'],
})
export class CustomersComponent implements OnInit {
  state = false;
  customerData: any = [];

  constructor(public dataService: DataService) {}

  ngOnInit(): void {
    this.customerData = this.dataService.customerData;
  }
  delete(index: number) {
    this.dataService.onRemove(index);
  }
}
