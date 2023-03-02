import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent {
  title = 'project';
  constructor(private router: Router) { }

  isNextRoute: boolean = true;

  changeVeiw() {
    if (this.isNextRoute) {
      this.router.navigate(['list']);
      this.isNextRoute = false;
    } else {

      this.router.navigate(['grid']);
      this.isNextRoute = true;
    }
  }  

  onChange() {
    this.isNextRoute = !this.isNextRoute;
  }
  
}



