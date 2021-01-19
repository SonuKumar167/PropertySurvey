import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-ward-add-block',
  templateUrl: './ward-add-block.component.html',
  styleUrls: ['./ward-add-block.component.css']
})
export class WardAddBlockComponent implements OnInit {

  AddWardSelect:boolean = true;
  AddWard:boolean = true;
  ExistWard:boolean = true;
  AddWardText:boolean = true;
  addWardBlock:FormGroup;
  district:string = "";
  city:string = "";
  ward:string = "";
  newward:string = "";
  ward_north:string = "";
  ward_south:string = "";
  ward_east:string = "";
  ward_west:string = "";
  block_north:string = "";
  block_south:string = "";
  block_east:string = "";
  block_west:string = "";
  constructor(private frmbuilder:FormBuilder, private http:HttpClient ,private router: Router) {
    this.addWardBlock = this.frmbuilder.group({
      district: new FormControl(),
      city: new FormControl(),
      ward: new FormControl(),
      newward: new FormControl(),     
      ward_north:new FormControl(),
      ward_south:new FormControl(),
      ward_east:new FormControl(),
      ward_west:new FormControl(),
      block_north:new FormControl(),
      block_south:new FormControl(),
      block_east:new FormControl(),
      block_west:new FormControl(),
    });
   }

  ngOnInit(): void {  
    this.AddWardSelect = true;
    this.AddWard = true;
    this.ExistWard = false;
    this.AddWardText = false;
  }
  ShowWard(value:any){
    if(value === 'Add Ward'){
      this.AddWardSelect = false;
      this.AddWard = false;
      this.ExistWard = true;
      this.AddWardText = true;
    }
  else{
      this.AddWardSelect = true;
      this.AddWard = true;
      this.ExistWard = false;
      this.AddWardText = false;
    }
  }
  AddWardBlock(addWardBlock:any){
    this.district = addWardBlock.controls.district.value;
    this.city = addWardBlock.controls.city.value;
    this.ward = addWardBlock.controls.ward.value;
    this.newward = addWardBlock.controls.newward.value;
    this.ward_north = addWardBlock.controls.ward_north.value;
    this.ward_south = addWardBlock.controls.ward_south.value;
    this.ward_east = addWardBlock.controls.ward_east.value;
    this.ward_west = addWardBlock.controls.ward_south.value;
    this.block_north = addWardBlock.controls.block_north.value;
    this.block_south = addWardBlock.controls.block_south.value;
    this.block_east = addWardBlock.controls.block_east.value;
    this.block_west = addWardBlock.controls.block_west.value;
  }

}


