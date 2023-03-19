import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { Request } from "./request";
import { UserService } from './user.service';
import { RequestService } from './request.service';

import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public loggedInUser: any = null;
  public loggedIn: Boolean = false;
  public loggedInUserRequests: any = null;

  constructor(private userService: UserService, private requestService: RequestService){}

  ngOnInit() {
  }

  public onOpenModal(mode: string): void {
    const container = document.getElementById('main-container') as HTMLElement;
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'login') {
      button.setAttribute('data-target', '#loginModal');
    }
    else if (mode === 'logout') {
      button.setAttribute('data-target', '#logoutModal');
    }
    
    container.appendChild(button);
    button.click();
  }

  public onLogin(user: User): void {
    this.userService.signupLoginUser(user).subscribe(
      (response: User) => {
        console.log(user);
        this.loggedIn = true;
        this. loggedInUser = response;
        this.getRequests();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
    // add user to cache
  }

  public onLogout(): void {
    // delete user from cache
    this.loggedIn = false;
    this. loggedInUser = null;
    this.loggedInUserRequests = null;
  }

  public onAddRequest() {
    this.requestService.addRequest(this.loggedInUser).subscribe(
      (response: Request) => {
        console.log(response);
        this.getRequests();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public getRequests() {
    this.requestService.getRequestsByUser(this.loggedInUser).subscribe(
      (response: Request[]) => {
        console.log(response);
        this.loggedInUserRequests = response
      },
      (error: HttpErrorResponse) => {
        this.loggedInUserRequests = null;
      }
    )
  }

}