import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {NG_VALIDATORS} from '@angular/forms';
import {Validators} from '@angular/forms';
@Component({
  selector: 'app-p1-area',
  templateUrl: './p1-area.component.html',
  styleUrls: ['./p1-area.component.css']
})
export class P1AreaComponent implements OnInit {
  areaForm:FormGroup;
  ward:string='';
  block:string='';
  UserData:any;
  UserData1:any;
  revWardName:any;
  api:any=sessionStorage.getItem('api');

  constructor(private frmbuilder:FormBuilder, private http:HttpClient ,private router: Router) { 
    this.areaForm = this.frmbuilder.group({
      ward: new FormControl("",Validators.required),
      block:new FormControl("",Validators.required)
    });
  }

  ngOnInit(): void {
    // const data ={ward:this.ward, block:this.block}
   
    this.http.get(this.api+"/pro-area").subscribe((result:any)=>{
      let obj = JSON.stringify(result);
      interface Obj{
        status:number;
        msg:string;
        data:any;
      }
      interface ObjData{
        id:any;
        revWardName:string;
      }
      let res:Obj = JSON.parse(obj);
      if(res.status == 1){
        let dataRes:any = JSON.stringify(res.data);
        let finData:ObjData = JSON.parse(dataRes);
        this.UserData = finData;
        //console.log(finData)
      }

      
    })

    const chngWard = this.areaForm.get("ward");
    chngWard.valueChanges.subscribe( data => {
      //console.log("D",data);
      const paramData ={ward:data};
      this.http.get(this.api+"/block-name",{params:paramData}).subscribe((result:any)=>{
        let obj = JSON.stringify(result);
        interface Obj{
          status:number;
          msg:string;
          data:any;
        }
        interface ObjData{
          id:any;
          blockNo:string;
        }
        let res:Obj = JSON.parse(obj);
        if(res.status == 1){
        let dataRes:any = JSON.stringify(res.data);
        let finData1:ObjData = JSON.parse(dataRes);
        this.UserData1 = finData1;
        //console.log("U",this.UserData1)
      }
      })
    
  });


  }
areaData(areaForm:any){
    this.ward = areaForm.controls.ward.value;
    this.block = areaForm.controls.block.value;
    this.router.navigate(["/property_details/details/"+this.ward+"/"+this.block]);
 }

}
