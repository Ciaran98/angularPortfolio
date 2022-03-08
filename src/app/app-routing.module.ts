import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CodeComponent } from './code/code.component';
import { BlogComponent } from './blog/blog.component';
const routes: Routes = [
  {path:"about", component:AboutComponent},
  {path:"",component:HomeComponent},
  {path:"login",component:LoginComponent},
  {path:"code",component:CodeComponent},
  {path:"blog",component:BlogComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } export const RoutingComponent = [AboutComponent];
