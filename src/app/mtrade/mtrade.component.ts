import { Component, OnInit } from '@angular/core';
import { HnavbarComponent } from "../hnavbar/hnavbar.component";
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-mtrade',
    standalone: true,
    templateUrl: './mtrade.component.html',
    styleUrl: './mtrade.component.css',
    imports: [HnavbarComponent, CommonModule],
})
export class MtradeComponent {
  
  trades: any;
  
  createTrade() {
  throw new Error('Method not implemented.');
  }
  deleteTrade() {
  throw new Error('Method not implemented.');
  }

}
