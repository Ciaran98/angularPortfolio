import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import snippetJson from 'src/assets/snippets.json'
import { Renderer2 } from '@angular/core';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CodeComponent implements OnInit {
  snippetdata = snippetJson
  selectValue: string ="";
  selectedsnippet: string="";
  snippetDescription: string="";
  constructor(private renderer: Renderer2, private titleService: Title) { }
  ngOnInit(): void {
    this.titleService.setTitle("Code Examples")

  }
  selectsnippet(snippetform: NgForm,box:HTMLElement){
    if(snippetform.controls['snippetSelect'].value !="default"){
      this.selectValue=snippetform.controls['snippetSelect'].value;
      this.selectedsnippet=this.snippetdata[this.selectValue]['snippet'];
      this.snippetDescription=this.snippetdata[this.selectValue]['description'];
      this.renderer.setStyle(box,"display","block");
      this.renderer.setStyle(box,"overflow","auto");
      //this.renderer.setStyle(box,"maxHeight",box.scrollHeight+"px");
    }
    else{
      this.selectedsnippet="";
      this.snippetDescription="";
      this.renderer.setStyle(box,"display","none");
      //this.renderer.setStyle(box,"maxheight","");
    }
    
  }
}
