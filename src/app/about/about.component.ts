import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  techList = [
    'HTML',
    'CSS',
    'JavaScript',
    'Angular',
    'Vue',
    'Node',
    'MySQL',
    'MongoDB',
    'Python',
    'Java',
    'TypeScript',
    'SQL',
    'Git',
  ];
  constructor(private titleService: Title) {}
  ngOnInit(): void {
    this.titleService.setTitle('About');
  }
}
