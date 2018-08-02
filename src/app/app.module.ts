import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
/*=========================================================*/
import { FormsModule }    from '@angular/forms';
import { HttpModule }     from '@angular/http';
import { Routing } from './app.routing';
/*=========================================================*/

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SplashPageComponent } from './splash-page/splash-page.component';
import { UserPageComponent } from './user-page/user-page.component';
/*=========================================================*/




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    SplashPageComponent,
    UserPageComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserModule,
    Routing,
    HttpModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
