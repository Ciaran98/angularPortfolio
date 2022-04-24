import { Injectable,OnInit } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { catchError, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GetDBContentService implements OnInit{

  constructor(private http : HttpClient) {
    
   }
  
  ngOnInit(){
    
  }
  userAddUrl : string = "http://localhost:5000/adduser/"
  blogUrl : string = "http://localhost:5000/getblogpost/"
  userLoginUrl : string = "http://localhost:5000/login/"
  postcommenturl: string = "http://localhost:5000/postcomment/"
  getusernameurl:string = "http://localhost:5000/getusername/"
  
  addUser(user_email:string,user_password:string,user_name:string) : Observable<string> {
    const user_data = {
      user_email,user_password,user_name
    };
    return this.http.post<string>(this.userAddUrl,user_data);
  }
 
  getBlogPost(blogid: string){
    return this.http.get<string>(this.blogUrl+blogid+"/");
  }

  getUsername(uid: string){
    return this.http.get<string>(this.getusernameurl+uid+"/");
  }

  /*loginUser(user_name: string, user_password:string):Observable<string>{
    const user_data = {
      user_name,user_password
    };
    return this.http.post<string>(this.userLoginUrl,user_data)
  }*/
  loginUser(){

    return this.http.get<string>(this.userLoginUrl);
  }
  postComment(comment:string,postid:string,userid:string):Observable<string>{
    const comment_data = {
      comment,postid,userid
    }
    return this.http.post<string>(this.postcommenturl,comment_data);
  }
}