import { ChangeDetectionStrategy, Component, Injectable, Renderer2 } from '@angular/core';
import {Title} from '@angular/platform-browser';
import { GetDBContentService } from './get-db-content.service';
import { Router,NavigationEnd,ActivatedRoute } from '@angular/router';
import { AccountService } from './account.service';
@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent {
	screenWidth: any;
	title = 'Ciaran Web app';
	threeprojectsdata: string="";
	onHover :boolean;
	loggedIn:Boolean=this.account.loggedIn;
	uname : string = "";
	ngOnInit(){
		const currentdate: Date = new Date();
		const currenttime = currentdate.getTime()
		const loggedData = JSON.parse(localStorage.getItem("Data")!)
		this.screenWidth = window.innerWidth;
		this.db.getProjects().subscribe(
			res =>{
				this.threeprojectsdata = res;
			}
		)
		if(localStorage.getItem("Data") != null)
		{
			if(parseInt(loggedData["Expiration"]) < currenttime){
				localStorage.removeItem("Data");
			}
			else{
				this.db.getUsername(loggedData["uid"]).subscribe(
					res =>{
						this.uname = res[0][0]
					}
				)
			}
		}
		this.account.uname = this.uname
	}
	public constructor(private titleService: Title,private renderer: Renderer2,private db : GetDBContentService,private router: Router, private activatedRoute: ActivatedRoute,private account: AccountService) {
		this.onHover = false;
	}
	public dropdownHover(el: HTMLElement){
		if(this.onHover == true && this.screenWidth > 992){
			this.renderer.setStyle(el,'font-size','20px');
			this.renderer.setStyle(el,'border-bottom-width','2px')
		}
		else if(this.onHover == false && this.screenWidth > 992){
			this.renderer.setStyle(el,'font-size','16px');
			this.renderer.setStyle(el,'border-bottom-width','0px')
		}
	}
	// This method is used to actually refresh the page if a new project is selected from the projects dropdown.
	public reloadpage(url){
		this.router.navigate(['/']).then(()=> {this.router.navigate([url]);})
	}
	// Function to log the user out
	public logout(){
		localStorage.removeItem("Data");
		this.account.loggedIn=false;
		this.loggedIn = false;
		this.router.navigate(['/']);
	}

}