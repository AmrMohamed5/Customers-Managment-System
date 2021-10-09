import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css'],
})
export class CustomerDetailsComponent implements OnInit {
  customer: any = {};
  id: any;
  customerState = false;

  constructor(public dataService: DataService) {}

  ngOnInit(): void {
    this.customer = {};
    this.customerState = true;
  }
  onSubmit() {
    this.dataService.onAddCustomer(this.customer);
  }
}
