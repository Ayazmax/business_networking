import { Component } from '@angular/core';
import { HnavbarComponent } from "../hnavbar/hnavbar.component";
import { Router } from '@angular/router';

@Component({
    selector: 'app-mpostsp',
    standalone: true,
    templateUrl: './mpostsp.component.html',
    styleUrl: './mpostsp.component.css',
    imports: [HnavbarComponent]
})
export class MpostspComponent {

  editPost(arg0: any) {
  throw new Error('Method not implemented.');
  }

  constructor(private router: Router) {}
  
  navigate(route: string): void {
    this.router.navigate([route]);
  }
  toggleLike() {
  throw new Error('Method not implemented.');
  }
  postId: any;
  deletePost(arg0: any) {
  throw new Error('Method not implemented.');
  }
  isCommentsOpen: any;
  isLiked: any;
  toggleComments() {
  throw new Error('Method not implemented.');
  }

}
