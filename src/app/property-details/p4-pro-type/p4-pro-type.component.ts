import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-p4-pro-type',
  templateUrl: './p4-pro-type.component.html',
  styleUrls: ['./p4-pro-type.component.css']
})
export class P4ProTypeComponent implements OnInit {
  proTypeForm:FormGroup;
  pro_id:string="";
  pro_type:string="";
  type:string="";
  owner_name:string="";
  owner_mob:string="";
  adhar:string="";
  roof_type:string="";
  total_floor:string="";
  length:string="";
  breadth:string="";
  area1:string="";
  area2:string="";
  constructor(private frmbuilder:FormBuilder, private http:HttpClient ,private router: Router) {
    this.proTypeForm = this.frmbuilder.group({
      pro_id: new FormControl(),
      pro_type: new FormControl(),
      type: new FormControl(),
      owner_name: new FormControl(),
      owner_mob: new FormControl(),
      adhar: new FormControl(),
      roof_type: new FormControl(),
      total_floor: new FormControl(),
      length: new FormControl(),
      breadth: new FormControl(),
      area1: new FormControl(),
      area2: new FormControl()
    });
   }

  ngOnInit(): void {
  }
proTypeData(proTypeForm:any){
  this.router.navigate(['/property_details/house-shop']);
}
}
