import { Component } from '@angular/core';
import { HnavbarComponent } from "../hnavbar/hnavbar.component";
import { Router } from '@angular/router';

@Component({
    selector: 'app-fentrepreneur2',
    standalone: true,
    templateUrl: './fentrepreneur2.component.html',
    styleUrl: './fentrepreneur2.component.css',
    imports: [HnavbarComponent]
})
export class Fentrepreneur2Component {
  
  constructor(private router: Router) {}
  
  navigate(route: string): void {
    this.router.navigate([route]);
  }
  apply() {
  throw new Error('Method not implemented.');
  }
  viewProfile() {
  throw new Error('Method not implemented.');
  }

}
