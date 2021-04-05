import { Component } from '@angular/core';
import { WalletLibService } from 'wallet-lib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'shell';
  constructor(private walletService: WalletLibService) {
    this.walletService.purchase(100);
  }
}
