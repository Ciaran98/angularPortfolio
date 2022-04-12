import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetDBContentService } from '../get-db-content.service';
import { Title } from '@angular/platform-browser';
import projectjson from 'src/assets/project.json'
@Component({
  selector: 'app-project-display',
  templateUrl: './project-display.component.html',
  styleUrls: ['./project-display.component.css']
})
export class ProjectDisplayComponent implements OnInit {

  constructor(private route: ActivatedRoute,private db : GetDBContentService, private titleService: Title) { }
  public id: string ="";
  public title: string="";
  public projecttext: string="";
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')!;
    this.db.getProjectFromID(this.id).subscribe(
      res =>{
        this.title = res[0][1];
        this.titleService.setTitle(res[0][1]);
      }
    )
    this.projecttext = projectjson[parseInt(this.id.replace(":",""))-1]["projectdata"]["projecttext"]
  }

}
