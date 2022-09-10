import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CodeComponent } from './code/code.component';
import { BlogComponent } from './blog/blog.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectDisplayComponent } from './project-display/project-display.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'code', component: CodeComponent, data: { title: 'Code' } },
  { path: 'blog', component: BlogComponent },
  { path: 'blog_post/:id', component: BlogPostComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'project/:id', component: ProjectDisplayComponent },
  { path: '**', pathMatch: 'full', component: PagenotfoundComponent },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      onSameUrlNavigation: 'reload',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const RoutingComponent = [AboutComponent];
