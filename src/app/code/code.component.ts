import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.css']
})
export class CodeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public redirect(id: string){
    switch(id) {
      case "pword":
        window.open("https://github.com/Ciaran98/passwordManager","_blank");
        break;
      case "oldSite":
        window.open("https://github.com/Ciaran98/ciaranmelarkeyapp","_blank");
        break;
    }
  }
}
