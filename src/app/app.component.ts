import { Component } from '@angular/core';
import { Registration } from './components/models';
import { RegistrationService } from './services/registration.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'regform';
  constructor(private regSvc: RegistrationService) {}
  
  processForm($event: Registration) {
    console.info($event);
    this.regSvc
      .register($event)
      .then((result) => {
        console.info('>>> result', result);
      })
      .catch((error) => {
        console.error('>>>> error', error);
      });
  }
}
