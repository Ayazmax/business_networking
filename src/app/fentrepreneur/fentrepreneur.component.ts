import { Component } from '@angular/core';
import { HnavbarComponent } from "../hnavbar/hnavbar.component";
import { Router } from '@angular/router';

@Component({
    selector: 'app-fentrepreneur',
    standalone: true,
    templateUrl: './fentrepreneur.component.html',
    styleUrl: './fentrepreneur.component.css',
    imports: [HnavbarComponent]
})
export class FentrepreneurComponent {
  
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
