// import { Component, OnInit } from '@angular/core';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
//============================================================
import { UserServices } from '../services/user.service.client';
import { User } from '../models/user.models.client';
import { SharedService } from '../services/shared.service.client';
//============================================================

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {


	@ViewChild('f') loginForm: NgForm;

	username:	string;
	password: 	string;
	errorFlag: 	boolean;

	// constructor(  private userServices: 	UserServices,
	// 		 	  private router:			Router,
	// 		 	  private sharedService:    SharedService ) { }

  ngOnInit() {
  }

 	outputUsername: any;
	outputPassword: any;


  login() {
			 // fetching data from loginForm
			 this.username = this.loginForm.value.username;
			 this.password = this.loginForm.value.password;

			console.log (this.username);
        	console.log (this.password);

        this.outputUsername = `Username : ${this.username}  `;
        this.outputPassword = `Password : ${this.password}  `;
			 // calling client side userservice to send login information
			 // console.log('data', this.username);

			 // this.userServices.login(this.username, this.password)
				//    .subscribe(
				// 	    (user: User) => {
				// 	    	if(!user){
				// 	    		this.errorFlag = true;
				// 	    	}
				// 	    	else{
				// 	    		this.errorFlag = false;
				// 	    		this.sharedService.user = user;
				// 	    		this.router.navigate(['user']);
				// 	    	}
					    	
				// 	    },
				// 	    (error: any) => {
    //   						this.errorFlag = true;
    //  					}
				//    );
		}



}  // END CLASS
