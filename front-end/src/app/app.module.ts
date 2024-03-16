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
import { UserprofileComponent } from './userprofile/userprofile.component';
import { SigninService } from './services/signin.service';
import { UserprofileService } from './services/userprofile.service';
import { PostingComponent } from './posting/posting.component';
import { FlowerspostComponent } from './flowerspost/flowerspost.component';
import { FruitspostComponent } from './fruitspost/fruitspost.component';



@NgModule({
  declarations: [
    AppComponent,
    AgricultureComponent,
    AboutComponent,
    HomeComponent,
    SigninComponent,
    FlowersComponent,
    FruitsComponent,
    UserprofileComponent,
    PostingComponent,
    FlowerspostComponent,
    FruitspostComponent

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
  providers: [SigninService, UserprofileService], // Add SignupService to providers
  bootstrap: [AppComponent]
})
export class AppModule { }
