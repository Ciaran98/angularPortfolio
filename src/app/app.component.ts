import { Component, Renderer2 } from '@angular/core';
import {Title} from '@angular/platform-browser';
import { GetDBContentService } from './get-db-content.service';
import { Router,ActivatedRoute } from '@angular/router';
import { AccountService } from './account.service';
@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent {
	title = 'Ciaran Web app';
	ngOnInit(){
	}
	public constructor(private router: Router) {
	}
	// This method is used to actually refresh the page if a new project is selected from the projects dropdown.
	public reloadpage(url){
		this.router.navigate(['/']).then(()=> {this.router.navigate([url]);})
	}
}