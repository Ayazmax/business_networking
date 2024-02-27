import { Component } from '@angular/core';
import { HnavbarComponent } from "../hnavbar/hnavbar.component";
import { Router } from '@angular/router';

@Component({
    selector: 'app-phome',
    standalone: true,
    templateUrl: './phome.component.html',
    styleUrl: './phome.component.css',
    imports: [HnavbarComponent]
})
export class PhomeComponent {

  isCommentsOpen = false;
  isLiked = false;

  toggleComments(): void {
    this.isCommentsOpen = !this.isCommentsOpen;
  }

  toggleLike(): void {
    this.isLiked = !this.isLiked;
  }

  constructor(private router: Router) {}
  
  navigate(route: string): void {
    this.router.navigate([route]);
  }


}
