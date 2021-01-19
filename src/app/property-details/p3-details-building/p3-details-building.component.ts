import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder,Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-p3-details-building',
  templateUrl: './p3-details-building.component.html',
  styleUrls: ['./p3-details-building.component.css']
})
export class P3DetailsBuildingComponent implements OnInit {
buildingForm:FormGroup;
site_type:string="";
gis_id:string="";
pid_no:string="";
shape:string="";
length:string="";
breadth:string="";
area_sqft:string="";
area_cent:string="";
ward:any;
block:any;
survey_id:any;
SurveID:string="";
constructor(private frmbuilder:FormBuilder, private http:HttpClient ,private router: Router, private activateRoute:ActivatedRoute) {
  this.buildingForm = this.frmbuilder.group({
    site_type: new FormControl("",Validators.required),
    gis_id: new FormControl(),
    SurveyID: new FormControl(),
    pid_no: new FormControl(),
    shape: new FormControl("",Validators.required),
    length: new FormControl(),
    breadth: new FormControl(),
    area_sqft: new FormControl(),
    area_cent: new FormControl()
  });
 }


  ngOnInit(): void {
    this.activateRoute.params.subscribe( data =>{
      this.ward = data.ward;
      this.block = data.block;
      this.survey_id = data.sid
    });
    this.buildingForm.patchValue({
      site_type:"Plot with Building", 
      SurveyID:"SURVEYPLTBILD" 
    });
  }
buildingData(buildingForm:any){
  // this.site_type = buildingForm.controls.site_type.value;
  this.router.navigate(['/property_details/pro-type']);
}
}
