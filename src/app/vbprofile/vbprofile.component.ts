import { Component } from '@angular/core';
import { HnavbarComponent } from "../hnavbar/hnavbar.component";
import { Router } from '@angular/router';

@Component({
    selector: 'app-vbprofile',
    standalone: true,
    templateUrl: './vbprofile.component.html',
    styleUrl: './vbprofile.component.css',
    imports: [HnavbarComponent]
})
export class VbprofileComponent {

  businessProfile: any = {
    businessName: 'Your Business Name',
    industry: 'Your Industry',
    location: 'Your Location',
    description: 'Your Description',
    goal: 'Your Goal',
    opportunities: 'Your Opportunities',
    profilePicture: 'https://media.istockphoto.com/id/1317804578/photo/one-businesswoman-headshot-smiling-at-the-camera.jpg?s=612x612&w=0&k=20&c=EqR2Lffp4tkIYzpqYh8aYIPRr-gmZliRHRxcQC5yylY='
  };

  constructor(private router: Router) {}

  navigate(route: string): void {
    this.router.navigate([route]);
  }

}
