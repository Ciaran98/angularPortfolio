import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { GetDBContentService } from '../get-db-content.service';
import { NgForm } from '@angular/forms';
import blogjson from 'src/assets/blog.json';
import { AccountService } from '../account.service';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css']
})

export class BlogPostComponent implements OnInit {
  private id: string ="";
  public title: string="";
  public commentdata: string="";
  public blogpostdata: string="";
  loggedIn:Boolean=this.account.loggedIn;
  constructor(private route: ActivatedRoute,private db : GetDBContentService, private account: AccountService,private titleService:Title,private router:Router) { }
  ngOnInit(): void {
    this.router.navigate(['/']);
    this.id = this.route.snapshot.paramMap.get('id')!;
    /*this.db.getBlogPost(this.id).subscribe(
      res =>{
        this.commentdata = res[1]
        this.title = res[0][0][1]
        this.titleService.setTitle(res[0][0][1])
      }
    )*/
    
    this.title = blogjson[parseInt(this.id.replace(":",""))-1]["blogtitle"];
    this.blogpostdata = blogjson[parseInt(this.id.replace(":",""))-1]["blogdata"];
    this.titleService.setTitle(this.title);
  }
  public commentSubmission(commentform: NgForm){
    const loggedData = JSON.parse(localStorage.getItem("Data")!)
    if(loggedData["loggedIn"] == "true"){
      this.db.postComment(commentform.value['newcomment'],this.id,loggedData["uid"]).subscribe(res =>{
        window.location.reload();
      })
    }
    commentform.controls['newcomment'].reset();
  }
}
