import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-p3-details-vacant',
  templateUrl: './p3-details-vacant.component.html',
  styleUrls: ['./p3-details-vacant.component.css']
})
export class P3DetailsVacantComponent implements OnInit {
vacantForm:FormGroup;
site_type:string="";
gis_id:string="";
survey_no:string="";
site_shape:string="";
length:string="";
breadth:string="";
area_sqft:string="";
area_cent:string="";
name:string="";
mobile:string="";
SurveyID:string="";
ward:any;
block:any;
gisId:any;
api:any=sessionStorage.getItem('api');
userid:any = sessionStorage.getItem('userid');
surveyDetails:any;
constructor(private frmbuilder:FormBuilder, private http:HttpClient ,private router: Router, private activateRoute:ActivatedRoute) {
  this.vacantForm = this.frmbuilder.group({
    site_type: new FormControl('',Validators.required),
    gis_id:new FormControl('',Validators.required),
    survey_no: new FormControl(),
    site_shape: new FormControl('',Validators.required),
    length: new FormControl(),
    breadth: new FormControl(),
    area_sqft: new FormControl(),
    area_cent: new FormControl(),
    name: new FormControl(),
    mobile: new FormControl(),
    SurveyID: new FormControl()
  });

 
 }

  ngOnInit(): void {
    this.activateRoute.params.subscribe( data =>{
      this.ward = data.ward;
      this.block = data.block;
      this.gisId = data.sid
    });
    
      const data = {userid:this.userid,gis_id:this.gisId};
      this.http.get(this.api+"/GetSurveyDetails",{params:data}).subscribe((result:any)=>{
        let obj = JSON.stringify(result);
        interface Obj{
          status:number;
          msg:string;
          data:any;
        }
        interface ObjData{
          gisid:string;
          surveyNo:any;
          siteShape:any;
          siteLength:any;
          siteBreadth:any;
          siteArea:any;
          siteCents:any;
         ownerName:any;
         ownerMobNo:any; 
        }
        let res:Obj = JSON.parse(obj);
        if(res.status == 1){  
          let dataRes:any = JSON.stringify(res.data);
          let finData:ObjData = JSON.parse(dataRes)[0];
          this.surveyDetails = finData;
          this.vacantForm.patchValue({
            site_type:"Vacant", 
            gis_id: this.gisId,
            survey_no: this.surveyDetails.surveyNo,
            site_shape: this.surveyDetails.siteShape,
            length: this.surveyDetails.siteLength,
            breadth: this.surveyDetails.siteBreadth,
            area_sqft: this.surveyDetails.siteArea,
            area_cent: this.surveyDetails.siteCents,
            name: this.surveyDetails.ownerName,
            mobile: this.surveyDetails.ownerMobNo
          });
        }  
      })
    
  
  }
vacantData(vacantForm:any){
  this.site_type=vacantForm.controls.site_type.value;
  this.gis_id=vacantForm.controls.gis_id.value;
  this.survey_no=vacantForm.controls.survey_no.value;
  this.site_shape=vacantForm.controls.site_shape.value;
  this.length=vacantForm.controls.length.value;
  this.breadth=vacantForm.controls.breadth.value;
  this.area_sqft=vacantForm.controls.area_sqft.value;
  this.area_cent=vacantForm.controls.area_cent.value;
  this.name=vacantForm.controls.name.value;
  this.mobile=vacantForm.controls.mobile.value;

  const data = {ward:this.ward,block:this.block, site_type:this.site_type,gis_id:this.gis_id,survey_no:this.survey_no,site_shape:this.site_shape,
  length:this.length,breadth:this.breadth,area_sqft:this.area_sqft,area_cent:this.area_cent,name:this.name,mobile:this.mobile};
  
    this.http.get(this.api+"/UpdateVaccant",{params:data}).subscribe((result:any)=>{
      let obj = JSON.stringify(result);
      interface Obj{
        status:number;
        msg:string;
        data:any;
      }
      let res:Obj = JSON.parse(obj);
      if(res.status == 1){
        this.router.navigate(['/property_details/picture/'+this.gis_id]);
        console.log(data);
      }  
    })
  }
 
}
