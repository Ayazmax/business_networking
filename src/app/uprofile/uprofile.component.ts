import { Component } from '@angular/core';
import { HnavbarComponent } from "../hnavbar/hnavbar.component";
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-uprofile',
    standalone: true,
    templateUrl: './uprofile.component.html',
    styleUrl: './uprofile.component.css',
    imports: [HnavbarComponent, FormsModule]
})
export class UprofileComponent {

  handleFileInput($event: Event) {
  throw new Error('Method not implemented.');
  }
  userProfile: any;

constructor(private router: Router) {}

navigate(route: string): void {
  this.router.navigate([route]);
}
  createUserProfile() {
  throw new Error('Method not implemented.');
  }

}
