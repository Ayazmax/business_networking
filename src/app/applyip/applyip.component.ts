import { Component } from '@angular/core';
import { HnavbarComponent } from "../hnavbar/hnavbar.component";
import { Router } from '@angular/router';

@Component({
    selector: 'app-applyip',
    standalone: true,
    templateUrl: './applyip.component.html',
    styleUrl: './applyip.component.css',
    imports: [HnavbarComponent]
})
export class ApplyipComponent {

  viewProfile() {
  throw new Error('Method not implemented.');
  }
  
  apply() {
  throw new Error('Method not implemented.');
  }

  constructor(private router: Router) {}

  navigate(route: string): void {
    this.router.navigate([route]);
  }

}
