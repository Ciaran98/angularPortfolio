import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import projectjson from 'src/assets/projects.json';
import { Renderer2 } from '@angular/core';
@Component({
  selector: 'app-project-display',
  templateUrl: './project-display.component.html',
  styleUrls: ['./project-display.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProjectDisplayComponent implements OnInit {

  constructor(private route: ActivatedRoute,private renderer: Renderer2) { }
  public id: string ="";
  public projecttext: string="";
  public projecttitle: string="";
  public projecturl: string="";
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')!;
    this.projecttitle = projectjson[this.id]['projectname']
    this.projecttext = projectjson[this.id]['projecttext']
    this.projecturl= projectjson[this.id]["projectgithub"]
  }
  showText(vistext:HTMLElement,hidtext:HTMLElement){
    this.renderer.setStyle(vistext,"display","block");
    this.renderer.setStyle(hidtext,"display","none");
    setTimeout(() =>{
      this.renderer.setStyle(vistext,"display","none");
      this.renderer.setStyle(hidtext,"display","block");
    },2000);
  }
}
