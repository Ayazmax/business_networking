import { Component } from '@angular/core';
import { HnavbarComponent } from "../hnavbar/hnavbar.component";
import { Router } from '@angular/router';

@Component({
    selector: 'app-mposts',
    standalone: true,
    templateUrl: './mposts.component.html',
    styleUrl: './mposts.component.css',
    imports: [HnavbarComponent]
})
export class MpostsComponent {
  
  editPost(arg0: any) {
  throw new Error('Method not implemented.');
  }

  postId: any;
  
  deletePost(arg0: any) {
  throw new Error('Method not implemented.');
  }

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
