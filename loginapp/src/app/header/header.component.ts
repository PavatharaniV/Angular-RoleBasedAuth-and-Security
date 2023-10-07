import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { UserAuthService } from '../service/user-auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  constructor(
    private userAuth:UserAuthService,
    private router :Router,
    public userService:UserService
  ){

  }
  ngOnInit(): void {
      
  }

  public logout(){
    const confirmation = confirm("Do you want to logout?");
    if (confirmation){
    this.userAuth.clear();
    this.router.navigate(['']);
    }
  }


  //to show and hide login/logout buttons
  public isLoggedIn(){
    return this.userAuth.isLoggedIn();
  }
}
