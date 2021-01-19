import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  signinForm:FormGroup;
  mobile:string = "";
  api:string="http://localhost:8081";
  spinnerCheck:boolean = false;
  showError:boolean = false;
  errorMsg:string = "";
  
  constructor(private frmbuilder:FormBuilder, private http:HttpClient ,private router: Router, private spinner:NgxSpinnerService) { 
    this.signinForm = this.frmbuilder.group({
      mobile: new FormControl()
    });
  }

  ngOnInit(): void {
  }
  signData(signinForm: any){
    this.spinnerCheck=true;
    this.spinner.show();
    this.mobile = signinForm.controls.mobile.value;
    const data = {mobile:this.mobile};
    this.http.get(this.api+"/Login",{params:data}).subscribe((result:any)=>{
      let obj = JSON.stringify(result);
      interface Obj{
        status:number;
        msg:string;
        data:any;
      }
      interface ObjData{
        id:any;
        userName:any
      }
      let res:Obj = JSON.parse(obj);
      if(res.status == 1){
        this.spinnerCheck=false;
        this.spinner.hide();
        let dataRes:any = JSON.stringify(res.data);
        let finData:ObjData = JSON.parse(dataRes)[0];
        sessionStorage.setItem("api",this.api);
        sessionStorage.setItem("userid",finData.id);
        sessionStorage.setItem("userName",finData.userName);
        this.router.navigate(['/WardBlock']);
      }
      else{
        this.spinnerCheck=false;
        this.spinner.hide();
        this.errorMsg = res.msg;
        this.showError = true;
      }
      
    })
   
  }

}
