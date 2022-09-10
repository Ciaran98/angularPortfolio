import { AfterViewInit, Component, ViewChild } from '@angular/core';
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { Subscription, fromEvent } from 'rxjs';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyB3kuFcPPIm_HomHydUiqrEWhfvC6eF7oc',
  authDomain: 'ciaran-melarkey.firebaseapp.com',
  projectId: 'ciaran-melarkey',
  storageBucket: 'ciaran-melarkey.appspot.com',
  messagingSenderId: '609002675982',
  appId: '1:609002675982:web:dec3d0c49d19213728815f',
  measurementId: 'G-0R0VNQPML2',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  @ViewChild('hamburger') hamburger: any;
  @ViewChild('navMenu') navMenu: any;
  @ViewChild('navContainer') navContainer: any;
  @ViewChild('brand') brand: any;
  hamburgerClick: Subscription = new Subscription();
  navItemClick: Subscription = new Subscription();
  brandClick: Subscription = new Subscription();
  title = 'Ciaran Web app';
  ngOnInit() {}
  public ngAfterViewInit(): void {
    // Remove animation preload classes
    setTimeout(() => {
      this.navContainer.nativeElement.classList.remove('preload'),
        this.navMenu.nativeElement.classList.remove('preload');
    }, 700);
    this.navMenu.nativeElement.classList.remove('preload');
    // Open hamburger nav
    this.hamburgerClick = fromEvent(
      this.hamburger.nativeElement,
      'click'
    ).subscribe(() => {
      this.hamburger.nativeElement.classList.toggle('active');
      this.navMenu.nativeElement.classList.toggle('active');
      this.navContainer.nativeElement.classList.toggle('active');
    });
    // Close hamburger nav when link is clicked
    this.navItemClick = fromEvent(
      this.navMenu.nativeElement.children,
      'click'
    ).subscribe(() => {
      this.hamburger.nativeElement.classList.remove('active');
      this.navMenu.nativeElement.classList.remove('active');
      this.navContainer.nativeElement.classList.remove('active');
    });
    this.brandClick = fromEvent(this.brand.nativeElement, 'click').subscribe(
      () => {
        this.hamburger.nativeElement.classList.remove('active');
        this.navMenu.nativeElement.classList.remove('active');
        this.navContainer.nativeElement.classList.remove('active');
      }
    );
  }
  ngOnDestroy() {
    // add this for performance reason
    this.hamburgerClick.unsubscribe();
    this.navItemClick.unsubscribe();
  }
}
