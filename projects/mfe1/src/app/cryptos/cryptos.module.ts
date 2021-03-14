import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CryptosSearchComponent } from './cryptos-search/cryptos-search.component';
import { CRYPTOS_ROUTES } from './cryptos.routes';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(CRYPTOS_ROUTES)],
  declarations: [CryptosSearchComponent],
})
export class CryptosModule {}
