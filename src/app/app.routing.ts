/*##############################################################
  ############[            MAIN Imports             ]########### 
  ############################################################## */

import {Routes, RouterModule} 	from "@angular/router";
import {ModuleWithProviders} 	from "@angular/core";
import { AppComponent } 		from './app.component';
// import { AuthGuard } 			from './services/auth-guard.service';

/*##############################################################
  ############[           My Web Components         ]########### 
  ############################################################## */

// import { LoginComponent } 			from "./components/user/login/login.component";
// import { ProfileComponent } 		from "./components/user/profile/profile.component";
// import { RegisterComponent } 		from "./components/user/register/register.component";

// import { PageNewComponent } 		from './components/page/page-new/page-new.component';
// import { PageEditComponent } 		from './components/page/page-edit/page-edit.component';
// import { PageListComponent } 		from './components/page/page-list/page-list.component';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SplashPageComponent } from './splash-page/splash-page.component';
import { UserPageComponent } from './user-page/user-page.component';

/*##############################################################
  ############[                Routes               ]########### 
  ############################################################## */
  
const APP_ROUTES : Routes = 
	[
		{ path : '', component : SplashPageComponent},
		{ path : 'login', component : LoginComponent},
		{ path : 'register', component : RegisterComponent},
		{ path : 'user', component : UserPageComponent}
		// { path : 'user/:uid/website/new', component : WebsiteNewComponent, canActivate: [AuthGuard]},
		// { path : 'user/:uid/website/:wid', component : WebsiteEditComponent, canActivate: [AuthGuard]},		
	]


	/*--------------------------------------------------
	  ############[     Compile problems    ]###########
	  ------------------------------------------------- */
// Export the routes as module providers
// export class RoutingModule { }
export const Routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);