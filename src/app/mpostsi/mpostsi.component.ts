import { Component } from '@angular/core';
import { HnavbarComponent } from "../hnavbar/hnavbar.component";
import { Router } from '@angular/router';

@Component({
    selector: 'app-mpostsi',
    standalone: true,
    templateUrl: './mpostsi.component.html',
    styleUrl: './mpostsi.component.css',
    imports: [HnavbarComponent]
})
export class MpostsiComponent {

  editPost(arg0: any) {
  throw new Error('Method not implemented.');
  }

  isLiked: any;
  postId: any;
  deletePost(arg0: any) {
  throw new Error('Method not implemented.');
  }
  toggleLike() {
  throw new Error('Method not implemented.');
  }
  isCommentsOpen: any;
  toggleComments() {
  throw new Error('Method not implemented.');
  }
  constructor(private router: Router) {}
  
  navigate(route: string): void {
    this.router.navigate([route]);
  }

}
