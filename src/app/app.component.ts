import { Component, Renderer2 } from '@angular/core';
import {Title} from '@angular/platform-browser';
import { GetDBContentService } from './get-db-content.service';
import { Router,ActivatedRoute } from '@angular/router';
import { AccountService } from './account.service';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB3kuFcPPIm_HomHydUiqrEWhfvC6eF7oc",
  authDomain: "ciaran-melarkey.firebaseapp.com",
  projectId: "ciaran-melarkey",
  storageBucket: "ciaran-melarkey.appspot.com",
  messagingSenderId: "609002675982",
  appId: "1:609002675982:web:dec3d0c49d19213728815f",
  measurementId: "G-0R0VNQPML2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
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