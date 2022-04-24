import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import projectjson from 'src/assets/project.json';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor(private titleService: Title) { }
  public jsondata = projectjson;
  ngOnInit(): void {
    this.titleService.setTitle("Projects")
  }

}
