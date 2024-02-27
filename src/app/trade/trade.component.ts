import { Component } from '@angular/core';
import { HnavbarComponent } from "../hnavbar/hnavbar.component";

@Component({
    selector: 'app-trade',
    standalone: true,
    templateUrl: './trade.component.html',
    styleUrl: './trade.component.css',
    imports: [HnavbarComponent]
})
export class TradeComponent {

  viewTrades() {
  throw new Error('Method not implemented.');
  }
  
  manageTrades() {
  throw new Error('Method not implemented.');
  }

  searchTrades() {
  throw new Error('Method not implemented.');
  }

}
