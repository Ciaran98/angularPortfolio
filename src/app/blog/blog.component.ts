import { Component, OnInit } from '@angular/core';
import { GetDBContentService } from '../get-db-content.service';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  constructor(private db : GetDBContentService,private titleService: Title) { }

  
  blogdata : string = "";


  ngOnInit(): void {
    this.titleService.setTitle("Blog")
    this.db.readData().subscribe(
      res =>{
        this.blogdata = res;
      },
      (error)=>{
        console.log("No data found" + error)
      }
    )}
}
