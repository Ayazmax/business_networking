import { Component } from '@angular/core';
import { LsnavbarComponent } from "../lsnavbar/lsnavbar.component";

@Component({
    selector: 'app-signup',
    standalone: true,
    templateUrl: './signup.component.html',
    styleUrl: './signup.component.css',
    imports: [LsnavbarComponent]
})
export class SignupComponent {

}
