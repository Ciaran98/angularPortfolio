import { Injectable } from '@angular/core';
import { GetDBContentService } from './get-db-content.service';
@Injectable({
  providedIn: 'root'
})
export class AccountService {
  public loggedIn: Boolean = false;
  public uname: string = "";
  constructor(private db : GetDBContentService) {
    const loggedData = JSON.parse(localStorage.getItem("Data")!)
    if(localStorage.getItem("Data") != null){
      if(loggedData["loggedIn"] == "true"){
        this.loggedIn = true;
      }
      else{
        this.loggedIn = false;
      }
      
    }
  }
}
