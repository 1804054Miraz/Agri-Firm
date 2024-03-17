import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgricultureComponent } from './agriculture/agriculture.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SigninComponent } from './signin/signin.component';
import { FlowersComponent } from './flowers/flowers.component';
import { FruitsComponent } from './fruits/fruits.component';
import { UserProfileComponent } from './userprofile/userprofile.component';
import { RegistrationComponent } from './registration/registration.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'flowers', component: FlowersComponent},
  { path: 'agriculture', component: AgricultureComponent },
  { path: 'about', component: AboutComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'registration', component: RegistrationComponent},
  { path: 'fruits', component:FruitsComponent},
  { path: 'userprofile', component: UserProfileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
