import { Component } from '@angular/core';
import { HnavbarComponent } from "../hnavbar/hnavbar.component";
import { Router } from '@angular/router';

@Component({
    selector: 'app-fadvisor',
    standalone: true,
    templateUrl: './fadvisor.component.html',
    styleUrl: './fadvisor.component.css',
    imports: [HnavbarComponent]
})
export class FadvisorComponent {

  constructor(private router: Router) {}

  filterAdvisors($event: Event) {
  throw new Error('Method not implemented.');
  }
  advisor: any;

  navigate(route: string): void {
    this.router.navigate([route]);
  }

}
