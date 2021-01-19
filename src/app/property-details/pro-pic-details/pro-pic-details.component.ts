import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-pro-pic-details',
  templateUrl: './pro-pic-details.component.html',
  styleUrls: ['./pro-pic-details.component.css']
})
export class ProPicDetailsComponent implements OnInit {
  
  pictureForm:FormGroup;
  pro_id:string='';
  let:string='';
  long:string='';
  constructor(private frmbuilder:FormBuilder, private http:HttpClient ,private router: Router) {
    this.pictureForm = this.frmbuilder.group({
      type: new FormControl()
    });
   }


  ngOnInit(): void {
  }
pictureData(pictureForm:any){
  this.router.navigate(['/property_details/pro-area']);

}
}
