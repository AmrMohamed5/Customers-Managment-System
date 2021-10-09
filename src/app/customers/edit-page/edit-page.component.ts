import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.css'],
})
export class EditPageComponent implements OnInit {
  customer: any = {};
  id: any;

  constructor(
    public dataService: DataService,
    public routeID: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.customer = {};
    this.id = this.routeID.snapshot.paramMap.get('id');
    this.customer = this.dataService.getData(this.id);
  }
}
