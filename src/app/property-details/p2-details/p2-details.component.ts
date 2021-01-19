import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-p2-details',
  templateUrl: './p2-details.component.html',
  styleUrls: ['./p2-details.component.css']
})
export class P2DetailsComponent implements OnInit {
  detailForm:FormGroup;
  stype:string="";
  GisId:string="";
  ward:any;
  block:any;
  gisID:any;
  api:any =sessionStorage.getItem('api');
  userid:any =sessionStorage.getItem('userid');
  constructor(private frmbuilder:FormBuilder, private http:HttpClient ,private router: Router, private activateRoute:ActivatedRoute) {
    this.detailForm = this.frmbuilder.group({
      stype: new FormControl("",Validators.required),
      GisId:new FormControl("",Validators.required)
    });
    
   }

  ngOnInit(): void {
    this.activateRoute.params.subscribe( data =>{
       this.ward = data.ward;
       this.block = data.block;
    });
    console.log(this.ward+" "+this.block);
        this.http.get(this.api+"/GetGisID").subscribe((result:any)=>{
        let obj = JSON.stringify(result);
        interface Obj{
          status:number;
          msg:string;
          data:any;
        }
        interface ObjData{
          id:any;
          gisId:string;
        }
        let res:Obj = JSON.parse(obj);
        if(res.status == 1){
        let dataRes:any = JSON.stringify(res.data);
        let finData:ObjData = JSON.parse(dataRes);
        this.gisID = finData;
        //console.log("U",this.UserData1)
      }
      })
  }
detailData(detailForm:any){
  this.stype=detailForm.controls.stype.value;
  this.GisId=detailForm.controls.GisId.value;
    if (this.stype=='Vacant')
    {
        this.router.navigate(['/property_details/vacant/'+this.GisId+'/'+this.ward+'/'+this.block]);
    }
    else {
        this.router.navigate(['/property_details/building/'+this.GisId+'/'+this.ward+'/'+this.block]);
   }
  }
}

