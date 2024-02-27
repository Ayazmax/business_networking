import { Component } from '@angular/core';
import { HnavbarComponent } from "../hnavbar/hnavbar.component";
import { Router } from '@angular/router';

@Component({
    selector: 'app-setupgoals',
    standalone: true,
    templateUrl: './setupgoals.component.html',
    styleUrl: './setupgoals.component.css',
    imports: [HnavbarComponent]
})
export class SetupgoalsComponent {
saveGoal() {
throw new Error('Method not implemented.');
}

constructor(private router: Router) {}
  
navigate(route: string): void {
  this.router.navigate([route]);
}


}
