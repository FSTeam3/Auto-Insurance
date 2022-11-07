import { Component, Input, OnInit } from '@angular/core';
import { PipeTransform } from "@angular/core";
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-process',
  templateUrl: './process.component.html',
  styleUrls: ['./process.component.css']
})

export class ProcessComponent implements OnInit {
  [x: string]: any;

   //searchTerm:"vikas"
   searchText='';
   fname="";
   lastname ="";
   qemail ="";
phoneno="";
state ="";
zip="";

  constructor(private toaster:ToastrService) { }

  ngOnInit(): void {

    // this.customers = this.customers.filter(
    //   book => book.name === this.search);
      
  }

    ClickEvent(){
    // this.toaster.success(this.fname) 
    
   if (this.fname =="") {
    this.toaster.error("First Name cannot be blank")
   }
  //  else if (this.qemail =="") {
  //   this.toaster.error("Email cannot be blank")
  //  }
   else if (this.phoneno =="") {
    this.toaster.error("Phone-no cannot be blank")
   }
    else if (this.state =="") {
    this.toaster.error("State cannot be blank")
   }
   else if (this.zip =="") {
    this.toaster.error("Zip no cannot be blank")
   }
   else
   this.toaster.success("Details Submitted Sucessfully")
  }
    // var fname:any = this.firstname 
    // if ()
      
}
