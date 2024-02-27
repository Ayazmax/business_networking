import { Component } from '@angular/core';

@Component({
  selector: 'app-lsnavbar',
  standalone: true,
  imports: [],
  templateUrl: './lsnavbar.component.html',
  styleUrl: './lsnavbar.component.css'
})
export class LsnavbarComponent {
  activeLink: string = '';

  setActiveLink(link: string): void {
    this.activeLink = link;
  }
}
