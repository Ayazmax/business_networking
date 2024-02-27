import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HnavbarComponent } from "../hnavbar/hnavbar.component";

@Component({
    selector: 'app-vtrade',
    standalone: true,
    templateUrl: './vtrade.component.html',
    styleUrl: './vtrade.component.css',
    imports: [HnavbarComponent, CommonModule],
})
export class VtradeComponent {
searchByItem() {
throw new Error('Method not implemented.');
}

trades: any;

}
