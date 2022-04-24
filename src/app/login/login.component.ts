import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormGroup, NgForm, Validators, FormControl, ReactiveFormsModule } from '@angular/forms';
import { GetDBContentService } from '../get-db-content.service';
import { Router } from '@angular/router';
import { AccountService } from '../account.service';
import { Title } from '@angular/platform-browser';
@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	constructor(private db: GetDBContentService,private router: Router,private account:AccountService,private titleService: Title) { }
	error:boolean = false;
	ngOnInit(): void {
		this.router.navigate(['/']);
		this.titleService.setTitle("Login");
	}
	public newAccoutSubmission(newAccountForm: NgForm) {
		this.db.addUser(newAccountForm.controls['email'].value,newAccountForm.controls['password'].value,newAccountForm.controls['username'].value).subscribe(
			res =>{
				if(res ==='dupe'){
					this.error = true;
				}
				else if(res ==='success'){
					window.location.reload();
				}
				newAccountForm.controls['email'].reset();
				newAccountForm.controls['password'].reset();
				newAccountForm.controls['confirmpassword'].reset();
				newAccountForm.controls['username'].reset();
				
			}
		)
	}
		/*public loginSubmission(loginForm: NgForm){
			this.db.loginUser().subscribe(
				res =>{
					console.log(res);
				}
			)
			this.db.loginUser(loginForm.controls['email'].value,loginForm.controls['password'].value).subscribe(
				res =>{
					if(res){
						const currentdate: Date = new Date();
						const currenttime = currentdate.getTime()
						const expiration = currenttime + 120000;
						
						const logdata ={
							"loggedIn": "true",
							"uid":res[1],
							"Expiration": expiration.toString()
						}
						localStorage.setItem("Data",JSON.stringify(logdata))
						this.account.loggedIn = true;
						this.router.navigate(['/'])
						window.location.reload();
					}
				}
			)
				loginForm.controls['email'].reset()
				loginForm.controls['password'].reset()
			}
		}*/
		
		}