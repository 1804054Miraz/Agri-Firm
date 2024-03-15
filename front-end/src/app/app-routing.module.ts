import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgricultureComponent } from './agriculture/agriculture.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SigninComponent } from './signin/signin.component';
import { FlowersComponent } from './flowers/flowers.component';
import { FruitsComponent } from './fruits/fruits.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { PostingComponent } from './posting/posting.component';
import { FlowerspostComponent } from './flowerspost/flowerspost.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'flowers', component: FlowersComponent},
  { path: 'agriculture', component: AgricultureComponent },
  { path: 'about', component: AboutComponent },
  { path: 'signin', component: SigninComponent },
  { path: '', redirectTo: '/signin', pathMatch: 'full' },
  { path: '', redirectTo: '/signup', pathMatch: 'full' },
  { path: 'fruits', component:FruitsComponent},
  { path: 'userprofile', component: UserprofileComponent},
  { path: 'posting', component: PostingComponent},
  { path: 'flowerspost', component: FlowerspostComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
