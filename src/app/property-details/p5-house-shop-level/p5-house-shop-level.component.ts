import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-p5-house-shop-level',
  templateUrl: './p5-house-shop-level.component.html',
  styleUrls: ['./p5-house-shop-level.component.css']
})
export class P5HouseShopLevelComponent implements OnInit {
  HouseShopForm:FormGroup;
  pro_id:string="";
  dwelling:string="";
  shops:string="";
  pro_details:string="";
  type:string="";
  shop_house_no:string="";
  ownership:string="";
  door_no:string="";
  foill_no:string="";
  rr_no:string="";
  water_conn:string="";
  floor_type:string="";
  wood_type:string="";

  constructor(private frmbuilder:FormBuilder, private http:HttpClient ,private router: Router) {
    this.HouseShopForm = this.frmbuilder.group({
      pro_id: new FormControl(),
      dwelling: new FormControl(),
      shops: new FormControl(),
      pro_details: new FormControl("",Validators.required),
      type: new FormControl("",Validators.required),
      shop_house_no: new FormControl(),
      ownership: new FormControl("",Validators.required),
      door_no: new FormControl(),
      foill_no: new FormControl(),
      rr_no: new FormControl(),
      water_conn: new FormControl(),
      floor_type: new FormControl(),
      wood_type: new FormControl(),

    });
   }

  ngOnInit(): void {
  }
HouseShopData(HouseShopForm:any){
  this.router.navigate(['/property_details/picture']);
}
}
