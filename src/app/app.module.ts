import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RegformComponent } from './components/regform.component';
import { RegistrationService } from './services/registration.service';

@NgModule({
  declarations: [AppComponent, RegformComponent],
  imports: [BrowserModule, HttpClientModule, FormsModule, ReactiveFormsModule],
  providers: [RegistrationService],
  bootstrap: [AppComponent],
})
export class AppModule {}
