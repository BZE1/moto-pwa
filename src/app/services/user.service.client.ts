import { map } from "rxjs/operators";
import { Http, Response, RequestOptions} from '@angular/http';
import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import { ModuleWithProviders} from '@angular/core';
import {User} from '../models/user.models.client'
import { SharedService } from './shared.service.client';
import { Router} from '@angular/router';

@Injectable()

export class UserServices 
	{

		baseUrl = environment.baseUrl;
		options: RequestOptions = new RequestOptions();

		constructor(private http: Http,
					private sharedService: SharedService,
					private router: Router){}
		

		loggedIn() {
			 this.options.withCredentials = true;

			 return this.http.post(this.baseUrl + '/api/loggedIn', '', this.options)
			   .pipe (map(
				     (res: Response) => {
					       const user = res.json();
					       if (user !== 0) {
					         this.sharedService.user = user; 
					         return true;
					       } else {
					         this.router.navigate(['/login']);
					         return false;
					       }
				     }
			   ));
		}
	

		

		logout() {

			 this.options.withCredentials = true;
			 return this.http.post(this.baseUrl + '/api/logout', '', this.options)
			   .pipe(map(
			     (res: Response) => {
			     	this.sharedService.user = null;
			       return res;
			     }
			   ));
		}



		register(username: String, password: String) {

			 // this communication will be secured
			 this.options.withCredentials = true;
			 const user = {
			   username : username,
			   password : password
			 };
			 return this.http.post(this.baseUrl + '/api/register', user, this.options).pipe
			   (map(
			     (res: Response) => {
			       const data = res.json();
			       return data;
			     }
			   ));
		}

		login(username: String, password: String) {
			this.options.withCredentials = true; // jga
			const user = {
				   username : username,
				   password : password
			};

			return this.http.post(this.baseUrl + '/api/login', user, this.options)
				 .pipe (map(
					 (res: Response) => {
					       return res.json();
					  }
				));
			}

		createUser(user:User)
				{
					// user._id = Math.floor(Math.random() + 10000).toString();
					// this.users.push(user);
					const url = this.baseUrl + '/api/user';
					return this.http.post(url, user).pipe(map(
						(response: Response) => {
							return response.json();
						}
						))
				}

			findUserById(userId :string)
				{
					const url = this.baseUrl + '/api/user/' + userId;

					return this.http.get(url).pipe(map(
						(response: Response) => {
							return response.json();
						}
						))


					// for (let x = 0 ; x < this.users.length ; x++)
					// 	{
					// 		if (this.users[x]._id === userId)
					// 			{
					// 				return this.users[x];
					// 			}
					// 	}
				}

			findUserByUserName (username: string)
				{
					const url = this.baseUrl + '/api/user?username=' + username;
					
					return this.http.get(url).pipe(map(
						(response: Response) =>{
							return response.json();
						}
					))
				}

					// for (let x = 0; x < this.users.length; x++)
					// 	{
					// 		if (this.users[x].username === username)
					// 			{
					// 				return this.users[x];
					// 			}
					// 	}
				

			findUserByCredentials (username: string , password: string){
				const url = this.baseUrl + '/api/user?username=' 
									+ username + '&password=' + password;
				
				return this.http.get(url).pipe(map(
					(response : Response) =>
					{
						
						 return response.json();
					}));
			}



	
			updateUser (userId:string, user:User)
				{
					const url = this.baseUrl + '/api/user'+ userId;
					return this.http.put(url, user).pipe(map(
						(response: Response) => {
							return response.json();
						}
						))


					// var oldUser = this.findUserById(userId);
					// var index = this.users.indexOf(oldUser);

					// this.users[index].username 		= user.username;
					// this.users[index].password 		= user.password;
					// this.users[index].firstName 	= user.firstName;
					// this.users[index].lastName 		= user.lastName;
					// this.users[index].email 		= user.email;

				}

			deleteUser (userId:string)
				{
					
				const url = this.baseUrl + '/api/user'+ userId;
					return this.http.delete(url).pipe(map(
						(response: Response) => {
							return response.json();
						}
					))

					// var oldUser = this.findUserById(userId);
					// var index = this.users.indexOf(oldUser);
					
					// this.users.splice(index, 1);
				}

	}  // END USER SERVICES FUNCTION




// Export the routes as module providers
// export const Services: ModuleWithProviders = ServicesModule.forRoot(UserServices);
