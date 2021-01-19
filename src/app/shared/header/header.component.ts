import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  UserName:any = sessionStorage.getItem('userName');
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  Logout(){   
    sessionStorage.clear();
    //this.cookieService.deleteAll();
    this.router.navigate(['/Login']);
  }
}
