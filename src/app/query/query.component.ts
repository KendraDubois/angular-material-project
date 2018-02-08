import { Component, OnInit } from '@angular/core';

import { Address } from '../address';

@Component({
  selector: 'app-query',
  templateUrl: './query.component.html',
  styleUrls: ['./query.component.css']
})
export class QueryComponent implements OnInit {

  address = new Address();
  constructor() { }

  ngOnInit() {
  }
  
  onSubmit() {
    alert("Thanks for submitting! Data: " + JSON.stringify(this.address));
  }

}
