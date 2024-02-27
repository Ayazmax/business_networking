import { Component } from '@angular/core';
import { HnavbarComponent } from "../hnavbar/hnavbar.component";
import { Router } from '@angular/router';

@Component({
    selector: 'app-vuprofile',
    standalone: true,
    templateUrl: './vuprofile.component.html',
    styleUrl: './vuprofile.component.css',
    imports: [HnavbarComponent]
})
export class VuprofileComponent {

  userProfile: any= {
    fullName: 'Your Full Name',
    username: 'Your User name',
    email: 'Your email',
    address: 'Your address',
    contact: 'Your contact',
    profilePicture: 'https://media.istockphoto.com/id/1317804578/photo/one-businesswoman-headshot-smiling-at-the-camera.jpg?s=612x612&w=0&k=20&c=EqR2Lffp4tkIYzpqYh8aYIPRr-gmZliRHRxcQC5yylY='
  };

  constructor(private router: Router) {}

  navigate(route: string): void {
    this.router.navigate([route]);
  }

}
