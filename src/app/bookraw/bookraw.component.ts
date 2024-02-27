import { Component } from '@angular/core';
import { HnavbarComponent } from "../hnavbar/hnavbar.component";
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-bookraw',
    standalone: true,
    templateUrl: './bookraw.component.html',
    styleUrl: './bookraw.component.css',
    imports: [HnavbarComponent, CommonModule]
})
export class BookrawComponent {
  
  trades: any;
  searchByItem() {
  throw new Error('Method not implemented.');
  }
  bookTrade() {
  throw new Error('Method not implemented.');
  }

}
