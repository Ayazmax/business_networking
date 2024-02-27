import { Component } from '@angular/core';
import { HnavbarComponent } from "../hnavbar/hnavbar.component";
import { Router } from '@angular/router';

@Component({
    selector: 'app-ehome',
    standalone: true,
    templateUrl: './ehome.component.html',
    styleUrls: ['./ehome.component.css'],
    imports: [HnavbarComponent]
})
export class EhomeComponent {
  isCommentsOpen = false;
  isLiked = false;

  constructor(private router: Router) {}

  toggleComments(): void {
    this.isCommentsOpen = !this.isCommentsOpen;
  }

  toggleLike(): void {
    this.isLiked = !this.isLiked;
  }

  navigate(route: string): void {
    this.router.navigate([route]);
  }
}
