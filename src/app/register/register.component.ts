import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
//============================================================
import { UserServices } from '../services/user.service.client';
import { User } from '../models/user.models.client';
import { SharedService } from '../services/shared.service.client';
//============================================================


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],

})


export class RegisterComponent implements OnInit {

  @ViewChild('f') registerForm: NgForm;

  
    username:       string;
    password:       string;
    verifyPassword: string;

    // passwordError:   boolean;
    // usernameError:   boolean;


    // constructor(  private userService:   UserServices, 
    //               private router: Router,
    //               private sharedService: SharedService) { }


   /* [_NG_ON_INIT FUNCTION_] */
    ngOnInit() 
      {
        // this.passwordError =   false;
        // this.usernameError =   false;
      }


outputUnername: any;
outputPassword: any;
outputVPassword: any;

  register (){

        this.username = this.registerForm.value.username;
        this.password = this.registerForm.value.password;
        this.verifyPassword = this.registerForm.value.verifyPassword;

        console.log (this.username);
        console.log (this.password);
        console.log (this.verifyPassword);

        this.outputUnername = `This is your Username : ${this.username} -- Please Remember It`;
        this.outputPassword = `This is your Password : ${this.password} -- Please Remember It`;
        this.outputVPassword = `This is your Verified Password : ${this.verifyPassword}-- Please Remember It`;

  }

  

  // register(){
  //   this.ngOnInit();
  //   this.username = this.registerForm.value.username;
  //   this.password = this.registerForm.value.password;

  //   this.verifyPassword = this.registerForm.value.verifyPassword;
    
  //   if(this.password !== this.verifyPassword) {
  //       this.passwordError = true;
  //   } 

  //   else {
  //       this.passwordError = false;
  //       this.userService.findUserByUserName(this.username).subscribe(
  //         (data: any) => {
  //               if(!data) {
  //                   // const newUser: User = {
  //                   // username: this.username,
  //                   // password: this.password,
  //                   // firstName: "",
  //                   // lastName: "",
  //                   // email: ""
  //               // };
  //               this.userService.register(this.username, this.password)
  //                  .subscribe(
  //                    (data: User) => {
  //                      this.sharedService.user = data;
  //                      this.router.navigate(['/user']);
  //                    },
  //                    (error: any) => {
  //                      this.usernameError = true;
  //                    }
  //                 );
  //                }
            
  //                else {
  //                   this.usernameError = true;
  //               }
  //         })
  //     }
  // }

 



} //END CLASS
