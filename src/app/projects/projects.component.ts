import { Component, OnInit } from '@angular/core';
import { GetDBContentService } from '../get-db-content.service';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor(private db : GetDBContentService,private titleService: Title) { }
  projectdata :string = "";
  ngOnInit(): void {
    this.titleService.setTitle("Projects")
    this.db.getProjects().subscribe(
      res =>{
        this.projectdata = res;
      }
    )
  }

}
