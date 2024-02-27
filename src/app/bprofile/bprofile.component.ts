import { Component} from '@angular/core';
import { HnavbarComponent } from "../hnavbar/hnavbar.component";
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-bprofile',
    standalone: true,
    templateUrl: './bprofile.component.html',
    styleUrl: './bprofile.component.css',
    imports: [HnavbarComponent, FormsModule]
})
export class BprofileComponent {

  handleFileInput($event: Event) {
  throw new Error('Method not implemented.');
  }
  
  businessProfile: any = {};

  saveOrUpdateProfile() {
    console.log('Saving/Updating profile:', this.businessProfile);
  }

  constructor(private router: Router) {}

  navigate(route: string): void {
    this.router.navigate([route]);
  }
}
