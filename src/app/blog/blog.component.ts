import { Component, OnInit } from '@angular/core';
import { GetDBContentService } from '../get-db-content.service';
import { Title } from '@angular/platform-browser';
import blogjson from 'src/assets/blog.json';
import { Router } from '@angular/router';
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  constructor(private db : GetDBContentService,private titleService: Title, private router: Router) { }

  public blogdata = blogjson
  ngOnInit(): void {
    this.titleService.setTitle("Blog");
    this.router.navigate(['/']);
  }
}
