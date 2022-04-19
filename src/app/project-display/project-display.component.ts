import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import projectjson from 'src/assets/project.json'
@Component({
  selector: 'app-project-display',
  templateUrl: './project-display.component.html',
  styleUrls: ['./project-display.component.css']
})
export class ProjectDisplayComponent implements OnInit {

  constructor(private route: ActivatedRoute, private titleService: Title) { }
  public id: string ="";
  public title: string="";
  public projecttext: string="";
  public projecttitle: string="";
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')!;
    this.projecttext = projectjson[parseInt(this.id.replace(":",""))-1]["projectdata"]["projecttext"]
    this.projecttitle = projectjson[parseInt(this.id.replace(":",""))-1]["projectname"]
  }

}
