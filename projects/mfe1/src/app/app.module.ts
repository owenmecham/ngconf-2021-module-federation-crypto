import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { APP_ROUTES } from './app.routes';
import { CryptosModule } from './cryptos/cryptos.module';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [BrowserModule, CryptosModule, RouterModule.forRoot(APP_ROUTES), BrowserAnimationsModule],
  declarations: [HomeComponent, AppComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
