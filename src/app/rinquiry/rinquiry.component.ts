import { Component } from '@angular/core';
import { HnavbarComponent } from "../hnavbar/hnavbar.component";
import { Router } from '@angular/router';

@Component({
    selector: 'app-rinquiry',
    standalone: true,
    templateUrl: './rinquiry.component.html',
    styleUrl: './rinquiry.component.css',
    imports: [HnavbarComponent]
})
export class RinquiryComponent {

  constructor(private router: Router) {}
  
  navigate(route: string): void {
    this.router.navigate([route]);
  }

}
