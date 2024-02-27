import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LsnavbarComponent } from "./lsnavbar/lsnavbar.component";
import { HnavbarComponent } from './hnavbar/hnavbar.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, LsnavbarComponent, HnavbarComponent]
})
export class AppComponent {
  title = 'test';
}
