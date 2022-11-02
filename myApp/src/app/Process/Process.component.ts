import { Component, OnInit } from '@angular/core';
import { PipeTransform } from "@angular/core";

@Component({
  selector: 'app-process',
  templateUrl: './process.component.html',
  styleUrls: ['./process.component.css']
})

export class ProcessComponent implements OnInit {

   //searchTerm:"vikas"
   searchText='';

  constructor() { }

  ngOnInit(): void {

    // this.customers = this.customers.filter(
    //   book => book.name === this.search);
      
  }
  
      
}
