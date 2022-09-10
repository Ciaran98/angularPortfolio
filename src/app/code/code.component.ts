import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import snippetJson from 'src/assets/snippets.json';
import { Renderer2 } from '@angular/core';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class CodeComponent implements OnInit {
  snippetdata = snippetJson;
  selectValue: string = '';
  selectedsnippet: string = '';
  snippetDescription: string = '';
  currentValue: string = 'default';
  constructor(private titleService: Title) {}
  ngOnInit(): void {
    this.titleService.setTitle('Code Examples');
  }
  @ViewChild('snippetbox') snippetbox: any;
  selectsnippet(snippetform: NgForm) {
    if (this.currentValue == 'default') {
      this.snippetbox.nativeElement.classList.remove('snippet-hidden');
      this.snippetbox.nativeElement.classList.add('animate-snip-box-inital');
    }
    this.selectValue = snippetform.controls['snippetSelect'].value;
    this.selectedsnippet = this.snippetdata[this.selectValue]['snippet'];
    this.snippetDescription = this.snippetdata[this.selectValue]['description'];
    this.currentValue = this.snippetdata[this.selectValue]['name'];
  }
}
