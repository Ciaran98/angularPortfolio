import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';

import { AppRoutingModule, RoutingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestdirectiveDirective } from './testdirective.directive';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CodeComponent } from './code/code.component';
import { BlogComponent } from './blog/blog.component';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http'
import { GetDBContentService } from './get-db-content.service';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectDisplayComponent } from './project-display/project-display.component';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [
    AppComponent,
    TestdirectiveDirective,
    HomeComponent,
    AboutComponent,
    LoginComponent,
    CodeComponent,
    BlogComponent,
    BlogPostComponent,
    ProjectsComponent,
    ProjectDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule
  ],
  providers: [
    Title,
    GetDBContentService
  ],
  bootstrap: [AppComponent],
  exports:[FormsModule]
})
export class AppModule { }
