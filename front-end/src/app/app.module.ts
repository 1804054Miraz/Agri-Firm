// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Angular-related imports first
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { AgricultureComponent } from './agriculture/agriculture.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import { FlowersComponent } from './flowers/flowers.component';
import { FruitsComponent } from './fruits/fruits.component';
import { UserProfileComponent } from './userprofile/userprofile.component';
import { SigninService } from './services/signin.service';
<<<<<<< HEAD
import { UserProfileService } from './services/userprofile.service';
import { RegistrationComponent } from './registration/registration.component';
import { RegistrationService } from './services/registration.service';
=======
import { UserprofileService } from './services/userprofile.service';
import { PostingComponent } from './posting/posting.component';
import { FlowerspostComponent } from './flowerspost/flowerspost.component';
import { FruitspostComponent } from './fruitspost/fruitspost.component';
>>>>>>> d9b512ce2bd92931a8e69fc7952cc73305ae0415



@NgModule({
  declarations: [
    AppComponent,
    AgricultureComponent,
    AboutComponent,
    HomeComponent,
    SigninComponent,
    FlowersComponent,
    FruitsComponent,
<<<<<<< HEAD
    UserProfileComponent,
    RegistrationComponent
=======
    UserprofileComponent,
    PostingComponent,
    FlowerspostComponent,
    FruitspostComponent
>>>>>>> d9b512ce2bd92931a8e69fc7952cc73305ae0415

  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    HttpClientModule,
    ReactiveFormsModule
    
  ],
  providers: [SigninService,RegistrationService, UserProfileService], // Add SignupService to providers
  bootstrap: [AppComponent]
})
export class AppModule { }
